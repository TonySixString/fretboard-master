// ============================================================
// CHORD TRAINER DATA — Song-First, Variation-Inclusive Approach
// ============================================================

// Each chord family includes the core shape + variations
// Variations are taught alongside the core chord, not as separate levels

const CHORD_FAMILIES = {
    'G': {
        core: {
            name: 'G',
            fullName: 'G Major',
            notes: ['G', 'B', 'D'],
            frets: [3, 2, 0, 0, 0, 3],
            fingers: [2, 1, 0, 0, 0, 3],
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
                strings: {
                    6: { note: 'G', interval: 'Root' },
                    5: { note: 'B', interval: 'Major 3rd' },
                    4: { note: 'D', interval: 'Perfect 5th' },
                    3: { note: 'G', interval: 'Root' },
                    2: { note: 'D', interval: 'Perfect 5th' },
                    1: { note: 'G', interval: 'Root' }
                }
            },
            {
                name: 'G (folk)',
                fullName: 'G Major (folk voicing)',
                description: 'Use your ring and pinky fingers on the bottom two strings instead. This frees up your index and middle fingers, making some chord transitions smoother.',
                whyItWorks: 'Still the same three notes: G, B, and D.',
                frets: [3, 2, 0, 0, 0, 3],
                fingers: [3, 2, 0, 0, 0, 4],
                strings: {
                    6: { note: 'G', interval: 'Root' },
                    5: { note: 'B', interval: 'Major 3rd' },
                    4: { note: 'D', interval: 'Perfect 5th' },
                    3: { note: 'G', interval: 'Root' },
                    2: { note: 'B', interval: 'Major 3rd' },
                    1: { note: 'G', interval: 'Root' }
                }
            }
        ],
        theoryNote: 'Every G chord — no matter the shape — is built from three notes: G, B, and D. When you see "G" on a chord chart, any of these voicings will work.'
    },

    'Cadd9': {
        core: {
            name: 'C',
            fullName: 'C Major',
            notes: ['C', 'E', 'G'],
            frets: [-1, 3, 2, 0, 1, 0],
            fingers: [0, 3, 2, 0, 1, 0],
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
                fullName: 'C add 9 (also called C2)',
                description: 'Keep your standard C shape, but move your index finger off the B string and let it ring open. That open B string gives you a D note, which adds a beautiful shimmer. This is one of the most used chords in modern country.',
                whyItWorks: 'We\'re adding a D note (the 9th/2nd) to the C chord. Guitar players often call this a "C2" — same thing. You\'ll hear it everywhere.',
                frets: [-1, 3, 2, 0, 3, 0],
                fingers: [0, 2, 1, 0, 3, 0],
                strings: {
                    6: { note: null, interval: 'Mute' },
                    5: { note: 'C', interval: 'Root' },
                    4: { note: 'E', interval: 'Major 3rd' },
                    3: { note: 'G', interval: 'Perfect 5th' },
                    2: { note: 'D', interval: '9th (add9)' },
                    1: { note: 'E', interval: 'Major 3rd' }
                }
            }
        ],
        theoryNote: 'A Cadd9 is just a C chord (C, E, G) with an added D note. Guitar players call it "C2" because D is the 2nd note in the C scale. When a chord chart says "C" in a country song, try the Cadd9 — it almost always sounds better.'
    },

    'Dsus2': {
        core: {
            name: 'D',
            fullName: 'D Major',
            notes: ['D', 'F#', 'A'],
            frets: [-1, -1, 0, 2, 3, 2],
            fingers: [0, 0, 0, 1, 3, 2],
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
                fullName: 'D suspended 2 (also called D2 or Dadd9)',
                description: 'Start with your standard D chord, then lift your finger off the high E string and let it ring open. That open E note replaces the F# and gives the chord a bright, open sound. You\'ll hear this all over country music.',
                whyItWorks: 'We\'re adding an E note (the 2nd/9th) to the D chord. Just like how we added D to the C chord — same concept, different key.',
                frets: [-1, -1, 0, 2, 3, 0],
                fingers: [0, 0, 0, 1, 3, 0],
                strings: {
                    6: { note: null, interval: 'Mute' },
                    5: { note: null, interval: 'Mute' },
                    4: { note: 'D', interval: 'Root' },
                    3: { note: 'A', interval: 'Perfect 5th' },
                    2: { note: 'D', interval: 'Root' },
                    1: { note: 'E', interval: '2nd (sus2)' }
                }
            },
            {
                name: 'Dsus4',
                fullName: 'D suspended 4',
                description: 'From your D chord, add your pinky to the 3rd fret of the high E string. This gives you a G note instead of F#, creating tension that wants to resolve back to D. Try strumming Dsus4 → D — hear that?',
                whyItWorks: 'Replacing the 3rd (F#) with the 4th (G). This creates a "pull" back to the regular D chord — a classic move.',
                frets: [-1, -1, 0, 2, 3, 3],
                fingers: [0, 0, 0, 1, 2, 3],
                strings: {
                    6: { note: null, interval: 'Mute' },
                    5: { note: null, interval: 'Mute' },
                    4: { note: 'D', interval: 'Root' },
                    3: { note: 'A', interval: 'Perfect 5th' },
                    2: { note: 'D', interval: 'Root' },
                    1: { note: 'G', interval: '4th (sus4)' }
                }
            }
        ],
        theoryNote: 'Notice a pattern? With C, we added a D note. With D, we added an E note. In both cases, we\'re adding the 2nd note of that chord\'s scale. These "add9" and "sus2" sounds are everywhere in country music.'
    },

    'Em7': {
        core: {
            name: 'Em',
            fullName: 'E Minor',
            notes: ['E', 'G', 'B'],
            frets: [0, 2, 2, 0, 0, 0],
            fingers: [0, 2, 3, 0, 0, 0],
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
                fullName: 'E Minor 7',
                description: 'This is the easiest chord on the guitar. From your Em shape, just lift your finger off the A string. That open A string gives you a D note — which turns Em into Em7. One finger removed, richer sound.',
                whyItWorks: 'We\'re adding a D note (the minor 7th) to the Em chord. Notice that D keeps showing up? It\'s in the G chord, we added it to C, and now it\'s in Em7. That\'s why these chords all sound great together — they share notes.',
                frets: [0, 0, 2, 0, 0, 0],
                fingers: [0, 0, 1, 0, 0, 0],
                strings: {
                    6: { note: 'E', interval: 'Root' },
                    5: { note: 'A', interval: 'Minor 7th' },  // changed!
                    4: { note: 'E', interval: 'Root' },
                    3: { note: 'G', interval: 'Minor 3rd' },
                    2: { note: 'B', interval: 'Perfect 5th' },
                    1: { note: 'E', interval: 'Root' }
                }
            },
            {
                name: 'Em7 (alt)',
                fullName: 'E Minor 7 (two-finger version)',
                description: 'Put your middle finger on the 2nd fret of the A string and your ring finger on the 2nd fret of the D string. This is the "standard" Em with the 7th added — you get both the B and D notes ringing.',
                whyItWorks: 'Same Em7 chord, but this voicing has a fuller low end because you\'re fretting the A string for a B note (the 5th) instead of letting the open A ring.',
                frets: [0, 2, 2, 0, 0, 0],
                fingers: [0, 2, 3, 0, 0, 0],
                strings: {
                    6: { note: 'E', interval: 'Root' },
                    5: { note: 'B', interval: 'Perfect 5th' },
                    4: { note: 'E', interval: 'Root' },
                    3: { note: 'G', interval: 'Minor 3rd' },
                    2: { note: 'B', interval: 'Perfect 5th' },
                    1: { note: 'E', interval: 'Root' }
                }
            }
        ],
        theoryNote: 'Adding a D note to Em creates Em7. A D note added to C creates Cadd9. See how connected these chords are? In the key of G, the note D is everywhere — it\'s the glue that makes everything sound like it belongs together.'
    }
};

// Module structure: Key of G
const MODULES = {
    'G': {
        name: 'Key of G',
        subtitle: 'The most popular key in country music',
        chordFamilies: ['G', 'Cadd9', 'Dsus2', 'Em7'],
        description: 'Learn 4 chord families that unlock dozens of songs. You\'ll learn the core shapes, the variations you\'ll actually use, and why they all work together.',
        songs: [
            { title: 'Wagon Wheel', artist: 'Darius Rucker', chords: 'G - D - Em - C', difficulty: 'Easy' },
            { title: 'Take Me Home, Country Roads', artist: 'John Denver', chords: 'G - Em - D - C', difficulty: 'Easy' },
            { title: 'Ring of Fire', artist: 'Johnny Cash', chords: 'G - C - D', difficulty: 'Easy' },
            { title: 'Knockin\' on Heaven\'s Door', artist: 'Bob Dylan', chords: 'G - D - C', difficulty: 'Easy' },
            { title: 'You Are My Sunshine', artist: 'Traditional', chords: 'G - C - D', difficulty: 'Easy' },
            { title: 'Sweet Home Alabama', artist: 'Lynyrd Skynyrd', chords: 'D - C - G', difficulty: 'Easy' },
            { title: 'Brown Eyed Girl', artist: 'Van Morrison', chords: 'G - C - D - Em', difficulty: 'Easy' },
            { title: 'Jambalaya', artist: 'Hank Williams', chords: 'G - D', difficulty: 'Easy' },
            { title: 'Bad Moon Rising', artist: 'CCR', chords: 'G - C - D', difficulty: 'Easy' },
            { title: 'Cruise', artist: 'Florida Georgia Line', chords: 'G - D - Em - C', difficulty: 'Easy' }
        ],
        capoNote: 'With a capo, these same 4 chord shapes can play songs in ANY key. That\'s why the capo is every country guitarist\'s best friend.'
    }
};

// Ear training quiz data — audio clips described by chord
const EAR_TRAINING = {
    'G': {
        questions: [
            { play: 'G', options: ['G', 'C'], hint: 'Listen for the big, full sound — G uses all 6 strings.' },
            { play: 'C', options: ['C', 'D'], hint: 'C has a warm, grounded tone. D sounds brighter and thinner.' },
            { play: 'Em', options: ['Em', 'G'], hint: 'Em sounds sadder and moodier. G sounds happy and full.' },
            { play: 'D', options: ['D', 'Em'], hint: 'D has a bright, trebly sound. Em is darker and uses more strings.' },
            { play: 'G', options: ['G', 'D'], hint: 'G has that deep low end from the 6th string. D only uses 4 strings.' },
            { play: 'C', options: ['C', 'Em'], hint: 'C sounds warm and resolved. Em has that minor, unfinished quality.' }
        ]
    }
};

// Reference frequencies for generating chord audio
const STANDARD_TUNING = {
    6: 82.41,  // E2
    5: 110.00, // A2
    4: 146.83, // D3
    3: 196.00, // G3
    2: 246.94, // B3
    1: 329.63  // E4
};

// Capo explainer content
const CAPO_CONTENT = {
    title: 'What\'s a Capo?',
    explanation: 'A capo is a clamp that goes across all the strings at a specific fret. It raises the pitch of all the strings equally, letting you play the same chord shapes in a different key.',
    example: 'For example, if you put a capo on fret 2 and play a G shape, you\'re actually playing an A chord. Same fingers, different key.',
    whyItMatters: 'This is huge for country guitar. Instead of learning complicated barre chord shapes for every key, you can use a capo and keep playing your comfortable open chords. Many country songs are written specifically with a capo in mind.',
    diagram: {
        // Capo on fret 2 example
        fret: 2,
        examples: [
            { shape: 'G shape', actual: 'A chord' },
            { shape: 'C shape', actual: 'D chord' },
            { shape: 'D shape', actual: 'E chord' },
            { shape: 'Em shape', actual: 'F#m chord' }
        ]
    }
};
