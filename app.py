from flask import Flask, render_template, jsonify, request, session
from flask_cors import CORS
import numpy as np
import librosa
import random
import io
import os
import json
import jwt
import threading
from datetime import datetime
from scipy.io import wavfile

app = Flask(__name__)
CORS(app)
app.secret_key = os.environ.get('FLASK_SECRET_KEY', 'dev-secret-key-change-in-production')
JWT_SECRET = os.environ.get('JWT_SECRET', 'dev-jwt-secret')

# Guitar tuning
STANDARD_TUNING = {
    6: 82.41, 5: 110.00, 4: 146.83, 
    3: 196.00, 2: 246.94, 1: 329.63
}

NOTE_NAMES = ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B']

NOTE_TO_SEMITONE = {
    'C': 0, 'D': 2, 'E': 4, 'F': 5,
    'G': 7, 'A': 9, 'B': 11
}

def freq_to_note_name(freq):
    midi_note = 69 + 12 * np.log2(freq / 440.0)
    note_index = int(round(midi_note)) % 12
    octave = int(round(midi_note)) // 12 - 1
    return f"{NOTE_NAMES[note_index]}{octave}"

def freq_to_note_name_no_octave(freq):
    midi_note = 69 + 12 * np.log2(freq / 440.0)
    note_index = int(round(midi_note)) % 12
    return NOTE_NAMES[note_index]

def freq_to_semitone(freq):
    midi_note = 69 + 12 * np.log2(freq / 440.0)
    return int(round(midi_note)) % 12

def calculate_fret_frequency(string_num, fret):
    open_freq = STANDARD_TUNING[string_num]
    return open_freq * (2 ** (fret / 12))

def cents_difference(freq1, freq2):
    return 1200 * np.log2(freq2 / freq1)

def analyze_audio(audio_data, sample_rate):
    frame_length = 4096
    f0, voiced_flag, voiced_probs = librosa.pyin(
        audio_data,
        fmin=librosa.note_to_hz('E2'),
        fmax=librosa.note_to_hz('E6'),
        sr=sample_rate,
        frame_length=frame_length,
    )
    voiced_pitches = f0[voiced_flag & (voiced_probs > 0.5)]
    if len(voiced_pitches) > 0:
        return float(np.median(voiced_pitches))
    return None

def note_name_to_semitone(note_name):
    base = note_name.strip().split('/')[0][0].upper()
    return NOTE_TO_SEMITONE.get(base, -1)

def get_chord_semitones(chord_notes):
    semitones = set()
    for note in chord_notes:
        semitones.add(note_name_to_semitone(note))
    return semitones

@app.before_request
def check_subscription_token():
    token = request.args.get('token')
    if token:
        try:
            payload = jwt.decode(token, JWT_SECRET, algorithms=['HS256'])
            session['is_subscribed'] = payload.get('tier') == 'pro'
        except (jwt.ExpiredSignatureError, jwt.InvalidTokenError):
            pass

def get_subscription_status():
    return session.get('is_subscribed', False)

@app.route('/')
def home():
    return render_template('home.html', is_subscribed=get_subscription_status())

@app.route('/tuner')
def tuner():
    return render_template('tuner.html', is_subscribed=get_subscription_status())

@app.route('/game')
def game():
    return render_template('index.html', is_subscribed=get_subscription_status())

@app.route('/chords')
def chords():
    return render_template('chords.html', is_subscribed=get_subscription_status())

@app.route('/chord-trainer')
def chord_trainer():
    return render_template('chord-trainer.html', is_subscribed=get_subscription_status())

@app.route('/scale-trainer')
def scale_trainer():
    return render_template('scale-trainer.html', is_subscribed=get_subscription_status())

@app.route('/notes-and-patterns')
def notes_and_patterns():
    return render_template('notes-and-patterns.html', is_subscribed=get_subscription_status())

FEEDBACK_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'feedback.json')
feedback_lock = threading.Lock()

@app.route('/feedback', methods=['POST'])
def feedback():
    data = request.get_json(silent=True) or {}
    entry = {
        'timestamp': datetime.utcnow().isoformat() + 'Z',
        'section': data.get('section', ''),
        'category': data.get('category', ''),
        'message': data.get('message', ''),
        'user_agent': request.headers.get('User-Agent', '')
    }
    with feedback_lock:
        entries = []
        if os.path.exists(FEEDBACK_FILE):
            with open(FEEDBACK_FILE, 'r') as f:
                entries = json.load(f)
        entries.append(entry)
        with open(FEEDBACK_FILE, 'w') as f:
            json.dump(entries, f, indent=2)
    return jsonify({'success': True})

@app.route('/feedback/view')
def feedback_view():
    if request.args.get('key') != 'ssc2026':
        return 'Forbidden', 403
    entries = []
    if os.path.exists(FEEDBACK_FILE):
        with open(FEEDBACK_FILE, 'r') as f:
            entries = json.load(f)
    entries.reverse()
    rows = ''
    for e in entries:
        rows += f"<tr><td>{e.get('timestamp','')}</td><td>{e.get('section','')}</td><td>{e.get('category','')}</td><td>{e.get('message','')}</td><td style='font-size:0.75em'>{e.get('user_agent','')}</td></tr>"
    return f"""<!DOCTYPE html><html><head><title>Feedback</title>
<style>body{{font-family:sans-serif;background:#1a2e35;color:#e0e0e0;padding:20px}}
table{{border-collapse:collapse;width:100%}}th,td{{border:1px solid rgba(255,255,255,0.15);padding:8px;text-align:left;font-size:0.9em}}
th{{background:rgba(255,255,255,0.08)}}</style></head>
<body><h2>Feedback ({len(entries)} entries)</h2>
<table><tr><th>Time</th><th>Section</th><th>Category</th><th>Message</th><th>User Agent</th></tr>{rows}</table></body></html>"""

@app.route('/scale-trainer/download/<int:pos>')
def scale_trainer_download(pos):
    if pos > 1 and not get_subscription_status():
        return 'Subscription required', 403
    import zipfile
    import tempfile
    from flask import send_file

    files_map = {
        1: {
            'pdf': 'static/Scales_and_Melodies_Position_1_Tabs.pdf',
            'melody': 'static/Take_Me_Home_Position_1.mp3',
            'backing': 'static/Take_Me_Home_Positon_1_No_Melody.mp3',
            'name': 'Scales_and_Melodies_Position_1.zip'
        },
        2: {
            'pdf': 'static/Scales_and_Melodies_Position_2_Tabs.pdf',
            'melody': 'static/Gone_Country_Position_2.mp3',
            'backing': 'static/Gone_Country_Position_2_No_Melody.mp3',
            'name': 'Scales_and_Melodies_Position_2.zip'
        },
        3: {
            'pdf': 'static/Scales_and_Melodies_Position_3_Tabs.pdf',
            'melody': 'static/Tennessee_Whiskey_Position_3.mp3',
            'backing': 'static/Tennessee_Whiskey_Position_3_No_Melody.mp3',
            'name': 'Scales_and_Melodies_Position_3.zip'
        },
        4: {
            'pdf': 'static/Scales_and_Melodies_Position_4_Tabs.pdf',
            'melody': 'static/Have_You_Ever_Seen_the_Rain_Position_4.mp3',
            'backing': 'static/Have_You_Ever_Seen_the_Rain_Position_4_No_Melody.mp3',
            'name': 'Scales_and_Melodies_Position_4.zip'
        },
        5: {
            'pdf': 'static/Scales_and_Melodies_Position_5_Tabs.pdf',
            'melody': 'static/Friends_in_Low_Places_Position_5.mp3',
            'backing': 'static/Friends_in_Low_Places_Position_5_No_Melody.mp3',
            'name': 'Scales_and_Melodies_Position_5.zip'
        }
    }
    
    if pos not in files_map:
        return 'Position not found', 404
    
    f = files_map[pos]
    zip_buffer = io.BytesIO()
    with zipfile.ZipFile(zip_buffer, 'w', zipfile.ZIP_DEFLATED) as zf:
        import os
        for key in ['pdf', 'melody', 'backing']:
            filepath = f[key]
            if os.path.exists(filepath):
                zf.write(filepath, os.path.basename(filepath))
    zip_buffer.seek(0)
    return send_file(zip_buffer, mimetype='application/zip', as_attachment=True, download_name=f['name'])

@app.route('/get_challenge', methods=['GET'])
def get_challenge():
    string_num = random.randint(1, 6)
    target_note_index = random.randint(0, 11)
    
    open_string_freq = STANDARD_TUNING[string_num]
    open_note_index = NOTE_NAMES.index(freq_to_note_name_no_octave(open_string_freq))
    
    semitones_up = (target_note_index - open_note_index) % 12
    fret = semitones_up
    
    expected_freq = calculate_fret_frequency(string_num, fret)
    note_name = NOTE_NAMES[target_note_index]
    
    string_names = {
        6: "6th string", 5: "5th string", 4: "4th string",
        3: "3rd string", 2: "2nd string", 1: "1st string"
    }

    string_label = string_names[string_num]
    instruction = f"{string_label.capitalize()}: find the lowest {note_name} note."
    
    return jsonify({
        'string': string_num,
        'fret': fret,
        'instruction': instruction,
        'note_name': note_name,
        'expected_freq': expected_freq
    })

@app.route('/get_level_challenge', methods=['GET'])
def get_level_challenge():
    string_num = int(request.args.get('string', 1))
    min_fret = int(request.args.get('min_fret', 0))
    max_fret = int(request.args.get('max_fret', 5))
    
    fret = random.randint(min_fret, max_fret)
    
    expected_freq = calculate_fret_frequency(string_num, fret)
    detected_note = freq_to_note_name_no_octave(expected_freq)
    
    string_names = {
        6: "6th string", 5: "5th string", 4: "4th string",
        3: "3rd string", 2: "2nd string", 1: "1st string"
    }
    
    fret_text = "open string" if fret == 0 else f"fret {fret}"
    instruction = f"{string_names[string_num].capitalize()}, {fret_text}"
    
    return jsonify({
        'string': string_num,
        'fret': fret,
        'instruction': instruction,
        'note_name': detected_note,
        'expected_freq': expected_freq
    })

@app.route('/check_note', methods=['POST'])
def check_note():
    try:
        expected_freq = float(request.form['expected_freq'])
        expected_note_name = request.form['note_name']
        fret = int(request.form['fret'])
        
        audio_file = request.files['audio']
        
        audio_bytes = io.BytesIO(audio_file.read())
        sample_rate, audio_data = wavfile.read(audio_bytes)
        
        if len(audio_data.shape) > 1:
            audio_data = audio_data[:, 0]
        
        if audio_data.dtype == np.int16:
            audio_data = audio_data.astype(np.float32) / 32768.0
        elif audio_data.dtype != np.float32:
            audio_data = audio_data.astype(np.float32)
        
        detected_freq = analyze_audio(audio_data, sample_rate)
        
        if detected_freq is None:
            return jsonify({'success': False, 'message': 'No sound detected - try playing louder!'})
        
        detected_note_name = freq_to_note_name_no_octave(detected_freq)
        cents_off = cents_difference(expected_freq, detected_freq)
        
        fret_text = "open string" if fret == 0 else f"fret {fret}"
        
        if abs(cents_off) <= 75:
            result = 'perfect'
            message = f'Note Played: {detected_note_name}\n✅ Correct! {fret_text.capitalize()}.'
        else:
            result = 'wrong'
            message = f'Note Played: {detected_note_name}\n❌ Oops! {expected_note_name} is on {fret_text}.'
        
        return jsonify({
            'success': True,
            'result': result,
            'message': message,
            'detected_freq': float(detected_freq),
            'detected_note': detected_note_name
        })
    
    except Exception as e:
        return jsonify({'success': False, 'message': f'Error: {str(e)}'})

@app.route('/detect_pitch', methods=['POST'])
def detect_pitch():
    try:
        audio_file = request.files['audio']
        audio_bytes = io.BytesIO(audio_file.read())
        sample_rate, audio_data = wavfile.read(audio_bytes)
        
        if len(audio_data.shape) > 1:
            audio_data = audio_data[:, 0]
        if audio_data.dtype == np.int16:
            audio_data = audio_data.astype(np.float32) / 32768.0
        elif audio_data.dtype != np.float32:
            audio_data = audio_data.astype(np.float32)
        
        detected_freq = analyze_audio(audio_data, sample_rate)
        
        if detected_freq is None:
            return jsonify({'success': True, 'freq': None})
        
        detected_note = freq_to_note_name_no_octave(detected_freq)
        
        return jsonify({
            'success': True,
            'freq': float(detected_freq),
            'note': detected_note
        })
    except Exception as e:
        return jsonify({'success': False, 'freq': None, 'error': str(e)})

@app.route('/check_strum', methods=['POST'])
def check_strum():
    try:
        chord_notes = request.form['chord_notes'].split(',')
        chord_name = request.form.get('chord_name', 'that chord')
        
        audio_file = request.files['audio']
        audio_bytes = io.BytesIO(audio_file.read())
        sample_rate, audio_data = wavfile.read(audio_bytes)
        
        if len(audio_data.shape) > 1:
            audio_data = audio_data[:, 0]
        if audio_data.dtype == np.int16:
            audio_data = audio_data.astype(np.float32) / 32768.0
        elif audio_data.dtype != np.float32:
            audio_data = audio_data.astype(np.float32)
        
        detected_freq = analyze_audio(audio_data, sample_rate)
        
        if detected_freq is None:
            return jsonify({'success': False, 'message': 'No sound detected - strum louder!'})
        
        detected_semitone = freq_to_semitone(detected_freq)
        detected_note = freq_to_note_name_no_octave(detected_freq)
        
        chord_semitones = get_chord_semitones(chord_notes)
        
        if detected_semitone in chord_semitones:
            return jsonify({
                'success': True,
                'result': 'perfect',
                'message': f'🎸 {chord_name}!',
                'detected_note': detected_note
            })
        else:
            return jsonify({
                'success': True,
                'result': 'wrong',
                'message': f'Heard {detected_note} — make sure all fingers are pressed firmly and try again!',
                'detected_note': detected_note
            })
    
    except Exception as e:
        return jsonify({'success': False, 'message': f'Error: {str(e)}'})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)
