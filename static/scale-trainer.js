// ============================================================
// SCALE DATA — G Major Pentatonic Position 1
// From MusicXML: Duplicate-of-Pentatonic-Learn-Position-1.xml
// ============================================================
const SCALE_NOTES = [
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

// From MusicXML: ascending 12, descending to root (doubled at end)
const SCALE_SEQUENCE = [
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

// ============================================================
// Fingering map: fret -> finger for Position 1
// ============================================================
const FRET_TO_FINGER = { 2: 1, 3: 2, 4: 3, 5: 4 };

// ============================================================
// MELODY — "Your Turn" pitch detection (m1-m9 minus last 2 = 26 notes)
// From MusicXML: Scales-and-Melodies-Position-1.xml Part 2
// ============================================================
const MELODY_NOTES = [
    // m1 — pickup
    { string: 4, fret: 5, note: 'G', chord: 'G' },
    { string: 3, fret: 2, note: 'A', chord: 'G' },
    // m2 — G
    { string: 3, fret: 4, note: 'B', chord: 'G' },
    { string: 3, fret: 4, note: 'B', chord: 'G' },
    { string: 3, fret: 4, note: 'B', chord: 'G' },
    // m3 — D
    { string: 3, fret: 2, note: 'A', chord: 'D' },
    { string: 3, fret: 4, note: 'B', chord: 'D' },
    { string: 3, fret: 2, note: 'A', chord: 'D' },
    // m4 — Em
    { string: 4, fret: 5, note: 'G', chord: 'Em' },
    { string: 3, fret: 4, note: 'B', chord: 'Em' },
    { string: 2, fret: 3, note: 'D', chord: 'Em' },
    // m5 — C
    { string: 2, fret: 5, note: 'E', chord: 'C' },
    { string: 2, fret: 5, note: 'E', chord: 'C' },
    { string: 2, fret: 5, note: 'E', chord: 'C' },
    // m6 — G
    { string: 2, fret: 3, note: 'D', chord: 'G' },
    { string: 3, fret: 4, note: 'B', chord: 'G' },
    { string: 3, fret: 4, note: 'B', chord: 'G' },
    { string: 3, fret: 4, note: 'B', chord: 'G' },
    // m7 — D
    { string: 3, fret: 2, note: 'A', chord: 'D' },
    { string: 3, fret: 4, note: 'B', chord: 'D' },
    { string: 3, fret: 4, note: 'B', chord: 'D' },
    { string: 3, fret: 2, note: 'A', chord: 'D' },
    // m8 — C
    { string: 4, fret: 5, note: 'G', chord: 'C' },
    { string: 4, fret: 5, note: 'G', chord: 'C' },
    { string: 3, fret: 2, note: 'A', chord: 'C' },
    // m9 — G (just the dotted half G, removing last G eighth + A eighth)
    { string: 4, fret: 5, note: 'G', chord: 'G' }
];

// ============================================================
// DEMO_MELODY — full 18 measures for watch & listen
// Timed at 76 BPM from MusicXML
// ============================================================
const BEAT = 60 / 76;

const DEMO_MELODY = [
    // m1 pickup
    { time: 2.3684, string: 4, fret: 5, note: 'G', chord: 'G', dur: 0.3947 },
    { time: 2.7632, string: 3, fret: 2, note: 'A', chord: 'G', dur: 0.3947 },
    // m2 — G
    { time: 3.1579, string: 3, fret: 4, note: 'B', chord: 'G', dur: 2.3684 },
    { time: 5.5263, string: 3, fret: 4, note: 'B', chord: 'G', dur: 0.3947 },
    { time: 5.9211, string: 3, fret: 4, note: 'B', chord: 'G', dur: 0.3947 },
    // m3 — D
    { time: 6.3158, string: 3, fret: 2, note: 'A', chord: 'D', dur: 2.3684 },
    { time: 8.6842, string: 3, fret: 4, note: 'B', chord: 'D', dur: 0.3947 },
    { time: 9.0789, string: 3, fret: 2, note: 'A', chord: 'D', dur: 0.3947 },
    // m4 — Em
    { time: 9.4737, string: 4, fret: 5, note: 'G', chord: 'Em', dur: 2.3684 },
    { time: 11.8421, string: 3, fret: 4, note: 'B', chord: 'Em', dur: 0.3947 },
    { time: 12.2368, string: 2, fret: 3, note: 'D', chord: 'Em', dur: 0.3947 },
    // m5 — C
    { time: 12.6316, string: 2, fret: 5, note: 'E', chord: 'C', dur: 2.3684 },
    { time: 15.0, string: 2, fret: 5, note: 'E', chord: 'C', dur: 0.3947 },
    { time: 15.3947, string: 2, fret: 5, note: 'E', chord: 'C', dur: 0.3947 },
    // m6 — G (eighth, eighth+tie→half = 2.5b, eighth, eighth)
    { time: 15.7895, string: 2, fret: 3, note: 'D', chord: 'G', dur: 0.3947 },
    { time: 16.1842, string: 3, fret: 4, note: 'B', chord: 'G', dur: 1.9737 },
    { time: 18.1579, string: 3, fret: 4, note: 'B', chord: 'G', dur: 0.3947 },
    { time: 18.5526, string: 3, fret: 4, note: 'B', chord: 'G', dur: 0.3947 },
    // m7 — D (eighth, eighth+tie→half = 2.5b, eighth, eighth)
    { time: 18.9474, string: 3, fret: 2, note: 'A', chord: 'D', dur: 0.3947 },
    { time: 19.3421, string: 3, fret: 4, note: 'B', chord: 'D', dur: 1.9737 },
    { time: 21.3158, string: 3, fret: 4, note: 'B', chord: 'D', dur: 0.3947 },
    { time: 21.7105, string: 3, fret: 2, note: 'A', chord: 'D', dur: 0.3947 },
    // m8 — C
    { time: 22.1053, string: 4, fret: 5, note: 'G', chord: 'C', dur: 2.3684 },
    { time: 24.4737, string: 4, fret: 5, note: 'G', chord: 'C', dur: 0.3947 },
    { time: 24.8684, string: 3, fret: 2, note: 'A', chord: 'C', dur: 0.3947 },
    // m9 — G
    { time: 25.2632, string: 4, fret: 5, note: 'G', chord: 'G', dur: 2.3684 },
    { time: 27.6316, string: 4, fret: 5, note: 'G', chord: 'G', dur: 0.3947 },
    { time: 28.0263, string: 3, fret: 2, note: 'A', chord: 'G', dur: 0.3947 },
    // m10 — G (repeat starts)
    { time: 28.4211, string: 3, fret: 4, note: 'B', chord: 'G', dur: 2.3684 },
    { time: 30.7895, string: 3, fret: 4, note: 'B', chord: 'G', dur: 0.3947 },
    { time: 31.1842, string: 3, fret: 4, note: 'B', chord: 'G', dur: 0.3947 },
    // m11 — D
    { time: 31.5789, string: 3, fret: 2, note: 'A', chord: 'D', dur: 2.3684 },
    { time: 33.9474, string: 3, fret: 4, note: 'B', chord: 'D', dur: 0.3947 },
    { time: 34.3421, string: 3, fret: 2, note: 'A', chord: 'D', dur: 0.3947 },
    // m12 — Em
    { time: 34.7368, string: 4, fret: 5, note: 'G', chord: 'Em', dur: 2.3684 },
    { time: 37.1053, string: 3, fret: 4, note: 'B', chord: 'Em', dur: 0.3947 },
    { time: 37.5, string: 2, fret: 3, note: 'D', chord: 'Em', dur: 0.3947 },
    // m13 — C
    { time: 37.8947, string: 2, fret: 5, note: 'E', chord: 'C', dur: 2.3684 },
    { time: 40.2632, string: 2, fret: 5, note: 'E', chord: 'C', dur: 0.3947 },
    { time: 40.6579, string: 2, fret: 5, note: 'E', chord: 'C', dur: 0.3947 },
    // m14 — G
    { time: 41.0526, string: 2, fret: 3, note: 'D', chord: 'G', dur: 0.3947 },
    { time: 41.4474, string: 3, fret: 4, note: 'B', chord: 'G', dur: 1.9737 },
    { time: 43.4211, string: 3, fret: 4, note: 'B', chord: 'G', dur: 0.3947 },
    { time: 43.8158, string: 3, fret: 4, note: 'B', chord: 'G', dur: 0.3947 },
    // m15 — D
    { time: 44.2105, string: 3, fret: 2, note: 'A', chord: 'D', dur: 0.3947 },
    { time: 44.6053, string: 3, fret: 4, note: 'B', chord: 'D', dur: 1.9737 },
    { time: 46.5789, string: 3, fret: 4, note: 'B', chord: 'D', dur: 0.3947 },
    { time: 46.9737, string: 3, fret: 2, note: 'A', chord: 'D', dur: 0.3947 },
    // m16 — C
    { time: 47.3684, string: 4, fret: 5, note: 'G', chord: 'C', dur: 2.3684 },
    { time: 49.7368, string: 4, fret: 5, note: 'G', chord: 'C', dur: 0.3947 },
    { time: 50.1316, string: 3, fret: 2, note: 'A', chord: 'C', dur: 0.3947 },
    // m17 — G
    { time: 50.5263, string: 4, fret: 5, note: 'G', chord: 'G', dur: 2.3684 },
    { time: 52.8947, string: 4, fret: 5, note: 'G', chord: 'G', dur: 0.3947 },
    { time: 53.2895, string: 3, fret: 2, note: 'A', chord: 'G', dur: 0.3947 },
    // m18 — G (whole note)
    { time: 53.6842, string: 4, fret: 5, note: 'G', chord: 'G', dur: 3.1579 }
];

const STANDARD_TUNING = {
    6: 82.41, 5: 110.00, 4: 146.83,
    3: 196.00, 2: 246.94, 1: 329.63
};
