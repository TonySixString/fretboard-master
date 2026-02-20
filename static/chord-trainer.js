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
    },

    // ============================================================
    // KEY OF C CHORD FAMILIES
    // ============================================================

    'C_keyC': {
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
                name: 'C (pinky)',
                fullName: 'C Major (pinky on high E)',
                description: 'Add your pinky to the 3rd fret of the high E string. This gives you a G note on top, adding fullness and making transitions to G and F shapes smoother.',
                whyItWorks: 'It\'s still C, E, and G — the pinky just doubles the G note on the highest string for a fuller sound.',
                frets: [-1, 3, 2, 0, 1, 3],
                fingers: [0, 3, 2, 0, 1, 4],
                noteNames: [null, 'C', 'E', 'G', 'C', 'G']
            }
        ],
        theoryNote: 'The C chord is your home base in the key of C. Every song in this key revolves around this chord. Adding the pinky on the 3rd fret gives you a fuller sound and sets you up for smoother transitions to G and Am.'
    },

    'F_keyC': {
        core: {
            name: 'F',
            fullName: 'F Major (4-string)',
            notes: ['F', 'A', 'C'],
            frets: [-1, -1, 3, 2, 1, 1],
            fingers: [0, 0, 3, 2, 1, 1],
            noteNames: [null, null, 'F', 'A', 'C', 'F'],
            strings: {
                6: { note: null, interval: 'Mute' },
                5: { note: null, interval: 'Mute' },
                4: { note: 'F', interval: 'Root' },
                3: { note: 'A', interval: 'Major 3rd' },
                2: { note: 'C', interval: 'Perfect 5th' },
                1: { note: 'F', interval: 'Root' }
            }
        },
        variations: [
            {
                name: 'Fmaj7',
                fullName: 'Fmaj7 (F Major 7)',
                description: 'Lift your first finger off the high E string and let it ring open. That open E note is the major 7th of F — it gives the chord a smooth, jazzy quality that works beautifully in country ballads.',
                whyItWorks: 'The E note (major 7th) adds warmth without changing the chord\'s function. You\'ll hear this in countless country songs where a standard F feels too heavy.',
                frets: [-1, -1, 3, 2, 1, 0],
                fingers: [0, 0, 3, 2, 1, 0],
                noteNames: [null, null, 'F', 'A', 'C', 'E']
            },
            {
                name: 'Fadd9',
                fullName: 'Fadd9',
                description: 'From the F shape, add your pinky to the 3rd fret of the high E string. This adds a G note — the same trick we used with the C chord. These shared shapes make switching between C and Fadd9 effortless.',
                whyItWorks: 'Adding the 9th (G note) opens up the chord. Notice that G is also in your C and G chords — it\'s another connecting note between all these chords.',
                frets: [-1, -1, 3, 2, 1, 3],
                fingers: [0, 0, 3, 2, 1, 4],
                noteNames: [null, null, 'F', 'A', 'C', 'G']
            },
            {
                name: 'F (barre)',
                fullName: 'F Major (Barre Chord)',
                description: 'This is the full F barre chord. Your first finger bars across all 6 strings at the 1st fret. It\'s harder to play, but it gives you the biggest, fullest F sound with all 6 strings ringing.',
                whyItWorks: 'Same three notes — F, A, C — but now voiced across all 6 strings. This shape is also moveable: slide it up 2 frets and you have a G barre chord.',
                frets: [1, 3, 3, 2, 1, 1],
                fingers: [1, 3, 4, 2, 1, 1],
                noteNames: ['F', 'C', 'F', 'A', 'C', 'F']
            }
        ],
        theoryNote: 'F is the chord that trips up most beginners, but you have options. Fmaj7 removes the barre entirely. Fadd9 adds that shimmery G note we keep seeing. And the full barre chord is there when you\'re ready for it. Use whichever version fits the song — they all work.'
    },

    'G_keyC': {
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
                name: 'G (folk)',
                fullName: 'G Major (folk voicing)',
                description: 'Same chord, just a slight variation on finger placement which can be useful depending on what chord is coming next.',
                whyItWorks: 'Still the same three notes: G, B, and D.',
                frets: [3, 2, 0, 0, 0, 3],
                fingers: [3, 2, 0, 0, 0, 4],
                noteNames: ['G', 'B', 'D', 'G', 'B', 'G']
            },
            {
                name: 'G (var.)',
                fullName: 'G Major (variation)',
                description: 'Same G chord, but skip the A string. This removes the low B note that can muddy things up, giving you a cleaner sound. The pinky on the high E keeps that big G on top.',
                whyItWorks: 'Still all three notes — G, B, and D. You\'re just dropping the lowest B to clean up the bass. The B on the 2nd string still gives you the major 3rd.',
                frets: [3, -1, 0, 0, 0, 3],
                fingers: [3, 0, 0, 0, 0, 4],
                noteNames: ['G', null, 'D', 'G', 'B', 'G']
            },
            {
                name: 'G7',
                fullName: 'G7',
                description: 'Replace the G on the high E string with an F note. This is the dominant 7th — it creates a strong pull back to C. You\'ll hear this at the end of verses and turnarounds in classic country.',
                whyItWorks: 'The F note (flat 7th) adds tension that wants to resolve to C. That\'s why G7 → C is one of the strongest chord movements in music.',
                frets: [3, -1, 0, 0, 0, 1],
                fingers: [3, 0, 0, 0, 0, 1],
                noteNames: ['G', null, 'D', 'G', 'B', 'F']
            },
            {
                name: 'G/B',
                fullName: 'G/B',
                description: 'G with a B note in the bass. This creates a beautiful bass line walkdown: C (C bass) → G/B (B bass) → Am (A bass). You\'ll hear this move in countless country and folk songs.',
                whyItWorks: 'The B bass note creates stepwise motion between C and Am. Walking bass lines like C → G/B → Am make simple progressions sound professional.',
                frets: [-1, 2, 0, 0, 0, 3],
                fingers: [0, 2, 0, 0, 0, 4],
                noteNames: [null, 'B', 'D', 'G', 'B', 'G']
            }
        ],
        theoryNote: 'You already know G from the Key of G module, but here it plays a different role — it\'s the V chord, the one that creates tension and pulls you back to C. The G7 makes that pull even stronger with the added F note. And G/B gives you a walking bass line that connects C to Am beautifully.'
    },

    'Am_keyC': {
        core: {
            name: 'Am',
            fullName: 'A Minor',
            notes: ['A', 'C', 'E'],
            frets: [-1, 0, 2, 2, 1, 0],
            fingers: [0, 0, 2, 3, 1, 0],
            noteNames: [null, 'A', 'E', 'A', 'C', 'E'],
            strings: {
                6: { note: null, interval: 'Mute' },
                5: { note: 'A', interval: 'Root' },
                4: { note: 'E', interval: 'Perfect 5th' },
                3: { note: 'A', interval: 'Root' },
                2: { note: 'C', interval: 'Minor 3rd' },
                1: { note: 'E', interval: 'Perfect 5th' }
            }
        },
        variations: [
            {
                name: 'Am7',
                fullName: 'Am7 (A Minor 7)',
                description: 'Add your pinky to the 3rd fret of the high E string. This adds a G note — the minor 7th. Notice how similar this feels to the C (pinky) voicing? That shared pinky position makes switching between C and Am7 almost effortless.',
                whyItWorks: 'The G note (minor 7th) softens the minor chord and connects it to C and G, which both contain that same G note. It\'s the glue note of the key of C.',
                frets: [-1, 0, 2, 2, 1, 3],
                fingers: [0, 0, 2, 3, 1, 4],
                noteNames: [null, 'A', 'E', 'A', 'C', 'G']
            }
        ],
        theoryNote: 'Am is the relative minor of C — they share two out of three notes (C and E). That\'s why Am and C sound so natural together. Adding the G note to make Am7 connects it even further to the other chords in this key.'
    },

    // ============================================================
    // KEY OF D CHORD FAMILIES
    // ============================================================

    'D_keyD': {
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
                fullName: 'Dsus2',
                description: 'Lift your finger off the high E string and let it ring open. That E note replaces the F# and gives the chord a bright, airy quality. You\'ll hear this everywhere in country and pop.',
                whyItWorks: 'The E note (the 2nd) replaces the F# (3rd), creating an open, unresolved sound that\'s neither major nor minor.',
                frets: [-1, -1, 0, 2, 3, 0],
                fingers: [0, 0, 0, 1, 3, 0],
                noteNames: [null, null, 'D', 'A', 'D', 'E']
            },
            {
                name: 'Dsus4',
                fullName: 'Dsus4',
                description: 'Add your pinky to the 3rd fret of the high E. This G note creates tension that wants to resolve back to the regular D. Players often alternate D → Dsus4 → D for a classic embellishment.',
                whyItWorks: 'The G note (4th) replaces the F# (3rd), creating tension. Releasing the pinky back to D gives a satisfying resolution.',
                frets: [-1, -1, 0, 2, 3, 3],
                fingers: [0, 0, 0, 1, 3, 4],
                noteNames: [null, null, 'D', 'A', 'D', 'G']
            },
            {
                name: 'D/F#',
                fullName: 'D/F#',
                description: 'D with an F# in the bass. Wrap your thumb over the top of the neck to fret the low E string at the 2nd fret. This creates a smooth bass walkup from D to G: D/F# (F# bass) → G (G bass).',
                whyItWorks: 'The F# bass note creates stepwise motion up to G. The walkup D → D/F# → G is one of the most common moves in country music.',
                frets: [2, 0, 0, 2, 3, -1],
                fingers: [1, 0, 0, 2, 3, 0],
                noteNames: ['F#', 'A', 'D', 'A', 'D', null]
            }
        ],
        theoryNote: 'D, Dsus2, and Dsus4 are the same chord with one note changing. The F# (3rd) moves to E (2nd) for Dsus2, or up to G (4th) for Dsus4. Players cycle through all three to add movement. D/F# gives you a walking bass line up to G.'
    },

    'G_keyD': {
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
                description: 'Add your pinky to the 3rd fret of the high E string. This is the most common way country players voice a G — it keeps the G note ringing on both the top and bottom strings.',
                whyItWorks: 'It\'s still G, B, and D — just with a stronger G note on top.',
                frets: [3, 2, 0, 0, 3, 3],
                fingers: [2, 1, 0, 0, 3, 4],
                noteNames: ['G', 'B', 'D', 'G', 'D', 'G']
            },
            {
                name: 'G (var.)',
                fullName: 'G Major (variation)',
                description: 'Same G chord, but skip the A string. This removes the low B note that can muddy things up, giving you a cleaner sound.',
                whyItWorks: 'Still all three notes — G, B, and D. You\'re just dropping the lowest B to clean up the bass. All the G variations you learned in the Key of G and Key of C modules are fair game here too!',
                frets: [3, -1, 0, 0, 0, 3],
                fingers: [3, 0, 0, 0, 0, 4],
                noteNames: ['G', null, 'D', 'G', 'B', 'G']
            }
        ],
        theoryNote: 'G is the IV chord in the key of D — the same warm, grounding role that C plays in the key of G. You\'ve already learned several G voicings in previous modules. They all work here. Use whichever fits the song and makes the transitions smoothest.'
    },

    'A_keyD': {
        core: {
            name: 'A',
            fullName: 'A Major',
            notes: ['A', 'C#', 'E'],
            frets: [-1, 0, 2, 2, 2, 0],
            fingers: [0, 0, 0, 1, 2, 3],
            noteNames: [null, 'A', 'E', 'A', 'C#', 'E'],
            strings: {
                6: { note: null, interval: 'Mute' },
                5: { note: 'A', interval: 'Root' },
                4: { note: 'E', interval: 'Perfect 5th' },
                3: { note: 'A', interval: 'Root' },
                2: { note: 'C#', interval: 'Major 3rd' },
                1: { note: 'E', interval: 'Perfect 5th' }
            }
        },
        variations: [
            {
                name: 'A7',
                fullName: 'A7',
                description: 'Lift your finger off the G string and let it ring open. That G note is the flat 7th of A, giving it a bluesy, dominant sound. A7 creates a strong pull back to D — just like G7 pulls to C.',
                whyItWorks: 'The G note (flat 7th) adds tension that resolves to D. A7 → D is the classic V7 → I turnaround.',
                frets: [-1, 0, 2, 0, 2, 0],
                fingers: [0, 0, 2, 0, 3, 0],
                noteNames: [null, 'A', 'E', 'G', 'C#', 'E']
            },
            {
                name: 'Aadd9',
                fullName: 'Aadd9 (A2)',
                description: 'Open up the B and high E strings. The B note is the 9th (same as the 2nd), adding shimmer just like Dsus2 does for D. A clean, modern sound.',
                whyItWorks: 'Adding the 9th (B note) opens up the chord. That B note also appears in your G and Bm chords, connecting everything in the key.',
                frets: [-1, 0, 2, 2, 0, 0],
                fingers: [0, 0, 1, 2, 0, 0],
                noteNames: [null, 'A', 'E', 'A', 'B', 'E']
            },
            {
                name: 'Asus4',
                fullName: 'Asus4',
                description: 'Add a D note on the B string. Just like Dsus4, this creates tension that wants to resolve back to A. Players often go A → Asus4 → A as an embellishment.',
                whyItWorks: 'The D note (4th) replaces the C# (3rd), creating the same kind of tension you hear in Dsus4. Release it back to A for a satisfying resolution.',
                frets: [-1, 0, 2, 2, 3, 0],
                fingers: [0, 0, 1, 2, 3, 0],
                noteNames: [null, 'A', 'E', 'A', 'D', 'E']
            },
            {
                name: 'A (barre)',
                fullName: 'A Major (Barre)',
                description: 'Bar your index finger across the 2nd fret on the D, G, and B strings. This compact shape is easy to slide and sets you up for the D/F# → G walkup.',
                whyItWorks: 'Same three notes — A, C#, E — in a tighter voicing. This shape is also moveable up the neck.',
                frets: [-1, 0, 2, 2, 2, -1],
                fingers: [0, 0, 1, 1, 1, 0],
                noteNames: [null, 'A', 'E', 'A', 'C#', null]
            },
            {
                name: 'A/C#',
                fullName: 'A/C#',
                description: 'A with a C# in the bass. The index finger bars the 2nd fret and you add your pinky on the 4th fret of the A string. Creates a bass walkup from A to D: A/C# (C# bass) → D (D bass).',
                whyItWorks: 'The C# bass note creates a smooth half-step walk up to D. The movement A → A/C# → D mirrors D → D/F# → G.',
                frets: [-1, 4, 2, 2, 2, -1],
                fingers: [0, 3, 1, 1, 1, 0],
                noteNames: [null, 'C#', 'E', 'A', 'C#', null]
            }
        ],
        theoryNote: 'A is your V chord — the one that drives everything back to D. A7 makes that pull even stronger. The sus4 and add9 variations give you the same movement tricks you learned with D. And the slash chords (A/C# and D/F#) give you walking bass lines that make simple progressions sound incredible.'
    },

    'Bm_keyD': {
        core: {
            name: 'Bm',
            fullName: 'B Minor',
            notes: ['B', 'D', 'F#'],
            frets: [-1, 2, 4, 4, 3, 2],
            fingers: [0, 1, 3, 4, 2, 1],
            noteNames: [null, 'B', 'F#', 'B', 'D', 'F#'],
            strings: {
                6: { note: null, interval: 'Mute' },
                5: { note: 'B', interval: 'Root' },
                4: { note: 'F#', interval: 'Perfect 5th' },
                3: { note: 'B', interval: 'Root' },
                2: { note: 'D', interval: 'Minor 3rd' },
                1: { note: 'F#', interval: 'Perfect 5th' }
            }
        },
        variations: [
            {
                name: 'Bm7',
                fullName: 'Bm7',
                description: 'A much easier voicing than the full Bm barre chord. This uses just 3 fingers and sounds great in most situations where you\'d play Bm.',
                whyItWorks: 'Adding the A note (minor 7th) softens the chord. The open strings make it easier to play and give it a more open sound.',
                frets: [-1, 2, 0, 2, 3, -1],
                fingers: [0, 1, 0, 2, 3, 0],
                noteNames: [null, 'B', 'D', 'A', 'D', null]
            },
            {
                name: 'Bm(sus4)',
                fullName: 'Bm(sus4)',
                description: 'A full barre chord voicing with an E note replacing the F#. This suspended sound adds drama and works beautifully before resolving to Bm or moving to G.',
                whyItWorks: 'The E note (4th) replaces the F# (5th), creating tension just like Dsus4 and Asus4. It\'s the same trick applied to a minor chord.',
                frets: [-1, 2, 4, 4, 3, 0],
                fingers: [0, 1, 3, 4, 2, 0],
                noteNames: [null, 'B', 'F#', 'B', 'D', 'E']
            }
        ],
        theoryNote: 'Bm is the vi chord — the emotional minor chord of the key. The full barre shape can be tough for beginners, so Bm7 is your go-to alternative. It works in almost every song that calls for Bm and sounds great.'
    }
};

// ============================================================
// DRILL PROGRESSIONS
// ============================================================

const DRILL_PROGRESSIONS = {
    'G': [
        {
            id: 'drill-d-variations',
            title: 'D Chord Variations',
            subtitle: 'Now watch how some of these variations work together.',
            insight: 'Notice that only one note is changing each time.',
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
            getChordData: function() {
                return [
                    CHORD_FAMILIES['G'].variations[0],      // G (alt)
                    CHORD_FAMILIES['Cadd9'].variations[0],   // Cadd9
                    CHORD_FAMILIES['Em7'].variations[0],     // Em7
                    CHORD_FAMILIES['Dsus2'].variations[1]    // Dsus4
                ];
            }
        }
    ],
    'C': [
        {
            id: 'drill-c-walkdown',
            title: 'The Pinky Progression',
            subtitle: 'See how one finger position connects all these chords.',
            insight: 'Your pinky stays on the 3rd fret of the high E string through this whole progression. Only the lower fingers change!',
            getChordData: function() {
                return [
                    CHORD_FAMILIES['C_keyC'].variations[0],   // C (pinky)
                    CHORD_FAMILIES['G_keyC'].variations[1],    // G (var.)
                    CHORD_FAMILIES['Am_keyC'].variations[0],   // Am7
                    CHORD_FAMILIES['F_keyC'].variations[1]     // Fadd9
                ];
            }
        },
        {
            id: 'drill-c-classic',
            title: 'Classic Country Turnaround',
            subtitle: 'This is one of the most common moves in classic country.',
            insight: 'Listen to how the Fmaj7 softens the transition, and the G7 pulls you right back to C.',
            getChordData: function() {
                return [
                    CHORD_FAMILIES['C_keyC'].core,            // C
                    CHORD_FAMILIES['F_keyC'].variations[0],    // Fmaj7
                    CHORD_FAMILIES['C_keyC'].core,            // C
                    CHORD_FAMILIES['G_keyC'].variations[2]     // G7
                ];
            }
        }
    ],
    'D': [
        {
            id: 'drill-d-walkup',
            title: 'The Bass Walkup',
            subtitle: 'One of the most iconic moves in country music.',
            insight: 'Listen to the bass notes walk up: D → F# → G → A. Each chord\'s bass note steps up to the next!',
            getChordData: function() {
                return [
                    CHORD_FAMILIES['D_keyD'].core,              // D
                    CHORD_FAMILIES['D_keyD'].variations[2],     // D/F#
                    CHORD_FAMILIES['G_keyD'].variations[0],     // G (alt)
                    CHORD_FAMILIES['A_keyD'].variations[3]      // A (barre)
                ];
            }
        },
        {
            id: 'drill-d-mellow',
            title: 'The Mellow Progression',
            subtitle: 'A softer, more emotional version of the classic D progression.',
            insight: 'Notice how Bm7 and A7 soften the sound compared to full Bm and A. These easier voicings sound just as good.',
            getChordData: function() {
                return [
                    CHORD_FAMILIES['D_keyD'].core,              // D
                    CHORD_FAMILIES['Bm_keyD'].variations[0],    // Bm7
                    CHORD_FAMILIES['G_keyD'].variations[0],     // G (alt)
                    CHORD_FAMILIES['A_keyD'].variations[0]      // A7
                ];
            }
        }
    ]
};

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
    },
    'C': {
        questions: [
            { play: 'C', lookupKey: 'C_core', options: ['C', 'Am'], hint: 'C sounds warm and resolved. Am has that minor, melancholy quality.' },
            { play: 'Am', lookupKey: 'Am_core', options: ['Am', 'F'], hint: 'Am is darker and sadder. F has more warmth to it.' },
            { play: 'F', lookupKey: 'F_core', options: ['F', 'C'], hint: 'F has a compact, mid-range sound. C is more open with deeper bass.' },
            { play: 'G', lookupKey: 'G_coreC', options: ['G', 'F'], hint: 'G uses all 6 strings and sounds big. F only uses 4 strings.' },
            { play: 'C', lookupKey: 'C_core', options: ['C', 'G'], hint: 'C feels like home — relaxed and settled. G feels like it wants to go somewhere.' },
            { play: 'Am', lookupKey: 'Am_core', options: ['Am', 'C'], hint: 'Am and C share two notes, but Am has that minor sadness. C sounds happy.' },
            { play: 'Fmaj7', lookupKey: 'Fmaj7', options: ['F', 'Fmaj7'], hint: 'Fmaj7 has a smooth, open quality from the open high E. Standard F sounds tighter.' },
            { play: 'Am7', lookupKey: 'Am7', options: ['Am', 'Am7'], hint: 'Am7 has an extra shimmer from the G note on top. Am is darker and more closed.' },
            { play: 'G7', lookupKey: 'G7', options: ['G', 'G7'], hint: 'G7 has a bluesy tension that pulls toward C. Standard G sounds more stable.' },
            { play: 'Fadd9', lookupKey: 'Fadd9', options: ['F', 'Fadd9'], hint: 'Fadd9 has that bright G note ringing on top. Standard F is more compact.' }
        ]
    },
    'D': {
        questions: [
            { play: 'D', lookupKey: 'D_coreD', options: ['D', 'G'], hint: 'D only uses 4 strings and sounds bright. G uses all 6 and sounds fuller.' },
            { play: 'G', lookupKey: 'G_coreD', options: ['G', 'A'], hint: 'G has that big low end. A is more mid-range and compact.' },
            { play: 'A', lookupKey: 'A_coreD', options: ['A', 'D'], hint: 'A has a tighter, punchier sound. D is brighter and more open on top.' },
            { play: 'Bm', lookupKey: 'Bm_coreD', options: ['Bm', 'D'], hint: 'Bm sounds dark and moody. D sounds bright and happy.' },
            { play: 'D', lookupKey: 'D_coreD', options: ['D', 'Bm'], hint: 'D is major — bright and resolved. Bm is minor — darker and sadder.' },
            { play: 'A', lookupKey: 'A_coreD', options: ['A', 'G'], hint: 'A has an urgent, driving quality. G feels warmer and more grounded.' },
            { play: 'Dsus2', lookupKey: 'Dsus2_D', options: ['D', 'Dsus2'], hint: 'Dsus2 has a bright, airy openness. Standard D sounds more defined.' },
            { play: 'Dsus4', lookupKey: 'Dsus4_D', options: ['D', 'Dsus4'], hint: 'Dsus4 has tension that wants to resolve. D sounds settled.' },
            { play: 'A7', lookupKey: 'A7_D', options: ['A', 'A7'], hint: 'A7 has a bluesy edge from the open G string. Standard A sounds cleaner.' },
            { play: 'Bm7', lookupKey: 'Bm7_D', options: ['Bm', 'Bm7'], hint: 'Bm7 sounds softer and more open. Full Bm is darker and tighter.' }
        ]
    }
};

const EAR_CHORD_LOOKUP = {
    // Key of G
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
    'G (no 3rd)': CHORD_FAMILIES['G'].variations[2],
    // Key of C
    'C_core': CHORD_FAMILIES['C_keyC'].core,
    'C (pinky)': CHORD_FAMILIES['C_keyC'].variations[0],
    'F_core': CHORD_FAMILIES['F_keyC'].core,
    'Fmaj7': CHORD_FAMILIES['F_keyC'].variations[0],
    'Fadd9': CHORD_FAMILIES['F_keyC'].variations[1],
    'F (barre)': CHORD_FAMILIES['F_keyC'].variations[2],
    'G_coreC': CHORD_FAMILIES['G_keyC'].core,
    'G (folk) C': CHORD_FAMILIES['G_keyC'].variations[0],
    'G (var.)': CHORD_FAMILIES['G_keyC'].variations[1],
    'G7': CHORD_FAMILIES['G_keyC'].variations[2],
    'G/B': CHORD_FAMILIES['G_keyC'].variations[3],
    'Am_core': CHORD_FAMILIES['Am_keyC'].core,
    'Am7': CHORD_FAMILIES['Am_keyC'].variations[0],
    // Key of D
    'D_coreD': CHORD_FAMILIES['D_keyD'].core,
    'Dsus2_D': CHORD_FAMILIES['D_keyD'].variations[0],
    'Dsus4_D': CHORD_FAMILIES['D_keyD'].variations[1],
    'D/F#': CHORD_FAMILIES['D_keyD'].variations[2],
    'G_coreD': CHORD_FAMILIES['G_keyD'].core,
    'G (alt) D': CHORD_FAMILIES['G_keyD'].variations[0],
    'G (var.) D': CHORD_FAMILIES['G_keyD'].variations[1],
    'A_coreD': CHORD_FAMILIES['A_keyD'].core,
    'A7_D': CHORD_FAMILIES['A_keyD'].variations[0],
    'Aadd9': CHORD_FAMILIES['A_keyD'].variations[1],
    'Asus4': CHORD_FAMILIES['A_keyD'].variations[2],
    'A (barre)': CHORD_FAMILIES['A_keyD'].variations[3],
    'A/C#': CHORD_FAMILIES['A_keyD'].variations[4],
    'Bm_coreD': CHORD_FAMILIES['Bm_keyD'].core,
    'Bm7_D': CHORD_FAMILIES['Bm_keyD'].variations[0],
    'Bm(sus4)': CHORD_FAMILIES['Bm_keyD'].variations[1]
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
        capoNote: 'With a capo, these same 4 chord shapes can play songs in ANY key. That\'s why the capo is every country guitarist\'s best friend.',
        videoUrl: 'https://www.sixstringcountry.com/lessons/chords:-key-of-g'
    },
    'C': {
        name: 'Key of C',
        subtitle: 'Open chords at their finest',
        chordFamilies: ['C_keyC', 'F_keyC', 'G_keyC', 'Am_keyC'],
        romanNumerals: { 'C_keyC': 'I', 'F_keyC': 'IV', 'G_keyC': 'V', 'Am_keyC': 'vi' },
        description: 'The key of C is where you\'ll learn to conquer the F chord, discover walking bass lines, and see how a pinky on the 3rd fret connects almost every chord in the key.',
        songs: [
            { title: 'You Never Even Called Me By My Name', artist: 'David Allan Coe', chords: 'C - G - F', url: 'https://www.sixstringcountry.com/lessons/you-never-even-called-me-by-my-name' },
            { title: 'Have You Ever Seen the Rain', artist: 'Creedence Clearwater Revival', chords: 'C - G - F - Am', url: 'https://www.sixstringcountry.com/lessons/4-easy-guitar-songs-in-c-with-tabscroll' },
            { title: 'A Thousand Miles from Nowhere', artist: 'Dwight Yoakam', chords: 'C - Am - F - G', url: 'https://www.sixstringcountry.com/lessons/4-easy-guitar-songs-in-c-with-tabscroll' },
            { title: 'I Love A Rainy Night', artist: 'Eddie Rabbitt', chords: 'C - G - Am - F', url: 'https://www.sixstringcountry.com/lessons/4-easy-guitar-songs-in-c-with-tabscroll' },
            { title: 'Simple Man', artist: 'Lynyrd Skynyrd', chords: 'C - G - Am', url: 'https://www.sixstringcountry.com/lessons/4-easy-guitar-songs-in-c-with-tabscroll' },
            { title: 'Need You Now', artist: 'Lady A', chords: 'C - F - Am - G - Em', url: 'https://www.sixstringcountry.com/lessons/need-you-now' },
            { title: 'It\'s Five O\'Clock Somewhere', artist: 'Alan Jackson & Jimmy Buffett', chords: 'C - G - F - Am', url: 'https://www.sixstringcountry.com/lessons/its-five-oclock-somewhere.2300022' },
            { title: 'Hey Good Lookin\'', artist: 'Hank Williams', chords: 'C - D7 - G7 - F', url: 'https://www.sixstringcountry.com/lessons/hey-good-lookin\'' },
            { title: 'Some Beach', artist: 'Blake Shelton', chords: 'C - G - F', url: 'https://www.sixstringcountry.com/lessons/some-beach.2176313' },
            { title: 'Chattahoochee', artist: 'Alan Jackson', chords: 'C - G - F', url: 'https://www.sixstringcountry.com/lessons/chattahoochee.966073' }
        ],
        capoNote: 'With a capo, these same 4 chord shapes can play songs in ANY key. That\'s why the capo is every country guitarist\'s best friend.',
        videoUrl: 'https://www.sixstringcountry.com/lessons/chords:-key-of-c'
    },
    'D': {
        name: 'Key of D',
        subtitle: 'Walking bass lines and slash chords',
        chordFamilies: ['D_keyD', 'G_keyD', 'A_keyD', 'Bm_keyD'],
        romanNumerals: { 'D_keyD': 'I', 'G_keyD': 'IV', 'A_keyD': 'V', 'Bm_keyD': 'vi' },
        description: 'The key of D is where you\'ll learn slash chords, walking bass lines, and tackle the Bm barre chord (plus easier alternatives). You\'ll also discover how sus2 and sus4 variations work on both D and A.',
        songs: [
            { title: 'Copperhead Road', artist: 'Steve Earle', chords: 'D - G', url: 'https://www.sixstringcountry.com/lessons/3-easy-country-songs-in-d-with-tabscroll' },
            { title: 'Fishin\' in the Dark', artist: 'Nitty Gritty Dirt Band', chords: 'D - G - Em - A', url: 'https://www.sixstringcountry.com/lessons/3-easy-country-songs-in-d-with-tabscroll' },
            { title: 'A Woman\'s Love', artist: 'Alan Jackson', chords: 'D - Em - G - A', url: 'https://www.sixstringcountry.com/lessons/3-easy-country-songs-in-d-with-tabscroll' },
            { title: 'Lettin\' the Night Roll', artist: 'Justin Moore', chords: 'D - G - A - Bm', url: 'https://www.sixstringcountry.com/lessons/lettin\'-the-night-roll' },
            { title: 'Lonesome, On\'ry and Mean', artist: 'Waylon Jennings', chords: 'D - C - G', url: 'https://www.sixstringcountry.com/lessons/lonesome-onry-and-mean.3002956' },
            { title: 'A Better Man', artist: 'Clint Black', chords: 'D - Em - G - A', url: 'https://www.sixstringcountry.com/lessons/a-better-man.2840516' },
            { title: 'I\'ll Name the Dogs', artist: 'Blake Shelton', chords: 'D - G - Em', url: 'https://www.sixstringcountry.com/lessons/i\'ll-name-the-dogs' },
            { title: 'Blue Eyes Cryin\' in the Rain', artist: 'Willie Nelson', chords: 'D - G - A7', url: 'https://www.sixstringcountry.com/lessons/blue-eyes-cryin-in-the-rain.2477557' },
            { title: 'How Long Gone', artist: 'Brooks & Dunn', chords: 'D - G - A - Em - Bm', url: 'https://www.sixstringcountry.com/lessons/how-long-gone.3441670' },
            { title: 'Like A Cowboy', artist: 'Parker McCollum', chords: 'D - Bm - G - A', url: 'https://www.sixstringcountry.com/lessons/like-a-cowboy---parker-mccollum' }
        ],
        capoNote: 'With a capo, these same 4 chord shapes can play songs in ANY key. That\'s why the capo is every country guitarist\'s best friend.',
        videoUrl: 'https://www.sixstringcountry.com/lessons/chords:-key-of-d'
    }
};

const STANDARD_TUNING = {
    6: 82.41, 5: 110.00, 4: 146.83,
    3: 196.00, 2: 246.94, 1: 329.63
};
