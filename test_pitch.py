import sounddevice as sd
import numpy as np
import aubio

# Settings
SAMPLE_RATE = 44100
DURATION = 3  # seconds

print("Recording for 3 seconds... play a note!")
audio = sd.rec(int(DURATION * SAMPLE_RATE), samplerate=SAMPLE_RATE, channels=1, dtype='float32')
sd.wait()
print("Recording finished!")

# Convert to the format aubio expects
audio_data = np.squeeze(audio)

# Pitch detection
pitch_detector = aubio.pitch("default", 2048, 2048//2, SAMPLE_RATE)
pitch_detector.set_unit("Hz")

pitches = []
hop_size = 2048 // 2

for i in range(0, len(audio_data) - hop_size, hop_size):
    frame = audio_data[i:i+hop_size]
    pitch = pitch_detector(frame.astype(np.float32))[0]
    if pitch > 0:  # Only count actual pitches, not silence
        pitches.append(pitch)

if pitches:
    avg_pitch = np.median(pitches)
    print(f"\nDetected pitch: {avg_pitch:.2f} Hz")
    
    # Convert to note name (rough estimate)
    note_names = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
    midi_note = 69 + 12 * np.log2(avg_pitch / 440.0)
    note_index = int(round(midi_note)) % 12
    octave = int(round(midi_note)) // 12 - 1
    print(f"That's approximately: {note_names[note_index]}{octave}")
else:
    print("No pitch detected - try playing louder!")
