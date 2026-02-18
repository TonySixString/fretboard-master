import sounddevice as sd
import numpy as np
import aubio
import random

# Guitar tuning (standard): string number -> open string note frequency (Hz)
STANDARD_TUNING = {
    6: 82.41,   # E2 (low E)
    5: 110.00,  # A2
    4: 146.83,  # D3
    3: 196.00,  # G3
    2: 246.94,  # B3
    1: 329.63   # E4 (high E)
}

# Note names for display
NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

def freq_to_note_name(freq):
    """Convert frequency to note name"""
    midi_note = 69 + 12 * np.log2(freq / 440.0)
    note_index = int(round(midi_note)) % 12
    octave = int(round(midi_note)) // 12 - 1
    return f"{NOTE_NAMES[note_index]}{octave}"

def calculate_fret_frequency(string_num, fret):
    """Calculate the frequency of a specific fret on a string"""
    open_freq = STANDARD_TUNING[string_num]
    # Each fret is one semitone: freq * 2^(fret/12)
    return open_freq * (2 ** (fret / 12))

def cents_difference(freq1, freq2):
    """Calculate difference in cents between two frequencies"""
    return 1200 * np.log2(freq2 / freq1)

def record_and_detect_pitch(duration=3):
    """Record audio and detect pitch"""
    SAMPLE_RATE = 44100
    
    print(f"Recording for {duration} seconds...")
    audio = sd.rec(int(duration * SAMPLE_RATE), samplerate=SAMPLE_RATE, channels=1, dtype='float32')
    sd.wait()
    print("Recording finished!\n")
    
    audio_data = np.squeeze(audio)
    
    # Pitch detection
    pitch_detector = aubio.pitch("default", 2048, 2048//2, SAMPLE_RATE)
    pitch_detector.set_unit("Hz")
    
    pitches = []
    hop_size = 2048 // 2
    
    for i in range(0, len(audio_data) - hop_size, hop_size):
        frame = audio_data[i:i+hop_size]
        pitch = pitch_detector(frame.astype(np.float32))[0]
        if pitch > 50:  # Filter out very low frequencies (likely noise)
            pitches.append(pitch)
    
    if pitches:
        return np.median(pitches)
    return None

# Main drill loop
def run_drill():
    print("=== FRETBOARD DRILL ===\n")
    
    # Pick random string and fret
    string_num = random.randint(1, 6)
    fret = random.randint(0, 12)
    
    # Calculate expected frequency
    expected_freq = calculate_fret_frequency(string_num, fret)
    expected_note = freq_to_note_name(expected_freq)
    
    # Give instruction
    fret_name = "open string" if fret == 0 else f"{fret}th fret" if fret >= 4 else f"{fret}{'st' if fret==1 else 'nd' if fret==2 else 'rd'} fret"
    string_name = f"{'6th (low E)' if string_num==6 else '5th (A)' if string_num==5 else '4th (D)' if string_num==4 else '3rd (G)' if string_num==3 else '2nd (B)' if string_num==2 else '1st (high E)'} string"
    
    print(f"Play the {expected_note} note")
    print(f"Location: {string_name}, {fret_name}")
    print(f"(Expected frequency: {expected_freq:.2f} Hz)\n")
    
    input("Press Enter when ready to play...")
    
    # Record and analyze
    detected_freq = record_and_detect_pitch(duration=3)
    
    if detected_freq is None:
        print("❌ No pitch detected - try playing louder or closer to the microphone!")
        return
    
    detected_note = freq_to_note_name(detected_freq)
    cents_off = cents_difference(expected_freq, detected_freq)
    
    print(f"You played: {detected_freq:.2f} Hz ({detected_note})")
    print(f"Expected: {expected_freq:.2f} Hz ({expected_note})\n")
    
    # Feedback - widened tolerance for real-world guitar tuning
    if abs(cents_off) <= 25:  # ±25 cents is "perfect"
        print("✅ Perfect! Right on pitch!")
    elif abs(cents_off) <= 50:  # ±50 cents is "close"
        direction = "sharp" if cents_off > 0 else "flat"
        print(f"✅ Close! You're {abs(cents_off):.1f} cents {direction}")
    else:
        if detected_note == expected_note:
            direction = "sharp" if cents_off > 0 else "flat"
            print(f"⚠️  Right note, but {abs(cents_off):.1f} cents {direction} - check your tuning!")
        else:
            print(f"❌ Wrong note - you played {detected_note}, expected {expected_note}")

if __name__ == "__main__":
    while True:
        run_drill()
        print("\n" + "="*40 + "\n")
        again = input("Try another note? (y/n): ")
        if again.lower() != 'y':
            print("Great practice session!")
            break
