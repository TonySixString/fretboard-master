const CHORD_DATA = {
    'G': {
        name: 'G Major',
        roman: 'I',
        intervals: ['Root', 'Major 3rd', 'Perfect 5th'],
        notes_in_chord: ['G', 'B', 'D'],
        root_note: 'G',
        intro_text: 'The G chord is built from 3 notes: the Root (G), the Major 3rd (B), and the Perfect 5th (D).',
        frets: [3, 2, 0, 0, 0, 3],
        fingers: [2, 1, 0, 0, 0, 3],
        strings: {
            6: { note: 'G', interval: 'Root', description: 'Root — this gives the chord its name.' },
            5: { note: 'B', interval: 'Major 3rd', description: 'Major 3rd — this is what makes it sound happy.' },
            4: { note: 'D', interval: 'Perfect 5th', description: 'Perfect 5th — adds fullness and stability.' },
            3: { note: 'G', interval: 'Root', description: 'Root again, one octave higher.' },
            2: { note: 'B', interval: 'Major 3rd', description: 'Major 3rd again.' },
            1: { note: 'G', interval: 'Root', description: 'Root at the top.' }
        }
    },
    'C': {
        name: 'C Major',
        roman: 'IV',
        intervals: ['Root', 'Major 3rd', 'Perfect 5th'],
        notes_in_chord: ['C', 'E', 'G'],
        root_note: 'C',
        intro_text: 'The C chord is built from 3 notes: the Root (C), the Major 3rd (E), and the Perfect 5th (G).',
        frets: [-1, 3, 2, 0, 1, 0],
        fingers: [0, 3, 2, 0, 1, 0],
        strings: {
            6: { note: null, interval: null, description: 'Muted — don\'t play this string.' },
            5: { note: 'C', interval: 'Root', description: 'Root — this gives the chord its name.' },
            4: { note: 'E', interval: 'Major 3rd', description: 'Major 3rd — this is what makes it sound happy.' },
            3: { note: 'G', interval: 'Perfect 5th', description: 'Perfect 5th — adds fullness and stability.' },
            2: { note: 'C', interval: 'Root', description: 'Root again, one octave higher.' },
            1: { note: 'E', interval: 'Major 3rd', description: 'Major 3rd at the top.' }
        }
    },
    'D': {
        name: 'D Major',
        roman: 'V',
        intervals: ['Root', 'Major 3rd', 'Perfect 5th'],
        notes_in_chord: ['D', 'F#', 'A'],
        root_note: 'D',
        intro_text: 'The D chord is built from 3 notes: the Root (D), the Major 3rd (F#), and the Perfect 5th (A).',
        frets: [-1, -1, 0, 2, 3, 2],
        fingers: [0, 0, 0, 1, 3, 2],
        strings: {
            6: { note: null, interval: null, description: 'Muted — don\'t play this string.' },
            5: { note: null, interval: null, description: 'Muted — don\'t play this string.' },
            4: { note: 'D', interval: 'Root', description: 'Root — this gives the chord its name.' },
            3: { note: 'A', interval: 'Perfect 5th', description: 'Perfect 5th — adds fullness and stability.' },
            2: { note: 'D', interval: 'Root', description: 'Root again, one octave higher.' },
            1: { note: 'F#/Gb', interval: 'Major 3rd', description: 'Major 3rd — this is what makes it sound happy.' }
        }
    },
    'Em': {
        name: 'E Minor',
        roman: 'vi',
        intervals: ['Root', 'Minor 3rd', 'Perfect 5th'],
        notes_in_chord: ['E', 'G', 'B'],
        root_note: 'E',
        intro_text: 'The Em chord has a Root (E), a Minor 3rd (G), and a Perfect 5th (B). Notice the minor 3rd — that\'s what gives it a sadder, moodier sound compared to major chords.',
        frets: [0, 2, 2, 0, 0, 0],
        fingers: [0, 1, 2, 0, 0, 0],
        strings: {
            6: { note: 'E', interval: 'Root', description: 'Root — this gives the chord its name.' },
            5: { note: 'B', interval: 'Perfect 5th', description: 'Perfect 5th — adds fullness and stability.' },
            4: { note: 'E', interval: 'Root', description: 'Root again, one octave higher.' },
            3: { note: 'G', interval: 'Minor 3rd', description: 'Minor 3rd — this is what gives Em its moody, sad quality.' },
            2: { note: 'B', interval: 'Perfect 5th', description: 'Perfect 5th again.' },
            1: { note: 'E', interval: 'Root', description: 'Root at the top.' }
        }
    },
    'Am': {
        name: 'A Minor',
        roman: 'vi',
        intervals: ['Root', 'Minor 3rd', 'Perfect 5th'],
        notes_in_chord: ['A', 'C', 'E'],
        root_note: 'A',
        intro_text: 'The Am chord has a Root (A), a Minor 3rd (C), and a Perfect 5th (E). Like Em, the minor 3rd gives it that emotional, melancholy quality.',
        frets: [-1, 0, 2, 2, 1, 0],
        fingers: [0, 0, 2, 3, 1, 0],
        strings: {
            6: { note: null, interval: null, description: 'Muted — don\'t play this string.' },
            5: { note: 'A', interval: 'Root', description: 'Root — this gives the chord its name.' },
            4: { note: 'E', interval: 'Perfect 5th', description: 'Perfect 5th — adds fullness and stability.' },
            3: { note: 'A', interval: 'Root', description: 'Root again, one octave higher.' },
            2: { note: 'C', interval: 'Minor 3rd', description: 'Minor 3rd — this is what gives Am its emotional sound.' },
            1: { note: 'E', interval: 'Perfect 5th', description: 'Perfect 5th at the top.' }
        }
    },
    'F': {
        name: 'F Major',
        roman: 'IV',
        intervals: ['Root', 'Major 3rd', 'Perfect 5th'],
        notes_in_chord: ['F', 'A', 'C'],
        root_note: 'F',
        intro_text: 'The F chord is built from the Root (F), the Major 3rd (A), and the Perfect 5th (C). This is a common beginner-friendly version!',
        frets: [-1, -1, 3, 2, 1, 1],
        fingers: [0, 0, 3, 2, 1, 1],
        strings: {
            6: { note: null, interval: null, description: 'Muted — don\'t play this string.' },
            5: { note: null, interval: null, description: 'Muted — don\'t play this string.' },
            4: { note: 'F', interval: 'Root', description: 'Root — this gives the chord its name.' },
            3: { note: 'A', interval: 'Major 3rd', description: 'Major 3rd – this is what makes it sound happy.' },
            2: { note: 'C', interval: 'Perfect 5th', description: 'Perfect 5th – for the stability.' },
            1: { note: 'F', interval: 'Root', description: 'Another root – barred on 1st fret with 2nd string.' }
        }
    },
    'A': {
        name: 'A Major',
        roman: 'I',
        intervals: ['Root', 'Major 3rd', 'Perfect 5th'],
        notes_in_chord: ['A', 'C#', 'E'],
        root_note: 'A',
        intro_text: 'The A chord is built from the Root (A), the Major 3rd (C#), and the Perfect 5th (E).',
        frets: [-1, 0, 2, 2, 2, 0],
        fingers: [0, 0, 1, 2, 3, 0],
        strings: {
            6: { note: null, interval: null, description: 'Muted — don\'t play this string.' },
            5: { note: 'A', interval: 'Root', description: 'Root — this gives the chord its name.' },
            4: { note: 'E', interval: 'Perfect 5th', description: 'Perfect 5th — adds fullness and stability.' },
            3: { note: 'A', interval: 'Root', description: 'Root again, one octave higher.' },
            2: { note: 'C#/Db', interval: 'Major 3rd', description: 'Major 3rd — this is what makes it sound happy.' },
            1: { note: 'E', interval: 'Perfect 5th', description: 'Perfect 5th at the top.' }
        }
    },
    'D2': {
        name: 'D Major',
        roman: 'IV',
        intervals: ['Root', 'Major 3rd', 'Perfect 5th'],
        notes_in_chord: ['D', 'F#', 'A'],
        root_note: 'D',
        intro_text: 'You already know D! Here it is again in the key of A.',
        frets: [-1, -1, 0, 2, 3, 2],
        fingers: [0, 0, 0, 1, 3, 2],
        strings: {
            6: { note: null, interval: null, description: 'Muted — don\'t play this string.' },
            5: { note: null, interval: null, description: 'Muted — don\'t play this string.' },
            4: { note: 'D', interval: 'Root', description: 'Root — this gives the chord its name.' },
            3: { note: 'A', interval: 'Perfect 5th', description: 'Perfect 5th — adds fullness and stability.' },
            2: { note: 'D', interval: 'Root', description: 'Root again, one octave higher.' },
            1: { note: 'F#/Gb', interval: 'Major 3rd', description: 'Major 3rd — this is what makes it sound happy.' }
        }
    },
    'E': {
        name: 'E Major',
        roman: 'V',
        intervals: ['Root', 'Major 3rd', 'Perfect 5th'],
        notes_in_chord: ['E', 'G#', 'B'],
        root_note: 'E',
        intro_text: 'The E chord is built from the Root (E), the Major 3rd (G#), and the Perfect 5th (B).',
        frets: [0, 2, 2, 1, 0, 0],
        fingers: [0, 2, 3, 1, 0, 0],
        strings: {
            6: { note: 'E', interval: 'Root', description: 'Root — this gives the chord its name.' },
            5: { note: 'B', interval: 'Perfect 5th', description: 'Perfect 5th — adds fullness and stability.' },
            4: { note: 'E', interval: 'Root', description: 'Root again, one octave higher.' },
            3: { note: 'G#/Ab', interval: 'Major 3rd', description: 'Major 3rd — this is what makes it sound happy.' },
            2: { note: 'B', interval: 'Perfect 5th', description: 'Perfect 5th again.' },
            1: { note: 'E', interval: 'Root', description: 'Root at the top.' }
        }
    },
    'Bm': {
        name: 'B Minor',
        roman: 'vi',
        intervals: ['Root', 'Minor 3rd', 'Perfect 5th'],
        notes_in_chord: ['B', 'D', 'F#'],
        root_note: 'B',
        intro_text: 'The Bm chord has a Root (B), a Minor 3rd (D), and a Perfect 5th (F#). Another barre chord — index finger bars all strings at fret 2.',
        frets: [-1, 2, 4, 4, 3, 2],
        fingers: [1, 1, 3, 4, 2, 1],
        strings: {
            6: { note: null, interval: null, description: 'Muted — don\'t play this string.' },
            5: { note: 'B', interval: 'Root', description: 'Root — this gives the chord its name.' },
            4: { note: 'F#', interval: 'Perfect 5th', description: 'Perfect 5th — adds fullness and stability.' },
            3: { note: 'B', interval: 'Root', description: 'Root – Another root one octave up.' },
            2: { note: 'D', interval: 'Minor 3rd', description: 'Minor 3rd – what makes it sad.' },
            1: { note: 'F#', interval: 'Perfect 5th', description: 'Barred with root note by index finger.' }
        }
    },
'B': {
        name: 'B Major',
        roman: 'V',
        intervals: ['Root', 'Major 3rd', 'Perfect 5th'],
        notes_in_chord: ['B', 'D#', 'F#'],
        root_note: 'B',
        intro_text: 'The B chord has a Root (B), Major 3rd (D#), and Perfect 5th (F#). This is a partial barre chord at fret 2.',
        frets: [-1, 2, 4, 4, 4, -1],
        fingers: [0, 1, 3, 3, 3, 0],
        strings: {
            6: { note: null, interval: null, description: 'Muted — don\'t play this string.' },
            5: { note: 'B', interval: 'Root', description: 'Root — this gives the chord its name.' },
            4: { note: 'F#/Gb', interval: 'Perfect 5th', description: 'Perfect 5th — adds fullness and stability.' },
            3: { note: 'B', interval: 'Root', description: 'Root again, barred with 3rd finger.' },
            2: { note: 'D#/Eb', interval: 'Major 3rd', description: 'Major 3rd — barred with 3rd finger.' },
            1: { note: null, interval: null, description: 'Muted — don\'t play this string.' }
        }
    },
    'F#m': {
        name: 'F# Minor',
        roman: 'vi',
        intervals: ['Root', 'Minor 3rd', 'Perfect 5th'],
        notes_in_chord: ['F#', 'A', 'C#'],
        root_note: 'F',
        intro_text: 'F#m has a Root (F#), Minor 3rd (A), and Perfect 5th (C#). This is a barre chord at fret 2.',
        frets: [2, 4, 4, 2, 2, 2],
        fingers: [1, 3, 4, 1, 1, 1],
        strings: {
            6: { note: 'F#/Gb', interval: 'Root', description: 'Root — barred with your index finger.' },
            5: { note: 'C#/Db', interval: 'Perfect 5th', description: 'Perfect 5th — adds fullness and stability.' },
            4: { note: 'F#/Gb', interval: 'Root', description: 'Root again, one octave higher.' },
            3: { note: 'A', interval: 'Minor 3rd', description: 'Minor 3rd — this gives F#m its emotional quality.' },
            2: { note: 'C#/Db', interval: 'Perfect 5th', description: 'Perfect 5th again.' },
            1: { note: 'F#/Gb', interval: 'Root', description: 'Root at the top.' }
        }
    },
'C#m': {
        name: 'C# Minor',
        roman: 'vi',
        intervals: ['Root', 'Minor 3rd', 'Perfect 5th'],
        notes_in_chord: ['C#', 'E', 'G#'],
        root_note: 'C',
        intro_text: 'C#m has a Root (C#), Minor 3rd (E), and Perfect 5th (G#). Partial barre chord at fret 4.',
        frets: [-1, 4, 6, 6, 5, 4],
        fingers: [0, 1, 3, 4, 2, 1],
        strings: {
            6: { note: null, interval: null, description: 'Muted — don\'t play this string.' },
            5: { note: 'C#/Db', interval: 'Root', description: 'Root — this gives the chord its name.' },
            4: { note: 'G#/Ab', interval: 'Perfect 5th', description: 'Perfect 5th — adds fullness and stability.' },
            3: { note: 'C#/Db', interval: 'Root', description: 'Root again, one octave higher.' },
            2: { note: 'E', interval: 'Minor 3rd', description: 'Minor 3rd — this gives C#m its emotional quality.' },
            1: { note: 'G#/Ab', interval: 'Perfect 5th', description: 'Perfect 5th at the top.' }
        }
    },
    'G2': {
        name: 'G Major',
        roman: 'V',
        intervals: ['Root', 'Major 3rd', 'Perfect 5th'],
        notes_in_chord: ['G', 'B', 'D'],
        root_note: 'G',
        intro_text: 'You already know G! Here it is again as the V chord in the key of C.',
        frets: [3, 2, 0, 0, 0, 3],
        fingers: [2, 1, 0, 0, 0, 3],
        strings: {
            6: { note: 'G', interval: 'Root', description: 'Root — this gives the chord its name.' },
            5: { note: 'B', interval: 'Major 3rd', description: 'Major 3rd — this is what makes it sound happy.' },
            4: { note: 'D', interval: 'Perfect 5th', description: 'Perfect 5th — adds fullness and stability.' },
            3: { note: 'G', interval: 'Root', description: 'Root again, one octave higher.' },
            2: { note: 'B', interval: 'Major 3rd', description: 'Major 3rd again.' },
            1: { note: 'G', interval: 'Root', description: 'Root at the top.' }
        }
    }
};

const KEYS = {
    'G': {
        name: 'Key of G',
        chords: ['G', 'C', 'D', 'Em'],
        description: 'One of the most popular keys in country music.',
        songs: ['Friends in Low Places', 'Take Me Home Country Roads', 'Wagon Wheel', 'Country Roads']
    },
    'C': {
        name: 'Key of C',
        chords: ['C', 'F', 'G2', 'Am'],
        description: 'A natural, comfortable key for both guitar and voice.',
        songs: ['Ring of Fire', 'Jolene', 'The House That Built Me', 'Whiskey Lullaby']
    },
    'D': {
        name: 'Key of D',
        chords: ['D', 'G', 'A', 'Bm'],
        description: 'Bright and resonant — great for fingerpicking.',
        songs: ['Take Me to Church', 'Need You Now', 'Die a Happy Man', 'Dust on the Bottle']
    },
    'A': {
        name: 'Key of A',
        chords: ['A', 'D2', 'E', 'F#m'],
        description: 'Full and powerful — perfect for country rock.',
        songs: ['Boot Scootin Boogie', 'Chicken Fried', 'Strawberry Wine', 'Murder on Music Row']
    },
    'E': {
        name: 'Key of E',
        chords: ['E', 'A', 'B', 'C#m'],
        description: 'Raw and bluesy — a staple of classic country.',
        songs: ['Folsom Prison Blues', 'Honky Tonk Women', 'Move It On Over', 'Hey Good Lookin']
    }
};
