# Six String Country — Fretboard Master

An interactive web-based guitar learning app that helps players master guitar fundamentals through games, training modules, and real-time pitch detection — with a focus on country music.

## Features

- **Chromatic Tuner** — Real-time pitch detection tuner with visual feedback for all 6 strings
- **Strings & Note Names Game** — Challenge modes (by note, by fret, pattern recognition) with level progression and score tracking
- **Chord Trainer** — Learn chord shapes, drill progressions, ear training, and play along to real country songs (Premium)
- **Scales & Melodies** — 5 pentatonic positions with simplified melodies from country classics like *Take Me Home*, *Gone Country*, *Tennessee Whiskey*, and more (Premium)
- **Notes & Patterns** — Fretboard note names, intervals, octaves, and country double stops (Premium)
- **Chord Reference** — Interactive chord diagrams and variations

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | Flask 3.1, Gunicorn, Python 3.9 |
| Audio Processing | librosa, scipy, numpy, soundfile |
| Frontend | HTML5/CSS3/JavaScript, Web Audio API, Jinja2 |
| Auth | PyJWT (subscription gating) |
| Deployment | Render |

## Getting Started

### Prerequisites

- Python 3.9+
- pip

### Installation

```bash
git clone <repo-url>
cd fretboard-master

python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

pip install -r requirements.txt
```

### Run (Development)

```bash
python app.py
# Starts on http://localhost:5001
```

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `FLASK_SECRET_KEY` | Session encryption key | `dev-secret-key-change-in-production` |
| `JWT_SECRET` | JWT signing secret for subscriptions | `dev-jwt-secret` |

## Project Structure

```
fretboard-master/
├── app.py                    # Flask application & API routes
├── fretboard_drill.py        # Standalone CLI drill tool
├── requirements.txt          # Python dependencies
├── render.yaml               # Render deployment config
├── templates/
│   ├── home.html             # Landing page / module menu
│   ├── index.html            # Strings & Note Names game
│   ├── tuner.html            # Chromatic tuner
│   ├── chords.html           # Chord reference
│   ├── chord-trainer.html    # Chord training module
│   ├── scale-trainer.html    # Scales & melodies module
│   └── notes-and-patterns.html
└── static/
    ├── style.css             # Global styles
    ├── fretboard-master.js   # Main game logic
    ├── chord-trainer.js      # Chord trainer logic
    ├── scale-trainer.js      # Scale trainer logic
    ├── chords.js             # Chord data
    └── *.mp3 / *.pdf         # Audio samples, backing tracks & tab sheets
```

## API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| `GET` | `/` | Home / module menu |
| `GET` | `/game` | Strings & Note Names game |
| `GET` | `/tuner` | Chromatic tuner |
| `GET` | `/chords` | Chord reference |
| `GET` | `/chord-trainer` | Chord training module |
| `GET` | `/scale-trainer` | Scales & melodies |
| `GET` | `/notes-and-patterns` | Notes & patterns |
| `GET` | `/get_challenge` | Random note challenge |
| `GET` | `/get_level_challenge` | Level-specific challenge |
| `POST` | `/check_note` | Validate played note via audio |
| `POST` | `/detect_pitch` | Detect pitch from audio |
| `POST` | `/check_strum` | Validate chord strum |
| `POST` | `/feedback` | Submit user feedback |

## How Pitch Detection Works

1. Client records audio via the Web Audio API
2. WAV file is sent to the Flask backend
3. **librosa's pyin algorithm** analyzes the pitch (range: E2–E6, tolerance: ±75 cents)
4. Detected frequency is converted to a MIDI note and compared against the expected note
5. Visual feedback is returned to the player

## Deployment

Configured for [Render](https://render.com) via `render.yaml`:

```bash
# Build
pip install -r requirements.txt

# Start
gunicorn app:app
```

## License

All rights reserved.
