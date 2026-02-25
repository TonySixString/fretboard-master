// ============================================================
// ACTIVE POSITION — set by menu selection
// ============================================================
let activePosition = null;
let SCALE_NOTES, SCALE_SEQUENCE, MELODY_NOTES, DEMO_MELODY, FRET_TO_FINGER;
let MELODY_AUDIO_FILE, BACKING_AUDIO_FILE, DOWNLOAD_URL, VIDEO_URL;
let POSITION_LABEL, SONG_TITLE, SONG_ARTIST, FRET_RANGE;

function setPosition(pos) {
    activePosition = pos;
    const p = POSITIONS[pos];
    SCALE_NOTES = p.scaleNotes;
    SCALE_SEQUENCE = p.scaleSequence;
    MELODY_NOTES = p.melodyNotes;
    DEMO_MELODY = p.demoMelody;
    FRET_TO_FINGER = p.fretToFinger;
    MELODY_AUDIO_FILE = p.melodyAudio;
    BACKING_AUDIO_FILE = p.backingAudio;
    DOWNLOAD_URL = p.downloadUrl;
    VIDEO_URL = p.videoUrl;
    POSITION_LABEL = p.label;
    SONG_TITLE = p.songTitle;
    SONG_ARTIST = p.songArtist;
    FRET_RANGE = p.fretRange || { min: 0, max: 5 };
}

// ============================================================
// STANDARD TUNING
// ============================================================
const STANDARD_TUNING = {
    6: 82.41, 5: 110.00, 4: 146.83,
    3: 196.00, 2: 246.94, 1: 329.63
};

// ============================================================
// POSITION 1 — G Major Pentatonic, Country Roads
// ============================================================
const P1_FRET_TO_FINGER = { 2: 1, 3: 2, 4: 3, 5: 4 };

const P1_SCALE_NOTES = [
    { string: 6, fret: 3, note: 'G', degree: 'Root', finger: 2 },
    { string: 6, fret: 5, note: 'A', degree: '2nd', finger: 4 },
    { string: 5, fret: 2, note: 'B', degree: '3rd', finger: 1 },
    { string: 5, fret: 5, note: 'D', degree: '5th', finger: 4 },
    { string: 4, fret: 2, note: 'E', degree: '6th', finger: 1 },
    { string: 4, fret: 5, note: 'G', degree: 'Root', finger: 4 },
    { string: 3, fret: 2, note: 'A', degree: '2nd', finger: 1 },
    { string: 3, fret: 4, note: 'B', degree: '3rd', finger: 3 },
    { string: 2, fret: 3, note: 'D', degree: '5th', finger: 2 },
    { string: 2, fret: 5, note: 'E', degree: '6th', finger: 4 },
    { string: 1, fret: 3, note: 'G', degree: 'Root', finger: 2 },
    { string: 1, fret: 5, note: 'A', degree: '2nd', finger: 4 }
];

const P1_SCALE_SEQUENCE = [
    { string: 6, fret: 3, note: 'G', degree: 'Root', finger: 2 },
    { string: 6, fret: 5, note: 'A', degree: '2nd', finger: 4 },
    { string: 5, fret: 2, note: 'B', degree: '3rd', finger: 1 },
    { string: 5, fret: 5, note: 'D', degree: '5th', finger: 4 },
    { string: 4, fret: 2, note: 'E', degree: '6th', finger: 1 },
    { string: 4, fret: 5, note: 'G', degree: 'Root', finger: 4 },
    { string: 3, fret: 2, note: 'A', degree: '2nd', finger: 1 },
    { string: 3, fret: 4, note: 'B', degree: '3rd', finger: 3 },
    { string: 2, fret: 3, note: 'D', degree: '5th', finger: 2 },
    { string: 2, fret: 5, note: 'E', degree: '6th', finger: 4 },
    { string: 1, fret: 3, note: 'G', degree: 'Root', finger: 2 },
    { string: 1, fret: 5, note: 'A', degree: '2nd', finger: 4 },
    { string: 1, fret: 3, note: 'G', degree: 'Root', finger: 2 },
    { string: 2, fret: 5, note: 'E', degree: '6th', finger: 4 },
    { string: 2, fret: 3, note: 'D', degree: '5th', finger: 2 },
    { string: 3, fret: 4, note: 'B', degree: '3rd', finger: 3 },
    { string: 3, fret: 2, note: 'A', degree: '2nd', finger: 1 },
    { string: 4, fret: 5, note: 'G', degree: 'Root', finger: 4 },
    { string: 4, fret: 2, note: 'E', degree: '6th', finger: 1 },
    { string: 5, fret: 5, note: 'D', degree: '5th', finger: 4 },
    { string: 5, fret: 2, note: 'B', degree: '3rd', finger: 1 },
    { string: 6, fret: 5, note: 'A', degree: '2nd', finger: 4 },
    { string: 6, fret: 3, note: 'G', degree: 'Root', finger: 2 },
    { string: 6, fret: 3, note: 'G', degree: 'Root', finger: 2 }
];

const P1_MELODY_NOTES = [
    { string: 4, fret: 5, note: 'G', chord: 'G' },
    { string: 3, fret: 2, note: 'A', chord: 'G' },
    { string: 3, fret: 4, note: 'B', chord: 'G' },
    { string: 3, fret: 4, note: 'B', chord: 'G' },
    { string: 3, fret: 4, note: 'B', chord: 'G' },
    { string: 3, fret: 2, note: 'A', chord: 'D' },
    { string: 3, fret: 4, note: 'B', chord: 'D' },
    { string: 3, fret: 2, note: 'A', chord: 'D' },
    { string: 4, fret: 5, note: 'G', chord: 'Em' },
    { string: 3, fret: 4, note: 'B', chord: 'Em' },
    { string: 2, fret: 3, note: 'D', chord: 'Em' },
    { string: 2, fret: 5, note: 'E', chord: 'C' },
    { string: 2, fret: 5, note: 'E', chord: 'C' },
    { string: 2, fret: 5, note: 'E', chord: 'C' },
    { string: 2, fret: 3, note: 'D', chord: 'G' },
    { string: 3, fret: 4, note: 'B', chord: 'G' },
    { string: 3, fret: 4, note: 'B', chord: 'G' },
    { string: 3, fret: 4, note: 'B', chord: 'G' },
    { string: 3, fret: 2, note: 'A', chord: 'D' },
    { string: 3, fret: 4, note: 'B', chord: 'D' },
    { string: 3, fret: 4, note: 'B', chord: 'D' },
    { string: 3, fret: 2, note: 'A', chord: 'D' },
    { string: 4, fret: 5, note: 'G', chord: 'C' },
    { string: 4, fret: 5, note: 'G', chord: 'C' },
    { string: 3, fret: 2, note: 'A', chord: 'C' },
    { string: 4, fret: 5, note: 'G', chord: 'G' }
];

const P1_DEMO_MELODY = [
    { time: 2.3684, string: 4, fret: 5, note: 'G', chord: 'G', dur: 0.3947 },
    { time: 2.7632, string: 3, fret: 2, note: 'A', chord: 'G', dur: 0.3947 },
    { time: 3.1579, string: 3, fret: 4, note: 'B', chord: 'G', dur: 2.3684 },
    { time: 5.5263, string: 3, fret: 4, note: 'B', chord: 'G', dur: 0.3947 },
    { time: 5.9211, string: 3, fret: 4, note: 'B', chord: 'G', dur: 0.3947 },
    { time: 6.3158, string: 3, fret: 2, note: 'A', chord: 'D', dur: 2.3684 },
    { time: 8.6842, string: 3, fret: 4, note: 'B', chord: 'D', dur: 0.3947 },
    { time: 9.0789, string: 3, fret: 2, note: 'A', chord: 'D', dur: 0.3947 },
    { time: 9.4737, string: 4, fret: 5, note: 'G', chord: 'Em', dur: 2.3684 },
    { time: 11.8421, string: 3, fret: 4, note: 'B', chord: 'Em', dur: 0.3947 },
    { time: 12.2368, string: 2, fret: 3, note: 'D', chord: 'Em', dur: 0.3947 },
    { time: 12.6316, string: 2, fret: 5, note: 'E', chord: 'C', dur: 2.3684 },
    { time: 15.0, string: 2, fret: 5, note: 'E', chord: 'C', dur: 0.3947 },
    { time: 15.3947, string: 2, fret: 5, note: 'E', chord: 'C', dur: 0.3947 },
    { time: 15.7895, string: 2, fret: 3, note: 'D', chord: 'G', dur: 0.3947 },
    { time: 16.1842, string: 3, fret: 4, note: 'B', chord: 'G', dur: 1.9737 },
    { time: 18.1579, string: 3, fret: 4, note: 'B', chord: 'G', dur: 0.3947 },
    { time: 18.5526, string: 3, fret: 4, note: 'B', chord: 'G', dur: 0.3947 },
    { time: 18.9474, string: 3, fret: 2, note: 'A', chord: 'D', dur: 0.3947 },
    { time: 19.3421, string: 3, fret: 4, note: 'B', chord: 'D', dur: 1.9737 },
    { time: 21.3158, string: 3, fret: 4, note: 'B', chord: 'D', dur: 0.3947 },
    { time: 21.7105, string: 3, fret: 2, note: 'A', chord: 'D', dur: 0.3947 },
    { time: 22.1053, string: 4, fret: 5, note: 'G', chord: 'C', dur: 2.3684 },
    { time: 24.4737, string: 4, fret: 5, note: 'G', chord: 'C', dur: 0.3947 },
    { time: 24.8684, string: 3, fret: 2, note: 'A', chord: 'C', dur: 0.3947 },
    { time: 25.2632, string: 4, fret: 5, note: 'G', chord: 'G', dur: 2.3684 },
    { time: 27.6316, string: 4, fret: 5, note: 'G', chord: 'G', dur: 0.3947 },
    { time: 28.0263, string: 3, fret: 2, note: 'A', chord: 'G', dur: 0.3947 },
    { time: 28.4211, string: 3, fret: 4, note: 'B', chord: 'G', dur: 2.3684 },
    { time: 30.7895, string: 3, fret: 4, note: 'B', chord: 'G', dur: 0.3947 },
    { time: 31.1842, string: 3, fret: 4, note: 'B', chord: 'G', dur: 0.3947 },
    { time: 31.5789, string: 3, fret: 2, note: 'A', chord: 'D', dur: 2.3684 },
    { time: 33.9474, string: 3, fret: 4, note: 'B', chord: 'D', dur: 0.3947 },
    { time: 34.3421, string: 3, fret: 2, note: 'A', chord: 'D', dur: 0.3947 },
    { time: 34.7368, string: 4, fret: 5, note: 'G', chord: 'Em', dur: 2.3684 },
    { time: 37.1053, string: 3, fret: 4, note: 'B', chord: 'Em', dur: 0.3947 },
    { time: 37.5, string: 2, fret: 3, note: 'D', chord: 'Em', dur: 0.3947 },
    { time: 37.8947, string: 2, fret: 5, note: 'E', chord: 'C', dur: 2.3684 },
    { time: 40.2632, string: 2, fret: 5, note: 'E', chord: 'C', dur: 0.3947 },
    { time: 40.6579, string: 2, fret: 5, note: 'E', chord: 'C', dur: 0.3947 },
    { time: 41.0526, string: 2, fret: 3, note: 'D', chord: 'G', dur: 0.3947 },
    { time: 41.4474, string: 3, fret: 4, note: 'B', chord: 'G', dur: 1.9737 },
    { time: 43.4211, string: 3, fret: 4, note: 'B', chord: 'G', dur: 0.3947 },
    { time: 43.8158, string: 3, fret: 4, note: 'B', chord: 'G', dur: 0.3947 },
    { time: 44.2105, string: 3, fret: 2, note: 'A', chord: 'D', dur: 0.3947 },
    { time: 44.6053, string: 3, fret: 4, note: 'B', chord: 'D', dur: 1.9737 },
    { time: 46.5789, string: 3, fret: 4, note: 'B', chord: 'D', dur: 0.3947 },
    { time: 46.9737, string: 3, fret: 2, note: 'A', chord: 'D', dur: 0.3947 },
    { time: 47.3684, string: 4, fret: 5, note: 'G', chord: 'C', dur: 2.3684 },
    { time: 49.7368, string: 4, fret: 5, note: 'G', chord: 'C', dur: 0.3947 },
    { time: 50.1316, string: 3, fret: 2, note: 'A', chord: 'C', dur: 0.3947 },
    { time: 50.5263, string: 4, fret: 5, note: 'G', chord: 'G', dur: 2.3684 },
    { time: 52.8947, string: 4, fret: 5, note: 'G', chord: 'G', dur: 0.3947 },
    { time: 53.2895, string: 3, fret: 2, note: 'A', chord: 'G', dur: 0.3947 },
    { time: 53.6842, string: 4, fret: 5, note: 'G', chord: 'G', dur: 3.1579 }
];

// ============================================================
// POSITION 2 — G Major Pentatonic, Gone Country
// 86 BPM from MusicXML
// ============================================================
const P2_FRET_TO_FINGER = {
    '6-5': 2, '6-7': 4,
    '5-5': 2, '5-7': 4,
    '4-5': 2, '4-7': 4,
    '3-4': 1, '3-7': 4,
    '2-5': 1, '2-8': 4,
    '1-5': 1, '1-7': 3
};

const P2_SCALE_NOTES = [
    { string: 6, fret: 5, note: 'A', degree: '2nd', finger: 2 },
    { string: 6, fret: 7, note: 'B', degree: '3rd', finger: 4 },
    { string: 5, fret: 5, note: 'D', degree: '5th', finger: 2 },
    { string: 5, fret: 7, note: 'E', degree: '6th', finger: 4 },
    { string: 4, fret: 5, note: 'G', degree: 'Root', finger: 2 },
    { string: 4, fret: 7, note: 'A', degree: '2nd', finger: 4 },
    { string: 3, fret: 4, note: 'B', degree: '3rd', finger: 1 },
    { string: 3, fret: 7, note: 'D', degree: '5th', finger: 4 },
    { string: 2, fret: 5, note: 'E', degree: '6th', finger: 1 },
    { string: 2, fret: 8, note: 'G', degree: 'Root', finger: 4 },
    { string: 1, fret: 5, note: 'A', degree: '2nd', finger: 1 },
    { string: 1, fret: 7, note: 'B', degree: '3rd', finger: 3 }
];

const P2_SCALE_SEQUENCE = [
    { string: 6, fret: 5, note: 'A', degree: '2nd', finger: 2 },
    { string: 6, fret: 7, note: 'B', degree: '3rd', finger: 4 },
    { string: 5, fret: 5, note: 'D', degree: '5th', finger: 2 },
    { string: 5, fret: 7, note: 'E', degree: '6th', finger: 4 },
    { string: 4, fret: 5, note: 'G', degree: 'Root', finger: 2 },
    { string: 4, fret: 7, note: 'A', degree: '2nd', finger: 4 },
    { string: 3, fret: 4, note: 'B', degree: '3rd', finger: 1 },
    { string: 3, fret: 7, note: 'D', degree: '5th', finger: 4 },
    { string: 2, fret: 5, note: 'E', degree: '6th', finger: 1 },
    { string: 2, fret: 8, note: 'G', degree: 'Root', finger: 4 },
    { string: 1, fret: 5, note: 'A', degree: '2nd', finger: 1 },
    { string: 1, fret: 7, note: 'B', degree: '3rd', finger: 3 },
    { string: 1, fret: 5, note: 'A', degree: '2nd', finger: 1 },
    { string: 2, fret: 8, note: 'G', degree: 'Root', finger: 4 },
    { string: 2, fret: 5, note: 'E', degree: '6th', finger: 1 },
    { string: 3, fret: 7, note: 'D', degree: '5th', finger: 4 },
    { string: 3, fret: 4, note: 'B', degree: '3rd', finger: 1 },
    { string: 4, fret: 7, note: 'A', degree: '2nd', finger: 4 },
    { string: 4, fret: 5, note: 'G', degree: 'Root', finger: 2 },
    { string: 5, fret: 7, note: 'E', degree: '6th', finger: 4 },
    { string: 5, fret: 5, note: 'D', degree: '5th', finger: 2 },
    { string: 6, fret: 7, note: 'B', degree: '3rd', finger: 4 },
    { string: 6, fret: 5, note: 'A', degree: '2nd', finger: 2 },
    { string: 6, fret: 5, note: 'A', degree: '2nd', finger: 2 }
];

const P2_MELODY_NOTES = [
    // m1 pickup
    { string: 4, fret: 7, note: 'A', chord: 'G' },
    { string: 3, fret: 4, note: 'B', chord: 'G' },
    // m2 — G
    { string: 3, fret: 7, note: 'D', chord: 'G' },
    { string: 3, fret: 4, note: 'B', chord: 'G' },
    { string: 4, fret: 7, note: 'A', chord: 'G' },
    { string: 4, fret: 5, note: 'G', chord: 'G' },
    // m3 — Cadd9 / D
    { string: 5, fret: 7, note: 'E', chord: 'Cadd9' },
    { string: 4, fret: 5, note: 'G', chord: 'Cadd9' },
    { string: 4, fret: 7, note: 'A', chord: 'D' },
    { string: 3, fret: 4, note: 'B', chord: 'D' },
    // m4 — G
    { string: 3, fret: 7, note: 'D', chord: 'G' },
    { string: 3, fret: 4, note: 'B', chord: 'G' },
    { string: 4, fret: 7, note: 'A', chord: 'G' },
    { string: 4, fret: 5, note: 'G', chord: 'G' },
    // m5 — Cadd9 / D
    { string: 5, fret: 7, note: 'E', chord: 'Cadd9' },
    { string: 4, fret: 5, note: 'G', chord: 'Cadd9' },
    { string: 4, fret: 7, note: 'A', chord: 'D' },
    { string: 3, fret: 4, note: 'B', chord: 'D' },
    // m6 — G
    { string: 3, fret: 7, note: 'D', chord: 'G' },
    { string: 3, fret: 4, note: 'B', chord: 'G' },
    { string: 4, fret: 7, note: 'A', chord: 'G' },
    { string: 4, fret: 5, note: 'G', chord: 'G' },
    // m7 — Cadd9 / D
    { string: 5, fret: 7, note: 'E', chord: 'Cadd9' },
    { string: 4, fret: 5, note: 'G', chord: 'Cadd9' },
    { string: 4, fret: 7, note: 'A', chord: 'D' },
    { string: 3, fret: 4, note: 'B', chord: 'D' },
    // m8 — Em7
    { string: 2, fret: 5, note: 'E', chord: 'Em7' },
    { string: 3, fret: 4, note: 'B', chord: 'Em7' },
    { string: 4, fret: 7, note: 'A', chord: 'Em7' },
    { string: 4, fret: 5, note: 'G', chord: 'Em7' },
    // m9 — Em7
    { string: 3, fret: 7, note: 'D', chord: 'Em7' },
    { string: 4, fret: 7, note: 'A', chord: 'Em7' },
    // m10 — G
    { string: 4, fret: 5, note: 'G', chord: 'G' }
];

const P2_DEMO_MELODY = [
    // m1 pickup (2 beats rest then 2 quarters)
    { time: 1.3953, string: 4, fret: 7, note: 'A', chord: 'G', dur: 0.6977 },
    { time: 2.093, string: 3, fret: 4, note: 'B', chord: 'G', dur: 0.6977 },
    // m2 — G
    { time: 2.7907, string: 3, fret: 7, note: 'D', chord: 'G', dur: 0.6977 },
    { time: 3.4884, string: 3, fret: 4, note: 'B', chord: 'G', dur: 0.3488 },
    { time: 3.8372, string: 4, fret: 7, note: 'A', chord: 'G', dur: 0.3488 },
    { time: 4.186, string: 4, fret: 5, note: 'G', chord: 'G', dur: 1.3953 },
    // m3 — Cadd9 / D
    { time: 5.5814, string: 5, fret: 7, note: 'E', chord: 'Cadd9', dur: 0.6977 },
    { time: 6.2791, string: 4, fret: 5, note: 'G', chord: 'Cadd9', dur: 0.6977 },
    { time: 6.9767, string: 4, fret: 7, note: 'A', chord: 'D', dur: 0.6977 },
    { time: 7.6744, string: 3, fret: 4, note: 'B', chord: 'D', dur: 0.6977 },
    // m4 — G
    { time: 8.3721, string: 3, fret: 7, note: 'D', chord: 'G', dur: 0.6977 },
    { time: 9.0698, string: 3, fret: 4, note: 'B', chord: 'G', dur: 0.3488 },
    { time: 9.4186, string: 4, fret: 7, note: 'A', chord: 'G', dur: 0.3488 },
    { time: 9.7674, string: 4, fret: 5, note: 'G', chord: 'G', dur: 1.3953 },
    // m5 — Cadd9 / D
    { time: 11.1628, string: 5, fret: 7, note: 'E', chord: 'Cadd9', dur: 0.6977 },
    { time: 11.8605, string: 4, fret: 5, note: 'G', chord: 'Cadd9', dur: 0.6977 },
    { time: 12.5581, string: 4, fret: 7, note: 'A', chord: 'D', dur: 0.6977 },
    { time: 13.2558, string: 3, fret: 4, note: 'B', chord: 'D', dur: 0.6977 },
    // m6 — G
    { time: 13.9535, string: 3, fret: 7, note: 'D', chord: 'G', dur: 0.6977 },
    { time: 14.6512, string: 3, fret: 4, note: 'B', chord: 'G', dur: 0.3488 },
    { time: 15.0, string: 4, fret: 7, note: 'A', chord: 'G', dur: 0.3488 },
    { time: 15.3488, string: 4, fret: 5, note: 'G', chord: 'G', dur: 1.3953 },
    // m7 — Cadd9 / D
    { time: 16.7442, string: 5, fret: 7, note: 'E', chord: 'Cadd9', dur: 0.6977 },
    { time: 17.4419, string: 4, fret: 5, note: 'G', chord: 'Cadd9', dur: 0.6977 },
    { time: 18.1395, string: 4, fret: 7, note: 'A', chord: 'D', dur: 0.6977 },
    { time: 18.8372, string: 3, fret: 4, note: 'B', chord: 'D', dur: 0.6977 },
    // m8 — Em7
    { time: 19.5349, string: 2, fret: 5, note: 'E', chord: 'Em7', dur: 0.6977 },
    { time: 20.2326, string: 3, fret: 4, note: 'B', chord: 'Em7', dur: 0.3488 },
    { time: 20.5814, string: 4, fret: 7, note: 'A', chord: 'Em7', dur: 0.3488 },
    { time: 20.9302, string: 4, fret: 5, note: 'G', chord: 'Em7', dur: 1.3953 },
    // m9 — Em7 (rest 1 beat, then D quarter, A half)
    { time: 23.0233, string: 3, fret: 7, note: 'D', chord: 'Em7', dur: 0.6977 },
    { time: 23.7209, string: 4, fret: 7, note: 'A', chord: 'Em7', dur: 1.3953 },
    // m10 — G (whole note)
    { time: 25.1163, string: 4, fret: 5, note: 'G', chord: 'G', dur: 2.7907 }
];

// ============================================================
// POSITION 3 — G Major Pentatonic, Tennessee Whiskey
// 56 BPM (dotted quarter), 6/8 time
// ============================================================
const P3_FRET_TO_FINGER = {
    '1-7': 1, '1-10': 4,
    '2-8': 2, '2-10': 4,
    '3-7': 1, '3-9': 3,
    '4-7': 1, '4-9': 3,
    '5-7': 1, '5-10': 4,
    '6-7': 1, '6-10': 4
};

const P3_SCALE_NOTES = [
    { string: 6, fret: 7, note: 'B', degree: '3rd', finger: 1 },
    { string: 6, fret: 10, note: 'D', degree: '5th', finger: 4 },
    { string: 5, fret: 7, note: 'E', degree: '6th', finger: 1 },
    { string: 5, fret: 10, note: 'G', degree: 'Root', finger: 4 },
    { string: 4, fret: 7, note: 'A', degree: '2nd', finger: 1 },
    { string: 4, fret: 9, note: 'B', degree: '3rd', finger: 3 },
    { string: 3, fret: 7, note: 'D', degree: '5th', finger: 1 },
    { string: 3, fret: 9, note: 'E', degree: '6th', finger: 3 },
    { string: 2, fret: 8, note: 'G', degree: 'Root', finger: 2 },
    { string: 2, fret: 10, note: 'A', degree: '2nd', finger: 4 },
    { string: 1, fret: 7, note: 'B', degree: '3rd', finger: 1 },
    { string: 1, fret: 10, note: 'D', degree: '5th', finger: 4 }
];

const P3_SCALE_SEQUENCE = [
    { string: 6, fret: 7, note: 'B', degree: '3rd', finger: 1 },
    { string: 6, fret: 10, note: 'D', degree: '5th', finger: 4 },
    { string: 5, fret: 7, note: 'E', degree: '6th', finger: 1 },
    { string: 5, fret: 10, note: 'G', degree: 'Root', finger: 4 },
    { string: 4, fret: 7, note: 'A', degree: '2nd', finger: 1 },
    { string: 4, fret: 9, note: 'B', degree: '3rd', finger: 3 },
    { string: 3, fret: 7, note: 'D', degree: '5th', finger: 1 },
    { string: 3, fret: 9, note: 'E', degree: '6th', finger: 3 },
    { string: 2, fret: 8, note: 'G', degree: 'Root', finger: 2 },
    { string: 2, fret: 10, note: 'A', degree: '2nd', finger: 4 },
    { string: 1, fret: 7, note: 'B', degree: '3rd', finger: 1 },
    { string: 1, fret: 10, note: 'D', degree: '5th', finger: 4 },
    { string: 1, fret: 7, note: 'B', degree: '3rd', finger: 1 },
    { string: 2, fret: 10, note: 'A', degree: '2nd', finger: 4 },
    { string: 2, fret: 8, note: 'G', degree: 'Root', finger: 2 },
    { string: 3, fret: 9, note: 'E', degree: '6th', finger: 3 },
    { string: 3, fret: 7, note: 'D', degree: '5th', finger: 1 },
    { string: 4, fret: 9, note: 'B', degree: '3rd', finger: 3 },
    { string: 4, fret: 7, note: 'A', degree: '2nd', finger: 1 },
    { string: 5, fret: 10, note: 'G', degree: 'Root', finger: 4 },
    { string: 5, fret: 7, note: 'E', degree: '6th', finger: 1 },
    { string: 6, fret: 10, note: 'D', degree: '5th', finger: 4 },
    { string: 6, fret: 7, note: 'B', degree: '3rd', finger: 1 }
];

const P3_MELODY_NOTES = [
    // m1 pickup — no chord
    { string: 6, fret: 10, note: 'D', chord: '' },
    { string: 5, fret: 7, note: 'E', chord: '' },
    { string: 5, fret: 10, note: 'G', chord: '' },
    // m2 — G
    { string: 4, fret: 9, note: 'B', chord: 'G' },
    // m3 — G
    { string: 4, fret: 9, note: 'B', chord: 'G' },
    { string: 4, fret: 7, note: 'A', chord: 'G' },
    { string: 5, fret: 10, note: 'G', chord: 'G' },
    // m4 — Am
    { string: 4, fret: 9, note: 'B', chord: 'Am' },
    { string: 4, fret: 7, note: 'A', chord: 'Am' },
    // m5 — Am
    { string: 4, fret: 9, note: 'B', chord: 'Am' },
    { string: 3, fret: 7, note: 'D', chord: 'Am' },
    // m6 — Am
    { string: 3, fret: 9, note: 'E', chord: 'Am' },
    { string: 3, fret: 7, note: 'D', chord: 'Am' },
    // m7 — Am
    { string: 4, fret: 9, note: 'B', chord: 'Am' },
    { string: 3, fret: 9, note: 'E', chord: 'Am' },
    { string: 3, fret: 7, note: 'D', chord: 'Am' },
    { string: 4, fret: 9, note: 'B', chord: 'Am' },
    // m8 — G
    { string: 4, fret: 9, note: 'B', chord: 'G' },
    // m9 — G
    { string: 3, fret: 7, note: 'D', chord: 'G' },
    { string: 3, fret: 9, note: 'E', chord: 'G' },
    // m10 — G
    { string: 3, fret: 9, note: 'E', chord: 'G' },
    { string: 3, fret: 7, note: 'D', chord: 'G' },
    // m11 — G
    { string: 4, fret: 9, note: 'B', chord: 'G' },
    { string: 3, fret: 9, note: 'E', chord: 'G' },
    { string: 3, fret: 7, note: 'D', chord: 'G' },
    // m12 — Am
    { string: 4, fret: 9, note: 'B', chord: 'Am' },
    { string: 4, fret: 7, note: 'A', chord: 'Am' },
    // m13 — Am
    { string: 5, fret: 10, note: 'G', chord: 'Am' },
    { string: 4, fret: 7, note: 'A', chord: 'Am' },
    { string: 4, fret: 9, note: 'B', chord: 'Am' },
    // m14 — Am
    { string: 4, fret: 7, note: 'A', chord: 'Am' },
    { string: 5, fret: 10, note: 'G', chord: 'Am' },
    { string: 4, fret: 7, note: 'A', chord: 'Am' },
    { string: 4, fret: 9, note: 'B', chord: 'Am' },
    // m15 — Am
    { string: 4, fret: 7, note: 'A', chord: 'Am' },
    { string: 5, fret: 10, note: 'G', chord: 'Am' },
    { string: 4, fret: 9, note: 'B', chord: 'Am' },
    { string: 4, fret: 7, note: 'A', chord: 'Am' },
    { string: 5, fret: 10, note: 'G', chord: 'Am' },
    // m16-17 — G
    { string: 5, fret: 10, note: 'G', chord: 'G' }
];

const P3_DEMO_MELODY = [
    // m1 pickup — no chord
    { time: 1.6071, string: 6, fret: 10, note: 'D', chord: '', dur: 0.5357 },
    { time: 2.1429, string: 5, fret: 7, note: 'E', chord: '', dur: 0.5357 },
    { time: 2.6786, string: 5, fret: 10, note: 'G', chord: '', dur: 0.5357 },
    // m2 — G
    { time: 3.2143, string: 4, fret: 9, note: 'B', chord: 'G', dur: 3.2143 },
    // m3 — G
    { time: 8.0357, string: 4, fret: 9, note: 'B', chord: 'G', dur: 0.5357 },
    { time: 8.5714, string: 4, fret: 7, note: 'A', chord: 'G', dur: 0.5357 },
    { time: 9.1071, string: 5, fret: 10, note: 'G', chord: 'G', dur: 0.5357 },
    // m4 — Am
    { time: 9.6429, string: 4, fret: 9, note: 'B', chord: 'Am', dur: 0.5357 },
    { time: 10.1786, string: 4, fret: 7, note: 'A', chord: 'Am', dur: 2.6786 },
    // m5 — Am
    { time: 15.0, string: 4, fret: 9, note: 'B', chord: 'Am', dur: 0.5357 },
    { time: 15.5357, string: 3, fret: 7, note: 'D', chord: 'Am', dur: 0.5357 },
    // m6 — Am
    { time: 16.0714, string: 3, fret: 9, note: 'E', chord: 'Am', dur: 1.6071 },
    { time: 17.6786, string: 3, fret: 7, note: 'D', chord: 'Am', dur: 1.6071 },
    // m7 — Am
    { time: 19.2857, string: 4, fret: 9, note: 'B', chord: 'Am', dur: 1.6071 },
    { time: 20.8929, string: 3, fret: 9, note: 'E', chord: 'Am', dur: 0.5357 },
    { time: 21.4286, string: 3, fret: 7, note: 'D', chord: 'Am', dur: 0.5357 },
    { time: 21.9643, string: 4, fret: 9, note: 'B', chord: 'Am', dur: 0.5357 },
    // m8 — G
    { time: 22.5, string: 4, fret: 9, note: 'B', chord: 'G', dur: 3.2143 },
    // m9 — G
    { time: 27.8571, string: 3, fret: 7, note: 'D', chord: 'G', dur: 0.5357 },
    { time: 28.3929, string: 3, fret: 9, note: 'E', chord: 'G', dur: 0.5357 },
    // m10 — G
    { time: 28.9286, string: 3, fret: 9, note: 'E', chord: 'G', dur: 1.6071 },
    { time: 30.5357, string: 3, fret: 7, note: 'D', chord: 'G', dur: 1.6071 },
    // m11 — G
    { time: 32.1429, string: 4, fret: 9, note: 'B', chord: 'G', dur: 1.6071 },
    { time: 33.75, string: 3, fret: 9, note: 'E', chord: 'G', dur: 1.0714 },
    { time: 34.8214, string: 3, fret: 7, note: 'D', chord: 'G', dur: 0.5357 },
    // m12 — Am
    { time: 35.3571, string: 4, fret: 9, note: 'B', chord: 'Am', dur: 0.5357 },
    { time: 35.8929, string: 4, fret: 7, note: 'A', chord: 'Am', dur: 2.6785 },
    // m13 — Am
    { time: 40.1786, string: 5, fret: 10, note: 'G', chord: 'Am', dur: 0.5357 },
    { time: 40.7143, string: 4, fret: 7, note: 'A', chord: 'Am', dur: 0.5357 },
    { time: 41.25, string: 4, fret: 9, note: 'B', chord: 'Am', dur: 0.5357 },
    // m14 — Am
    { time: 41.7857, string: 4, fret: 7, note: 'A', chord: 'Am', dur: 0.5357 },
    { time: 42.3214, string: 5, fret: 10, note: 'G', chord: 'Am', dur: 1.0714 },
    { time: 43.9286, string: 4, fret: 7, note: 'A', chord: 'Am', dur: 0.5357 },
    { time: 44.4643, string: 4, fret: 9, note: 'B', chord: 'Am', dur: 0.5357 },
    // m15 — Am
    { time: 45.0, string: 4, fret: 7, note: 'A', chord: 'Am', dur: 0.5357 },
    { time: 45.5357, string: 5, fret: 10, note: 'G', chord: 'Am', dur: 1.0714 },
    { time: 46.6071, string: 4, fret: 9, note: 'B', chord: 'Am', dur: 0.5357 },
    { time: 47.1429, string: 4, fret: 7, note: 'A', chord: 'Am', dur: 0.5357 },
    { time: 47.6786, string: 5, fret: 10, note: 'G', chord: 'Am', dur: 0.5357 },
    // m16-17 — G (tied dotted halves)
    { time: 48.2143, string: 5, fret: 10, note: 'G', chord: 'G', dur: 6.4286 }
];

// ============================================================
// POSITION 4 — G Major Pentatonic, Have You Ever Seen the Rain
// 110 BPM, 4/4 time
// ============================================================
const P4_FRET_TO_FINGER = {
    '1-10': 2, '1-12': 4,
    '2-10': 2, '2-12': 4,
    '3-9': 1, '3-12': 4,
    '4-9': 1, '4-12': 4,
    '5-10': 2, '5-12': 4,
    '6-10': 2, '6-12': 4
};

const P4_SCALE_NOTES = [
    { string: 6, fret: 10, note: 'D', degree: '5th', finger: 2 },
    { string: 6, fret: 12, note: 'E', degree: '6th', finger: 4 },
    { string: 5, fret: 10, note: 'G', degree: 'Root', finger: 2 },
    { string: 5, fret: 12, note: 'A', degree: '2nd', finger: 4 },
    { string: 4, fret: 9, note: 'B', degree: '3rd', finger: 1 },
    { string: 4, fret: 12, note: 'D', degree: '5th', finger: 4 },
    { string: 3, fret: 9, note: 'E', degree: '6th', finger: 1 },
    { string: 3, fret: 12, note: 'G', degree: 'Root', finger: 4 },
    { string: 2, fret: 10, note: 'A', degree: '2nd', finger: 2 },
    { string: 2, fret: 12, note: 'B', degree: '3rd', finger: 4 },
    { string: 1, fret: 10, note: 'D', degree: '5th', finger: 2 },
    { string: 1, fret: 12, note: 'E', degree: '6th', finger: 4 }
];

const P4_SCALE_SEQUENCE = [
    { string: 6, fret: 10, note: 'D', degree: '5th', finger: 2 },
    { string: 6, fret: 12, note: 'E', degree: '6th', finger: 4 },
    { string: 5, fret: 10, note: 'G', degree: 'Root', finger: 2 },
    { string: 5, fret: 12, note: 'A', degree: '2nd', finger: 4 },
    { string: 4, fret: 9, note: 'B', degree: '3rd', finger: 1 },
    { string: 4, fret: 12, note: 'D', degree: '5th', finger: 4 },
    { string: 3, fret: 9, note: 'E', degree: '6th', finger: 1 },
    { string: 3, fret: 12, note: 'G', degree: 'Root', finger: 4 },
    { string: 2, fret: 10, note: 'A', degree: '2nd', finger: 2 },
    { string: 2, fret: 12, note: 'B', degree: '3rd', finger: 4 },
    { string: 1, fret: 10, note: 'D', degree: '5th', finger: 2 },
    { string: 1, fret: 12, note: 'E', degree: '6th', finger: 4 },
    { string: 1, fret: 10, note: 'D', degree: '5th', finger: 2 },
    { string: 2, fret: 12, note: 'B', degree: '3rd', finger: 4 },
    { string: 2, fret: 10, note: 'A', degree: '2nd', finger: 2 },
    { string: 3, fret: 12, note: 'G', degree: 'Root', finger: 4 },
    { string: 3, fret: 9, note: 'E', degree: '6th', finger: 1 },
    { string: 4, fret: 12, note: 'D', degree: '5th', finger: 4 },
    { string: 4, fret: 9, note: 'B', degree: '3rd', finger: 1 },
    { string: 5, fret: 12, note: 'A', degree: '2nd', finger: 4 },
    { string: 5, fret: 10, note: 'G', degree: 'Root', finger: 2 },
    { string: 6, fret: 12, note: 'E', degree: '6th', finger: 4 },
    { string: 6, fret: 10, note: 'D', degree: '5th', finger: 2 }
];

const P4_MELODY_NOTES = [
    // m2 — C
    { string: 1, fret: 12, note: 'E', chord: 'C' },
    // m3 — D
    { string: 1, fret: 10, note: 'D', chord: 'D' },
    { string: 2, fret: 12, note: 'B', chord: 'D' },
    // m4 — G
    { string: 1, fret: 10, note: 'D', chord: 'G' },
    { string: 2, fret: 12, note: 'B', chord: 'G' },
    // m5 — Em7
    { string: 3, fret: 12, note: 'G', chord: 'Em7' },
    // m6 — C
    { string: 1, fret: 12, note: 'E', chord: 'C' },
    // m7 — D
    { string: 1, fret: 10, note: 'D', chord: 'D' },
    { string: 2, fret: 12, note: 'B', chord: 'D' },
    // m8 — G
    { string: 1, fret: 10, note: 'D', chord: 'G' },
    { string: 2, fret: 12, note: 'B', chord: 'G' },
    // m9 — Em7
    { string: 3, fret: 12, note: 'G', chord: 'Em7' },
    // m10 — C
    { string: 3, fret: 9, note: 'E', chord: 'C' },
    // m11 — D
    { string: 3, fret: 12, note: 'G', chord: 'D' },
    { string: 2, fret: 12, note: 'B', chord: 'D' },
    // m12 — G
    { string: 3, fret: 12, note: 'G', chord: 'G' }
];

const P4_DEMO_MELODY = [
    // m2 — C chord starts on beat 1 (chord marker, string:0 = no note drawn)
    { time: 2.1818, string: 0, fret: 0, note: '', chord: 'C', dur: 1.0909 },
    // m2 — C (E half enters beat 3)
    { time: 3.2727, string: 1, fret: 12, note: 'E', chord: 'C', dur: 1.0909 },
    // m3 — D (D dotted half, B quarter)
    { time: 4.3636, string: 1, fret: 10, note: 'D', chord: 'D', dur: 1.6364 },
    { time: 6.0, string: 2, fret: 12, note: 'B', chord: 'D', dur: 0.5455 },
    // m4 — G (D half, B half)
    { time: 6.5455, string: 1, fret: 10, note: 'D', chord: 'G', dur: 1.0909 },
    { time: 7.6364, string: 2, fret: 12, note: 'B', chord: 'G', dur: 1.0909 },
    // m5 — Em7 (G whole)
    { time: 8.7273, string: 3, fret: 12, note: 'G', chord: 'Em7', dur: 2.1818 },
    // m6 — C chord starts on beat 1
    { time: 10.9091, string: 0, fret: 0, note: '', chord: 'C', dur: 1.0909 },
    // m6 — C (E half enters beat 3)
    { time: 12.0, string: 1, fret: 12, note: 'E', chord: 'C', dur: 1.0909 },
    // m7 — D (D dotted half, B quarter)
    { time: 13.0909, string: 1, fret: 10, note: 'D', chord: 'D', dur: 1.6364 },
    { time: 14.7273, string: 2, fret: 12, note: 'B', chord: 'D', dur: 0.5455 },
    // m8 — G (D half, B half)
    { time: 15.2727, string: 1, fret: 10, note: 'D', chord: 'G', dur: 1.0909 },
    { time: 16.3636, string: 2, fret: 12, note: 'B', chord: 'G', dur: 1.0909 },
    // m9 — Em7 (G whole)
    { time: 17.4545, string: 3, fret: 12, note: 'G', chord: 'Em7', dur: 2.1818 },
    // m10 — C chord starts on beat 1
    { time: 19.6364, string: 0, fret: 0, note: '', chord: 'C', dur: 1.0909 },
    // m10 — C (E half enters beat 3)
    { time: 20.7273, string: 3, fret: 9, note: 'E', chord: 'C', dur: 1.0909 },
    // m11 — D (G half, B half)
    { time: 21.8182, string: 3, fret: 12, note: 'G', chord: 'D', dur: 1.0909 },
    { time: 22.9091, string: 2, fret: 12, note: 'B', chord: 'D', dur: 1.0909 },
    // m12 — G (G whole)
    { time: 24.0, string: 3, fret: 12, note: 'G', chord: 'G', dur: 2.1818 }
];

// ============================================================
// POSITION 5 — G Major Pentatonic, Friends In Low Places
// 86 BPM, 4/4 time
// ============================================================
const P5_FRET_TO_FINGER = {
    '1-12': 1, '1-15': 4,
    '2-12': 1, '2-15': 4,
    '3-12': 1, '3-14': 3,
    '4-12': 1, '4-14': 3,
    '5-12': 1, '5-14': 3,
    '6-12': 1, '6-15': 4
};

const P5_SCALE_NOTES = [
    { string: 6, fret: 12, note: 'E', degree: '6th', finger: 1 },
    { string: 6, fret: 15, note: 'G', degree: 'Root', finger: 4 },
    { string: 5, fret: 12, note: 'A', degree: '2nd', finger: 1 },
    { string: 5, fret: 14, note: 'B', degree: '3rd', finger: 3 },
    { string: 4, fret: 12, note: 'D', degree: '5th', finger: 1 },
    { string: 4, fret: 14, note: 'E', degree: '6th', finger: 3 },
    { string: 3, fret: 12, note: 'G', degree: 'Root', finger: 1 },
    { string: 3, fret: 14, note: 'A', degree: '2nd', finger: 3 },
    { string: 2, fret: 12, note: 'B', degree: '3rd', finger: 1 },
    { string: 2, fret: 15, note: 'D', degree: '5th', finger: 4 },
    { string: 1, fret: 12, note: 'E', degree: '6th', finger: 1 },
    { string: 1, fret: 15, note: 'G', degree: 'Root', finger: 4 }
];

const P5_SCALE_SEQUENCE = [
    { string: 6, fret: 12, note: 'E', degree: '6th', finger: 1 },
    { string: 6, fret: 15, note: 'G', degree: 'Root', finger: 4 },
    { string: 5, fret: 12, note: 'A', degree: '2nd', finger: 1 },
    { string: 5, fret: 14, note: 'B', degree: '3rd', finger: 3 },
    { string: 4, fret: 12, note: 'D', degree: '5th', finger: 1 },
    { string: 4, fret: 14, note: 'E', degree: '6th', finger: 3 },
    { string: 3, fret: 12, note: 'G', degree: 'Root', finger: 1 },
    { string: 3, fret: 14, note: 'A', degree: '2nd', finger: 3 },
    { string: 2, fret: 12, note: 'B', degree: '3rd', finger: 1 },
    { string: 2, fret: 15, note: 'D', degree: '5th', finger: 4 },
    { string: 1, fret: 12, note: 'E', degree: '6th', finger: 1 },
    { string: 1, fret: 15, note: 'G', degree: 'Root', finger: 4 },
    { string: 1, fret: 12, note: 'E', degree: '6th', finger: 1 },
    { string: 2, fret: 15, note: 'D', degree: '5th', finger: 4 },
    { string: 2, fret: 12, note: 'B', degree: '3rd', finger: 1 },
    { string: 3, fret: 14, note: 'A', degree: '2nd', finger: 3 },
    { string: 3, fret: 12, note: 'G', degree: 'Root', finger: 1 },
    { string: 4, fret: 14, note: 'E', degree: '6th', finger: 3 },
    { string: 4, fret: 12, note: 'D', degree: '5th', finger: 1 },
    { string: 5, fret: 14, note: 'B', degree: '3rd', finger: 3 },
    { string: 5, fret: 12, note: 'A', degree: '2nd', finger: 1 },
    { string: 6, fret: 15, note: 'G', degree: 'Root', finger: 4 },
    { string: 6, fret: 12, note: 'E', degree: '6th', finger: 1 }
];

const P5_MELODY_NOTES = [
    // m2 — G
    { string: 2, fret: 12, note: 'B', chord: 'G' },
    { string: 3, fret: 14, note: 'A', chord: 'G' },
    { string: 3, fret: 12, note: 'G', chord: 'G' },
    { string: 4, fret: 14, note: 'E', chord: 'G' },
    // m3 — G
    { string: 4, fret: 12, note: 'D', chord: 'G' },
    { string: 4, fret: 14, note: 'E', chord: 'G' },
    { string: 4, fret: 12, note: 'D', chord: 'G' },
    { string: 4, fret: 14, note: 'E', chord: 'G' },
    { string: 3, fret: 12, note: 'G', chord: 'G' },
    // m4 — G
    { string: 2, fret: 12, note: 'B', chord: 'G' },
    { string: 3, fret: 14, note: 'A', chord: 'G' },
    { string: 3, fret: 12, note: 'G', chord: 'G' },
    { string: 4, fret: 14, note: 'E', chord: 'G' },
    // m5 — G
    { string: 4, fret: 12, note: 'D', chord: 'G' },
    { string: 4, fret: 14, note: 'E', chord: 'G' },
    { string: 4, fret: 12, note: 'D', chord: 'G' },
    { string: 5, fret: 14, note: 'B', chord: 'G' },
    // m6 — Am
    { string: 5, fret: 12, note: 'A', chord: 'Am' },
    { string: 4, fret: 14, note: 'E', chord: 'Am' },
    // m8 — D
    { string: 4, fret: 12, note: 'D', chord: 'D' },
    { string: 4, fret: 14, note: 'E', chord: 'D' },
    // m9 — D (end)
    { string: 4, fret: 12, note: 'D', chord: 'D' },
    { string: 4, fret: 14, note: 'E', chord: 'D' },
    // m10 — G
    { string: 3, fret: 12, note: 'G', chord: 'G' }
];

const P5_DEMO_MELODY = [
    // m2 — G
    { time: 2.7907, string: 2, fret: 12, note: 'B', chord: 'G', dur: 0.6977 },
    { time: 3.4884, string: 3, fret: 14, note: 'A', chord: 'G', dur: 0.6977 },
    { time: 4.186, string: 3, fret: 12, note: 'G', chord: 'G', dur: 0.6977 },
    { time: 4.8837, string: 4, fret: 14, note: 'E', chord: 'G', dur: 0.6977 },
    // m3 — G
    { time: 5.5814, string: 4, fret: 12, note: 'D', chord: 'G', dur: 1.3953 },
    { time: 6.9767, string: 4, fret: 14, note: 'E', chord: 'G', dur: 0.3488 },
    { time: 7.3256, string: 4, fret: 12, note: 'D', chord: 'G', dur: 0.3488 },
    { time: 7.6744, string: 4, fret: 14, note: 'E', chord: 'G', dur: 0.3488 },
    { time: 8.0233, string: 3, fret: 12, note: 'G', chord: 'G', dur: 0.3488 },
    // m4 — G
    { time: 8.3721, string: 2, fret: 12, note: 'B', chord: 'G', dur: 0.6977 },
    { time: 9.0698, string: 3, fret: 14, note: 'A', chord: 'G', dur: 0.6977 },
    { time: 9.7674, string: 3, fret: 12, note: 'G', chord: 'G', dur: 0.6977 },
    { time: 10.4651, string: 4, fret: 14, note: 'E', chord: 'G', dur: 0.6977 },
    // m5 — G
    { time: 11.1628, string: 4, fret: 12, note: 'D', chord: 'G', dur: 1.3953 },
    { time: 12.5581, string: 4, fret: 14, note: 'E', chord: 'G', dur: 0.3488 },
    { time: 12.907, string: 4, fret: 12, note: 'D', chord: 'G', dur: 0.3488 },
    { time: 13.2558, string: 5, fret: 14, note: 'B', chord: 'G', dur: 0.6977 },
    // m6 — Am
    { time: 13.9535, string: 5, fret: 12, note: 'A', chord: 'Am', dur: 1.3953 },
    { time: 15.3488, string: 4, fret: 14, note: 'E', chord: 'Am', dur: 4.186 },
    // m8 — D
    { time: 19.5349, string: 4, fret: 12, note: 'D', chord: 'D', dur: 1.3953 },
    { time: 20.9302, string: 4, fret: 14, note: 'E', chord: 'D', dur: 3.4884 },
    // m9 end — D
    { time: 24.4186, string: 4, fret: 12, note: 'D', chord: 'D', dur: 0.3488 },
    { time: 24.7674, string: 4, fret: 14, note: 'E', chord: 'D', dur: 0.3488 },
    // m10 — G
    { time: 25.1163, string: 3, fret: 12, note: 'G', chord: 'G', dur: 2.7907 }
];

// ============================================================
// POSITIONS CONFIG
// ============================================================
const POSITIONS = {
    1: {
        label: 'Position 1',
        songTitle: 'Take Me Home, Country Roads',
        songArtist: 'John Denver',
        scaleNotes: P1_SCALE_NOTES,
        scaleSequence: P1_SCALE_SEQUENCE,
        melodyNotes: P1_MELODY_NOTES,
        demoMelody: P1_DEMO_MELODY,
        fretToFinger: P1_FRET_TO_FINGER,
        melodyAudio: 'Take_Me_Home_Position_1.mp3',
        backingAudio: 'Take_Me_Home_Positon_1_No_Melody.mp3',
        downloadUrl: '/scale-trainer/download/1',
        videoUrl: 'https://www.sixstringcountry.com/lessons/the-pentatonic-scale---position-1-in-g',
        fretRange: { min: 0, max: 5 }
    },
    2: {
        label: 'Position 2',
        songTitle: 'Gone Country',
        songArtist: 'Alan Jackson',
        scaleNotes: P2_SCALE_NOTES,
        scaleSequence: P2_SCALE_SEQUENCE,
        melodyNotes: P2_MELODY_NOTES,
        demoMelody: P2_DEMO_MELODY,
        fretToFinger: P2_FRET_TO_FINGER,
        melodyAudio: 'Gone_Country_Position_2.mp3',
        backingAudio: 'Gone_Country_Position_2_No_Melody.mp3',
        downloadUrl: '/scale-trainer/download/2',
        videoUrl: 'https://www.sixstringcountry.com/lessons/the-pentatonic-scale---position-2-in-g',
        fretRange: { min: 3, max: 9 }
    },
    3: {
        label: 'Position 3',
        songTitle: 'Tennessee Whiskey',
        songArtist: 'Chris Stapleton',
        scaleNotes: P3_SCALE_NOTES,
        scaleSequence: P3_SCALE_SEQUENCE,
        melodyNotes: P3_MELODY_NOTES,
        demoMelody: P3_DEMO_MELODY,
        fretToFinger: P3_FRET_TO_FINGER,
        melodyAudio: 'Tennessee_Whiskey_Position_3.mp3',
        backingAudio: 'Tennessee_Whiskey_Position_3_No_Melody.mp3',
        downloadUrl: '/scale-trainer/download/3',
        videoUrl: 'https://www.sixstringcountry.com/lessons/the-pentatonic-scale---position-3-in-g',
        fretRange: { min: 6, max: 11 }
    },
    4: {
        label: 'Position 4',
        songTitle: 'Have You Ever Seen the Rain',
        songArtist: 'Creedence Clearwater Revival',
        scaleNotes: P4_SCALE_NOTES,
        scaleSequence: P4_SCALE_SEQUENCE,
        melodyNotes: P4_MELODY_NOTES,
        demoMelody: P4_DEMO_MELODY,
        fretToFinger: P4_FRET_TO_FINGER,
        melodyAudio: 'Have_You_Ever_Seen_the_Rain_Position_4.mp3',
        backingAudio: 'Have_You_Ever_Seen_the_Rain_Position_4_No_Melody.mp3',
        downloadUrl: '/scale-trainer/download/4',
        videoUrl: 'https://www.sixstringcountry.com/lessons/the-pentatonic-scale---position-4-in-g',
        fretRange: { min: 8, max: 13 }
    },
    5: {
        label: 'Position 5',
        songTitle: 'Friends In Low Places',
        songArtist: 'Garth Brooks',
        scaleNotes: P5_SCALE_NOTES,
        scaleSequence: P5_SCALE_SEQUENCE,
        melodyNotes: P5_MELODY_NOTES,
        demoMelody: P5_DEMO_MELODY,
        fretToFinger: P5_FRET_TO_FINGER,
        melodyAudio: 'Friends_in_Low_Places_Position_5.mp3',
        backingAudio: 'Friends_in_Low_Places_Position_5_No_Melody.mp3',
        downloadUrl: '/scale-trainer/download/5',
        videoUrl: 'https://www.sixstringcountry.com/lessons/the-pentatonic-scale---position-5-in-g',
        fretRange: { min: 11, max: 16 }
    }
};

// Helper: get finger for a note (works for all positions)
function getFingerForNote(string, fret) {
    if (activePosition >= 2) {
        const key = string + '-' + fret;
        return FRET_TO_FINGER[key] || 0;
    }
    return P1_FRET_TO_FINGER[fret] || 0;
}
