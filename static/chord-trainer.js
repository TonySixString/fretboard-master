// ============================================================
// CHORD TRAINER DATA — Song-First, Variation-Inclusive Approach
// ============================================================

const CHORD_FAMILIES = {
    'G': {
        core: {
            name: 'G',
            fullName: 'G Major',
            notes: ['G', 'B', 'D'],
            frets: [3, 2, 0, 0, 0, 3],
            fingers: [2, 1, 0, 0, 0, 3],
            noteNames: ['G', 'B', 'D', 'G', 'B', 'G'],
            strings: {
                6: { note: 'G', interval: 'Root' },
                5: { note: 'B', interval: 'Major 3rd' },
                4: { note: 'D', interval: 'Perfect 5th' },
                3: { note: 'G', interval: 'Root' },
                2: { note: 'B', interval: 'Major 3rd' },
                1: { note: 'G', interval: 'Root' }
            }
        },
        variations: [
            {
                name: 'G (alt)',
                fullName: 'G Major (pinky on high E)',
                description: 'Same G chord, but add your pinky to the 3rd fret of the high E string. This is the most common way country players voice a G — it keeps the G note ringing on both the top and bottom strings.',
                whyItWorks: 'It\'s still G, B, and D — just with a stronger G note on top.',
                frets: [3, 2, 0, 0, 3, 3],
                fingers: [2, 1, 0, 0, 3, 4],
                noteNames: ['G', 'B', 'D', 'G', 'D', 'G']
            },
            {
                name: 'G (folk)',
                fullName: 'G Major (folk voicing)',
                description: 'Same chord, just a slight variation on finger placement which can be useful depending on what chord is coming next.',
                whyItWorks: 'Still the same three notes: G, B, and D.',
                frets: [3, 2, 0, 0, 0, 3],
                fingers: [3, 2, 0, 0, 0, 4],
                noteNames: ['G', 'B', 'D', 'G', 'B', 'G']
            },
            {
                name: 'G (no 3rd)',
                fullName: 'G (no 3rd)',
                description: 'Same chord, just easier! This takes some of the "muddiness" out of the chord and is frequently used in country songs.',
                whyItWorks: 'Removing the B (3rd) gives it a more open, powerful sound. Works great for big strumming parts.',
                frets: [3, -1, 0, 0, 3, 3],
                fingers: [2, 0, 0, 0, 3, 4],
                noteNames: ['G', null, 'D', 'G', 'D', 'G']
            }
        ],
        theoryNote: 'Every G chord — no matter the shape — is built from three notes: G, B, and D. You probably noticed, though, that the variations all sound a little bit different. This is part of what gives each song its flavor! Now onto the C chords.'
    },

    'Cadd9': {
        core: {
            name: 'C',
            fullName: 'C Major',
            notes: ['C', 'E', 'G'],
            frets: [-1, 3, 2, 0, 1, 0],
            fingers: [0, 3, 2, 0, 1, 0],
            noteNames: [null, 'C', 'E', 'G', 'C', 'E'],
            strings: {
                6: { note: null, interval: 'Mute' },
                5: { note: 'C', interval: 'Root' },
                4: { note: 'E', interval: 'Major 3rd' },
                3: { note: 'G', interval: 'Perfect 5th' },
                2: { note: 'C', interval: 'Root' },
                1: { note: 'E', interval: 'Major 3rd' }
            }
        },
        variations: [
            {
                name: 'Cadd9',
                fullName: 'Cadd9 (also called C2)',
                description: 'You\'ll notice that this is a similar shape to some of those G chords. It\'s an easy transition from one to the other. That\'s partly why it\'s used all the time in country music!',
                whyItWorks: 'We\'re adding a D note (the 9th/2nd) to the C chord. Guitar players often call this a "C2" — same thing. You\'ll hear it everywhere.',
                frets: [-1, 3, 2, 0, 3, 3],
                fingers: [0, 2, 1, 0, 3, 4],
                noteNames: [null, 'C', 'E', 'G', 'D', 'G']
            },
            {
                name: 'C/G',
                fullName: 'C/G',
                description: 'This chord is used a lot in combination with G chord. It\'s technically a C chord with a G in the bass. It shows up all the time on country chord charts.',
                whyItWorks: 'The G bass note makes the transition to and from G chords seamless — your lowest note stays the same.',
                frets: [3, -1, 2, 0, 1, 3],
                fingers: [3, 0, 2, 0, 1, 4],
                noteNames: ['G', null, 'E', 'G', 'C', 'G']
            }
        ],
        theoryNote: 'A Cadd9 is just a C chord (C, E, G) with an added D note. Guitar players call it "C2" because D is the 2nd note in the C scale. The C/G puts a G note in the bass, which makes for a smooth transition to and from G chords. When you see "C" or "Cadd9" or "C/G" on a chord chart, now you know what to play.'
    },

    'Dsus2': {
        core: {
            name: 'D',
            fullName: 'D Major',
            notes: ['D', 'F#', 'A'],
            frets: [-1, -1, 0, 2, 3, 2],
            fingers: [0, 0, 0, 1, 3, 2],
            noteNames: [null, null, 'D', 'A', 'D', 'F#'],
            strings: {
                6: { note: null, interval: 'Mute' },
                5: { note: null, interval: 'Mute' },
                4: { note: 'D', interval: 'Root' },
                3: { note: 'A', interval: 'Perfect 5th' },
                2: { note: 'D', interval: 'Root' },
                1: { note: 'F#', interval: 'Major 3rd' }
            }
        },
        variations: [
            {
                name: 'Dsus2',
                fullName: 'Dsus2 (also called D2 or Dadd9)',
                description: 'Start with your standard D chord, then lift your finger off the high E string and let it ring open. That open E note replaces the F# and gives the chord a bright, open sound. You\'ll hear this all over country music.',
                whyItWorks: 'We\'re adding an E note (the 2nd/9th) to the D chord. Just like how we added D to the C chord — same concept, different key.',
                frets: [-1, -1, 0, 2, 3, 0],
                fingers: [0, 0, 0, 1, 3, 0],
                noteNames: [null, null, 'D', 'A', 'D', 'E']
            },
            {
                name: 'Dsus4',
                fullName: 'Dsus4 (also called Dsus)',
                description: 'From your D chord, add your pinky to the 3rd fret of the high E string. This gives you a G note instead of F#, creating tension that wants to resolve back to D. Try strumming Dsus4 \u2192 D — hear that? If you just see "Dsus" by itself on a chord chart, this is the chord.',
                whyItWorks: 'Replacing the 3rd (F#) with the 4th (G). This creates a "pull" back to the regular D chord — a classic move.',
                frets: [-1, -1, 0, 2, 3, 3],
                fingers: [0, 0, 0, 1, 2, 3],
                noteNames: [null, null, 'D', 'A', 'D', 'G']
            },
            {
                name: 'D7',
                fullName: 'D7',
                description: 'This variation introduces the "flat 7", or "dominant 7". Country music uses this variation regularly for the V chord of the progression.',
                whyItWorks: 'The C note (flat 7th) adds a bluesy tension that wants to resolve — that\'s why it\'s called "dominant."',
                frets: [-1, -1, 0, 2, 1, 2],
                fingers: [0, 0, 0, 2, 1, 3],
                noteNames: [null, null, 'D', 'A', 'C', 'F#']
            }
        ],
        theoryNote: 'Notice a pattern? With C, we added a D note. With D, we added an E note. In both cases, we\'re adding the 2nd note of that chord\'s scale. These "add9" and "sus2" sounds are everywhere in country music. We also introduced the D7 — that "flat 7" or "dominant 7" sound adds a bluesy tension that\'s a staple of country progressions.'
    },

    'Em7': {
        core: {
            name: 'Em',
            fullName: 'E Minor',
            notes: ['E', 'G', 'B'],
            frets: [0, 2, 2, 0, 0, 0],
            fingers: [0, 1, 2, 0, 0, 0],
            noteNames: ['E', 'B', 'E', 'G', 'B', 'E'],
            strings: {
                6: { note: 'E', interval: 'Root' },
                5: { note: 'B', interval: 'Perfect 5th' },
                4: { note: 'E', interval: 'Root' },
                3: { note: 'G', interval: 'Minor 3rd' },
                2: { note: 'B', interval: 'Perfect 5th' },
                1: { note: 'E', interval: 'Root' }
            }
        },
        variations: [
            {
                name: 'Em7',
                fullName: 'Em7 (E Minor 7)',
                description: 'Notice how similar this shape is to your G and Cadd9? The ring and pinky fingers stay in the same place — only the lower fingers change. These shared fingerings are why switching between G, Cadd9, and Em7 feels so natural.',
                whyItWorks: 'We\'re adding a D note (the minor 7th) to the Em chord. That D note keeps showing up — it\'s in the G chord, we added it to C, and now it\'s in Em7. That\'s why these chords all sound great together.',
                frets: [0, 2, 2, 0, 3, 3],
                fingers: [0, 1, 2, 0, 3, 4],
                noteNames: ['E', 'B', 'E', 'G', 'D', 'G']
            }
        ],
        theoryNote: 'Adding a D note to Em creates Em7. A D note added to C creates Cadd9. See how connected these chords are? In the key of G, the note D is everywhere — it\'s the glue that makes everything sound like it belongs together.'
    }
};

// ============================================================
// DRILL PROGRESSIONS
// ============================================================

const DRILL_PROGRESSIONS = [
    {
        id: 'drill-d-variations',
        title: 'D Chord Variations',
        subtitle: 'Now watch how some of these variations work together.',
        insight: 'Notice that only one note is changing each time.',
        chords: [
            { ref: 'Dsus2', type: 'core' },           // D Major
            { ref: 'Dsus2', type: 'variation', idx: 1 }, // Dsus4
            { ref: 'Dsus2', type: 'core' },           // D Major
            { ref: 'Dsus2', type: 'variation', idx: 0 }  // Dsus2
        ],
        getChordData: function() {
            return [
                CHORD_FAMILIES['Dsus2'].core,
                CHORD_FAMILIES['Dsus2'].variations[1], // Dsus4
                CHORD_FAMILIES['Dsus2'].core,
                CHORD_FAMILIES['Dsus2'].variations[0]  // Dsus2
            ];
        }
    },
    {
        id: 'drill-anchor-fingers',
        title: 'The Anchor Finger Trick',
        subtitle: 'This is one of the most useful things you\'ll learn on guitar.',
        insight: 'Do you see how your 3rd and 4th fingers stay in the same place through this whole progression?',
        chords: [
            { ref: 'G', type: 'variation', idx: 0 },    // G (alt)
            { ref: 'Cadd9', type: 'variation', idx: 0 }, // Cadd9
            { ref: 'Em7', type: 'variation', idx: 0 },   // Em7
            { ref: 'Dsus2', type: 'variation', idx: 1 }  // Dsus4
        ],
        getChordData: function() {
            return [
                CHORD_FAMILIES['G'].variations[0],      // G (alt)
                CHORD_FAMILIES['Cadd9'].variations[0],   // Cadd9
                CHORD_FAMILIES['Em7'].variations[0],     // Em7
                CHORD_FAMILIES['Dsus2'].variations[1]    // Dsus4
            ];
        }
    }
];

// ============================================================
// EAR TRAINING — Expanded with variations
// ============================================================

const EAR_TRAINING = {
    'G': {
        questions: [
            { play: 'G', options: ['G', 'C'], hint: 'Listen for the big, full sound — G uses all 6 strings.' },
            { play: 'C', options: ['C', 'D'], hint: 'C has a warm, grounded tone. D sounds brighter and thinner.' },
            { play: 'Em', options: ['Em', 'G'], hint: 'Em sounds sadder and moodier. G sounds happy and full.' },
            { play: 'D', options: ['D', 'Em'], hint: 'D has a bright, trebly sound. Em is darker and uses more strings.' },
            { play: 'G', options: ['G', 'D'], hint: 'G has that deep low end from the 6th string. D only uses 4 strings.' },
            { play: 'C', options: ['C', 'Em'], hint: 'C sounds warm and resolved. Em has that minor, unfinished quality.' },
            { play: 'Cadd9', options: ['C', 'Cadd9'], hint: 'Cadd9 has a shimmery, open quality. Standard C sounds more compact.' },
            { play: 'Dsus4', options: ['D', 'Dsus4'], hint: 'Dsus4 has a tension that wants to resolve. D sounds settled.' },
            { play: 'Em7', options: ['Em', 'Em7'], hint: 'Em7 sounds a little more open and dreamy. Em is darker and tighter.' },
            { play: 'Dsus2', options: ['D', 'Dsus2'], hint: 'Dsus2 has a bright, airy quality. D sounds more defined.' }
        ]
    }
};

// ============================================================
// EAR TRAINING CHORD LOOKUP — maps names to playable data
// ============================================================

const EAR_CHORD_LOOKUP = {
    'G': CHORD_FAMILIES['G'].core,
    'C': CHORD_FAMILIES['Cadd9'].core,
    'D': CHORD_FAMILIES['Dsus2'].core,
    'Em': CHORD_FAMILIES['Em7'].core,
    'Cadd9': CHORD_FAMILIES['Cadd9'].variations[0],
    'C/G': CHORD_FAMILIES['Cadd9'].variations[1],
    'Dsus2': CHORD_FAMILIES['Dsus2'].variations[0],
    'Dsus4': CHORD_FAMILIES['Dsus2'].variations[1],
    'D7': CHORD_FAMILIES['Dsus2'].variations[2],
    'Em7': CHORD_FAMILIES['Em7'].variations[0],
    'G (alt)': CHORD_FAMILIES['G'].variations[0],
    'G (folk)': CHORD_FAMILIES['G'].variations[1],
    'G (no 3rd)': CHORD_FAMILIES['G'].variations[2]
};

// ============================================================
// MODULE & SONG DATA
// ============================================================

const MODULES = {
    'G': {
        name: 'Key of G',
        subtitle: 'The most popular key in country music',
        chordFamilies: ['G', 'Cadd9', 'Dsus2', 'Em7'],
        romanNumerals: { 'G': 'I', 'Cadd9': 'IV', 'Dsus2': 'V', 'Em7': 'vi' },
        description: 'Learn 4 chord families that unlock dozens of songs. You\'ll learn the core shapes, the variations you\'ll actually use, and why they all work together.',
        songs: [
            { title: 'Cruise', artist: 'Florida Georgia Line', chords: 'G - D - Em - C', url: 'https://www.sixstringcountry.com/lessons/4-easy-country-songs-in-g-with-tabscroll' },
            { title: 'Wagon Wheel', artist: 'Darius Rucker', chords: 'G - D - Em - C', url: 'https://www.sixstringcountry.com/lessons/4-easy-country-songs-in-g-with-tabscroll' },
            { title: 'You Make It Easy', artist: 'Jason Aldean', chords: 'G - D - Em - C', url: 'https://www.sixstringcountry.com/lessons/4-easy-country-songs-in-g-with-tabscroll' },
            { title: 'Hope You Get Lonely Tonight', artist: 'Cole Swindell', chords: 'G - D - Em - C', url: 'https://www.sixstringcountry.com/lessons/4-easy-country-songs-in-g-with-tabscroll' },
            { title: 'Ring of Fire', artist: 'Johnny Cash', chords: 'G - C - D', url: 'https://www.sixstringcountry.com/lessons/ring-of-fire---simplified-easy-strum-version' },
            { title: 'The Lucky One', artist: 'Alison Krauss and Union Station', chords: 'G - C - D - Em', url: 'https://www.sixstringcountry.com/lessons/the-lucky-one' },
            { title: 'Brand New Man', artist: 'Brooks & Dunn', chords: 'G - C - D', url: 'https://www.sixstringcountry.com/lessons/brand-new-man' },
            { title: 'Here\'s a Quarter', artist: 'Travis Tritt', chords: 'G - C - D', url: 'https://www.sixstringcountry.com/lessons/heres-a-quarter.3233135' },
            { title: 'Wanna Be Loved', artist: 'Red Clay Strays', chords: 'G - C - D - Em', url: 'https://www.sixstringcountry.com/lessons/wanna-be-loved' },
            { title: 'Drink in My Hand', artist: 'Eric Church', chords: 'G - C - D', url: 'https://www.sixstringcountry.com/lessons/drink-in-my-hand.610932' }
        ],
        capoNote: 'With a capo, these same 4 chord shapes can play songs in ANY key. That\'s why the capo is every country guitarist\'s best friend.'
    }
};

const STANDARD_TUNING = {
    6: 82.41, 5: 110.00, 4: 146.83,
    3: 196.00, 2: 246.94, 1: 329.63
};
