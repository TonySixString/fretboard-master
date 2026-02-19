// ========================================
// STATE MANAGEMENT
// ========================================

let progress = loadProgress();
let currentLevel = null;
let currentChallenge = null;
let prepTime = 7;
let isPlaying = false;
let countdownInterval = null;
let autoNextTimeout = null;

// Quiz state
let quizQuestions = [];
let quizCurrentIndex = 0;
let quizScores = { frets05: 0, frets612: 0 };

// Level learning state
let levelPhase = 'intro';
let learningNotes = [];
let learningIndex = 0;
let quizCorrect = 0;
let quizTotal = 0;

// Free play state
let freePlayStreak = 0;
let freePlayActive = false;
let freePlayLongestStreak = 0;
let freePlaySessionPoints = 0;
let freePlaySessionAttempts = 0;

// Level definitions
const LEVELS = [
    { id: 1, string: 1, minFret: 0, maxFret: 5, name: 'String 1', group: 'Frets 0-5' },
    { id: 2, string: 2, minFret: 0, maxFret: 5, name: 'String 2', group: 'Frets 0-5' },
    { id: 3, string: 3, minFret: 0, maxFret: 5, name: 'String 3', group: 'Frets 0-5' },
    { id: 4, string: 4, minFret: 0, maxFret: 5, name: 'String 4', group: 'Frets 0-5' },
    { id: 5, string: 5, minFret: 0, maxFret: 5, name: 'String 5', group: 'Frets 0-5' },
    { id: 6, string: 6, minFret: 0, maxFret: 5, name: 'String 6', group: 'Frets 0-5' },
    { id: 7, string: 1, minFret: 6, maxFret: 12, name: 'String 1', group: 'Frets 6-12' },
    { id: 8, string: 2, minFret: 6, maxFret: 12, name: 'String 2', group: 'Frets 6-12' },
    { id: 9, string: 3, minFret: 6, maxFret: 12, name: 'String 3', group: 'Frets 6-12' },
    { id: 10, string: 4, minFret: 6, maxFret: 12, name: 'String 4', group: 'Frets 6-12' },
    { id: 11, string: 5, minFret: 6, maxFret: 12, name: 'String 5', group: 'Frets 6-12' },
    { id: 12, string: 6, minFret: 6, maxFret: 12, name: 'String 6', group: 'Frets 6-12' }
];

const NOTE_NAMES = ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B'];
const STANDARD_TUNING = {6: 82.41, 5: 110.00, 4: 146.83, 3: 196.00, 2: 246.94, 1: 329.63};

function freqToNoteName(freq) {
    const midiNote = 69 + 12 * Math.log2(freq / 440.0);
    const noteIndex = Math.round(midiNote) % 12;
    return NOTE_NAMES[noteIndex];
}

function calculateFretFreq(stringNum, fret) {
    return STANDARD_TUNING[stringNum] * Math.pow(2, fret / 12);
}

function getSkillLevel(points) {
    if (points < 420) return 'Learning';
    if (points < 840) return 'Apprentice';
    return 'Mastery';
}

function getSkillProgress(points) {
    if (points < 420) return `${points}/420 to Apprentice`;
    if (points < 840) return `${points}/840 to Mastery`;
    return `${points}+ points`;
}

// ========================================
// FRETBOARD DIAGRAM
// ========================================

function drawStringDiagram(svgId, stringNum, minFret, maxFret) {
    const svg = document.getElementById(svgId);
    if (!svg) return;
    
    svg.innerHTML = '';
    
    const fretCount = maxFret - minFret;
    const width = 380;
    const height = 240;
    const startX = 60;
    const startY = 35;
    const fretHeight = (height - startY - 50) / fretCount;
    const stringSpacing = (width - startX - 50) / 5;
    
    svg.setAttribute('width', width);
    svg.setAttribute('height', height);
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    
    const stringNames = ['E', 'A', 'D', 'G', 'B', 'E'];
    
    // Draw string labels on top
    for (let i = 0; i < 6; i++) {
        const x = startX + (i * stringSpacing);
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', x);
        text.setAttribute('y', startY - 12);
        text.setAttribute('fill', i === (6 - stringNum) ? '#e8572a' : 'rgba(255,255,255,0.4)');
        text.setAttribute('font-size', '13');
        text.setAttribute('font-weight', i === (6 - stringNum) ? 'bold' : 'normal');
        text.setAttribute('text-anchor', 'middle');
        text.textContent = stringNames[i];
        svg.appendChild(text);
    }
    
    // Draw all 6 strings (vertical lines)
    for (let i = 0; i < 6; i++) {
        const x = startX + (i * stringSpacing);
        const isActive = i === (6 - stringNum);
        
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', x);
        line.setAttribute('y1', startY);
        line.setAttribute('x2', x);
        line.setAttribute('y2', startY + (fretCount * fretHeight));
        line.setAttribute('stroke', isActive ? 'rgba(232,87,42,0.4)' : 'rgba(255,255,255,0.15)');
        line.setAttribute('stroke-width', isActive ? '2' : '1');
        svg.appendChild(line);
    }
    
    // Draw frets (horizontal lines) and notes on active string
    for (let i = 0; i <= fretCount; i++) {
        const fret = minFret + i;
        const y = startY + (i * fretHeight);
        
        // Fret line
        const fretLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        fretLine.setAttribute('x1', startX);
        fretLine.setAttribute('y1', y);
        fretLine.setAttribute('x2', startX + (5 * stringSpacing));
        fretLine.setAttribute('y2', y);
        fretLine.setAttribute('stroke', 'rgba(255,255,255,0.3)');
        fretLine.setAttribute('stroke-width', i === 0 ? '4' : '2');
        svg.appendChild(fretLine);
        
        // Draw note dot on active string only
        const activeStringX = startX + ((6 - stringNum) * stringSpacing);
        const freq = calculateFretFreq(stringNum, fret);
        const noteName = freqToNoteName(freq);
        
        // Position dot between frets (or above nut for open string)
        const dotY = i === 0 ? y - 18 : y - (fretHeight / 2);
        
        // Larger circles for better fit
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', activeStringX);
        circle.setAttribute('cy', dotY);
        circle.setAttribute('r', '17');
        circle.setAttribute('fill', '#e8572a');
        svg.appendChild(circle);
        
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', activeStringX);
        text.setAttribute('y', dotY + 5);
        text.setAttribute('fill', 'white');
        text.setAttribute('font-size', '12');
        text.setAttribute('font-weight', 'bold');
        text.setAttribute('text-anchor', 'middle');
        text.textContent = noteName;
        svg.appendChild(text);
        
        // Fret number label on left side
        if (i < fretCount) {
            const fretLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            fretLabel.setAttribute('x', startX - 25);
            fretLabel.setAttribute('y', y + (fretHeight / 2) + 5);
            fretLabel.setAttribute('fill', 'rgba(255,255,255,0.5)');
            fretLabel.setAttribute('font-size', '12');
            fretLabel.setAttribute('text-anchor', 'middle');
            fretLabel.textContent = fret + 1;
            svg.appendChild(fretLabel);
        }
    }
    
    // Add "Open" label for fret 0
    if (minFret === 0) {
        const openLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        openLabel.setAttribute('x', startX - 25);
        openLabel.setAttribute('y', startY - 10);
        openLabel.setAttribute('fill', 'rgba(255,255,255,0.5)');
        openLabel.setAttribute('font-size', '11');
        openLabel.setAttribute('text-anchor', 'middle');
        openLabel.textContent = 'Open';
        svg.appendChild(openLabel);
    }
}

// ========================================
// STORAGE
// ========================================

function loadProgress() {
    const saved = localStorage.getItem('fretboardProgress');
    if (saved) {
        return JSON.parse(saved);
    }
    return {
        totalPoints: 0,
        levels: {}
    };
}

function saveProgress() {
    localStorage.setItem('fretboardProgress', JSON.stringify(progress));
    updateDashboard();
}

function getLevelProgress(levelId) {
    return progress.levels[levelId] || { points: 0, completed: false };
}

function addPoints(points) {
    progress.totalPoints += points;
    saveProgress();
}

function addLevelPoints(levelId, points) {
    if (!progress.levels[levelId]) {
        progress.levels[levelId] = { points: 0, completed: false };
    }
    progress.levels[levelId].points += points;
    saveProgress();
}

function completeLevel(levelId) {
    if (!progress.levels[levelId]) {
        progress.levels[levelId] = { points: 0, completed: false };
    }
    progress.levels[levelId].completed = true;
    saveProgress();
}

// ========================================
// SCREEN NAVIGATION
// ========================================

function showScreen(screenId) {
    const screens = ['screen-mode-select', 'screen-dashboard', 'screen-quiz', 'screen-quiz-results', 
                     'screen-level', 'screen-level-intro', 'screen-level-complete', 'screen-freeplay'];
    screens.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
    });
    const target = document.getElementById(screenId);
    if (target) target.classList.remove('hidden');
    
    if (screenId === 'screen-dashboard') {
        updateDashboard();
    }
    
    if (screenId === 'screen-mode-select') {
        const badge = document.getElementById('menuPointsBadge');
        if (badge && progress.totalPoints > 0) {
            badge.textContent = `⭐ ${progress.totalPoints} pts • ${getSkillLevel(progress.totalPoints)}`;
        }
    }
}

function updateDashboard() {
    document.getElementById('totalPoints').textContent = progress.totalPoints;
    document.getElementById('skillLevel').textContent = getSkillLevel(progress.totalPoints);
    document.getElementById('skillProgress').textContent = getSkillProgress(progress.totalPoints);
    
    const grid1 = document.getElementById('levelGrid1');
    const grid2 = document.getElementById('levelGrid2');
    
    grid1.innerHTML = '';
    grid2.innerHTML = '';
    
    LEVELS.forEach(level => {
        const prog = getLevelProgress(level.id);
        const isUnlocked = level.id === 1 || getLevelProgress(level.id - 1).completed || getLevelProgress(level.id).points > 0 || getLevelProgress(level.id).visited;
        
        const card = document.createElement('div');
        card.className = 'level-card';
        if (!isUnlocked) card.classList.add('locked');
        if (prog.completed) card.classList.add('completed');
        if (prog.points > 0 && !prog.completed) card.classList.add('current');
        
        card.innerHTML = `
            <div class="level-number">Level ${level.id}</div>
            <div class="level-desc">${level.name}</div>
            ${prog.points > 0 ? `<div class="level-score">${prog.points}</div>` : ''}
        `;
        
        if (isUnlocked) {
            card.onclick = () => startLevel(level.id);
        }
        
        if (level.id <= 6) {
            grid1.appendChild(card);
        } else {
            grid2.appendChild(card);
        }
    });
}

// ========================================
// MODE SELECTION
// ========================================

function startLearning() {
    showScreen('screen-dashboard');
}

function startPlacementQuiz() {
    quizQuestions = [];
    quizCurrentIndex = 0;
    quizScores = { frets05: 0, frets612: 0 };
    
    for (let i = 0; i < 5; i++) {
        quizQuestions.push({
            string: Math.floor(Math.random() * 6) + 1,
            minFret: 0,
            maxFret: 5,
            group: 'frets05'
        });
        quizQuestions.push({
            string: Math.floor(Math.random() * 6) + 1,
            minFret: 6,
            maxFret: 12,
            group: 'frets612'
        });
    }
    
    quizQuestions.sort(() => Math.random() - 0.5);
    
    showScreen('screen-quiz');
    nextQuizQuestion();
}

function startFreePlay() {
    freePlayStreak = 0;
    freePlayLongestStreak = 0;
    freePlaySessionPoints = 0;
    freePlaySessionAttempts = 0;
    document.getElementById('streak').textContent = freePlayStreak;
    showScreen('screen-freeplay');
}

// ========================================
// PLACEMENT QUIZ
// ========================================

async function nextQuizQuestion() {
    if (quizCurrentIndex >= quizQuestions.length) {
        finishQuiz();
        return;
    }
    
    const q = quizQuestions[quizCurrentIndex];
    document.getElementById('quizProgress').textContent = `Question ${quizCurrentIndex + 1} of ${quizQuestions.length}`;
    
    const fret = Math.floor(Math.random() * (q.maxFret - q.minFret + 1)) + q.minFret;
    const freq = calculateFretFreq(q.string, fret);
    const noteName = freqToNoteName(freq);
    
    const stringNames = {6: '6th string', 5: '5th string', 4: '4th string', 3: '3rd string', 2: '2nd string', 1: '1st string'};
    
    currentChallenge = {
        string: q.string,
        fret: fret,
        expected_freq: freq,
        note_name: noteName,
        instruction: `${stringNames[q.string]}: find the lowest ${noteName} note.`,
        group: q.group
    };
    
    document.getElementById('quizInstruction').textContent = currentChallenge.instruction;
    document.getElementById('quizFeedback').classList.add('hidden');
    
    startQuizCountdown();
}

function startQuizCountdown() {
    let timeLeft = 5;
    const timer = document.getElementById('quizTimer');
    const circle = document.getElementById('quizTimerCircle');
    const number = document.getElementById('quizTimerNumber');
    const label = document.getElementById('quizTimerLabel');
    
    timer.style.display = 'flex';
    label.textContent = 'Get Ready';
    number.textContent = timeLeft;
    circle.style.strokeDashoffset = 0;
    circle.style.stroke = '#667eea';
    
    const circumference = 283;
    
    countdownInterval = setInterval(() => {
        timeLeft--;
        number.textContent = timeLeft;
        const progress = (5 - timeLeft) / 5;
        circle.style.strokeDashoffset = circumference * progress;
        
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            startQuizRecording();
        }
    }, 1000);
}

async function startQuizRecording() {
    const number = document.getElementById('quizTimerNumber');
    const label = document.getElementById('quizTimerLabel');
    const circle = document.getElementById('quizTimerCircle');
    
    number.textContent = '🎤';
    label.textContent = 'Listening...';
    circle.style.stroke = '#48bb78';
    circle.style.strokeDashoffset = 0;
    
    const circumference = 283;
    let recordTime = 3;
    
    const recordInterval = setInterval(() => {
        recordTime--;
        const progress = (3 - recordTime) / 3;
        circle.style.strokeDashoffset = circumference * progress;
    }, 1000);
    
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const stream = await navigator.mediaDevices.getUserMedia({ audio: { channelCount: 1 } });
        const source = audioContext.createMediaStreamSource(stream);
        const processor = audioContext.createScriptProcessor(4096, 1, 1);
        const audioChunks = [];
        const startTime = Date.now();
        
        processor.onaudioprocess = (e) => {
            audioChunks.push(new Float32Array(e.inputBuffer.getChannelData(0)));
            if (Date.now() - startTime >= 3000) {
                clearInterval(recordInterval);
                processor.disconnect();
                source.disconnect();
                stream.getTracks().forEach(t => t.stop());
                const realSampleRate = audioContext.sampleRate;
                audioContext.close();
                
                const totalLength = audioChunks.reduce((a, c) => a + c.length, 0);
                const audioData = new Float32Array(totalLength);
                let offset = 0;
                for (const chunk of audioChunks) {
                    audioData.set(chunk, offset);
                    offset += chunk.length;
                }
                
                analyzeQuizAudio(createWavBlob(audioData, realSampleRate));
            }
        };
        
        source.connect(processor);
        processor.connect(audioContext.destination);
        
    } catch (err) {
        document.getElementById('quizStatus').textContent = '❌ Microphone access denied';
    }
}

async function analyzeQuizAudio(wavBlob) {
    document.getElementById('quizTimer').style.display = 'none';
    document.getElementById('quizStatus').textContent = '⏳ Analyzing...';
    
    const formData = new FormData();
    formData.append('audio', wavBlob, 'recording.wav');
    formData.append('expected_freq', currentChallenge.expected_freq);
    formData.append('note_name', currentChallenge.note_name);
    formData.append('fret', currentChallenge.fret);
    
    const result = await (await fetch('/check_note', { method: 'POST', body: formData })).json();
    document.getElementById('quizStatus').textContent = '';
    
    const feedback = document.getElementById('quizFeedback');
    
    if (result.result === 'perfect') {
        quizScores[currentChallenge.group]++;
        feedback.innerHTML = '<p class="perfect">✅ Correct!</p>';
    } else {
        feedback.innerHTML = '<p class="wrong">❌ ' + result.message + '</p>';
    }
    
    feedback.classList.remove('hidden');
    
    quizCurrentIndex++;
    setTimeout(() => nextQuizQuestion(), 2000);
}

function finishQuiz() {
    const score05 = (quizScores.frets05 / 5) * 100;
    const score612 = (quizScores.frets612 / 5) * 100;
    
    let recommendation = '';
    
    if (score05 < 75 && score612 < 75) {
        recommendation = 'Start at Level 1 (String 1, Frets 0-5)';
    } else if (score05 >= 75 && score612 < 75) {
        recommendation = 'Start at Level 7 (String 1, Frets 6-12)';
        for (let i = 1; i <= 6; i++) {
            progress.levels[i] = { points: 100, completed: true };
        }
        progress.totalPoints += 600;
    } else {
        recommendation = 'Great job! You can start anywhere or try Free Play!';
        for (let i = 1; i <= 12; i++) {
            progress.levels[i] = { points: 100, completed: true };
        }
        progress.totalPoints += 1200;
    }
    
    saveProgress();
    
    document.getElementById('quizResultScore05').textContent = `${score05.toFixed(0)}%`;
    document.getElementById('quizResultScore612').textContent = `${score612.toFixed(0)}%`;
    document.getElementById('quizRecommendation').textContent = recommendation;
    
    showScreen('screen-quiz-results');
}

// ========================================
// LEVEL PLAY
// ========================================

function startLevel(levelId) {
    currentLevel = LEVELS.find(l => l.id === levelId);
    levelPhase = 'intro';
    learningNotes = [];
    learningIndex = 0;
    quizCorrect = 0;
    quizTotal = 0;
    
    // Mark as visited so it stays unlocked
    if (!progress.levels[levelId]) {
        progress.levels[levelId] = { points: 0, completed: false, visited: true };
    } else {
        progress.levels[levelId].visited = true;
    }
    saveProgress();
    
    for (let fret = currentLevel.minFret; fret <= currentLevel.maxFret; fret++) {
        const freq = calculateFretFreq(currentLevel.string, fret);
        const noteName = freqToNoteName(freq);
        learningNotes.push({ fret, noteName, freq });
    }
    
    showLevelIntro();
}

function showLevelIntro() {
    const stringNames = {6: '6th', 5: '5th', 4: '4th', 3: '3rd', 2: '2nd', 1: '1st'};
    
    document.getElementById('levelIntroTitle').textContent = 
        `${stringNames[currentLevel.string]} String • Frets ${currentLevel.minFret}-${currentLevel.maxFret}`;
    
    let notesList = '';
    learningNotes.forEach(n => {
        const fretText = n.fret === 0 ? 'Open' : `Fret ${n.fret}`;
        notesList += `<div style="margin:8px 0; font-size:1.1em;"><strong>${fretText}:</strong> ${n.noteName}</div>`;
    });
    
    document.getElementById('levelIntroNotes').innerHTML = notesList;
    drawStringDiagram('levelIntroDiagram', currentLevel.string, currentLevel.minFret, currentLevel.maxFret);
    
    showScreen('screen-level-intro');
}

function startLevelLearning() {
    levelPhase = 'learning';
    learningIndex = 0;
    showScreen('screen-level');
    
    // Hide prep time controls during learning
    document.getElementById('levelPrepTimeRow').style.display = 'none';
    
    drawStringDiagram('levelDiagram', currentLevel.string, currentLevel.minFret, currentLevel.maxFret);
    nextLearningNote();
}

function nextLearningNote() {
    if (learningIndex >= learningNotes.length) {
        showQuizInterstitial();
        return;
    }
    
    const note = learningNotes[learningIndex];
    const prog = getLevelProgress(currentLevel.id);
    
    document.getElementById('levelTitle').textContent = `Learning: ${currentLevel.name} • ${currentLevel.group}`;
    document.getElementById('levelPoints').textContent = prog.points;
    document.getElementById('levelInstruction').textContent = `Get ready to play: ${note.noteName}`;
    document.getElementById('levelFeedback').classList.add('hidden');
    
    currentChallenge = {
        string: currentLevel.string,
        fret: note.fret,
        expected_freq: note.freq,
        note_name: note.noteName
    };
    
    setTimeout(() => startLearningCountdown(), 1000);
}

function startLearningCountdown() {
    let timeLeft = 5;
    const timer = document.getElementById('levelTimer');
    const circle = document.getElementById('levelTimerCircle');
    const number = document.getElementById('levelTimerNumber');
    const label = document.getElementById('levelTimerLabel');
    const circumference = 283;
    
    timer.style.display = 'flex';
    label.textContent = 'Get Ready';
    number.textContent = timeLeft;
    circle.style.strokeDashoffset = 0;
    circle.style.stroke = '#667eea';
    
    countdownInterval = setInterval(() => {
        timeLeft--;
        number.textContent = timeLeft;
        const progress = (5 - timeLeft) / 5;
        circle.style.strokeDashoffset = circumference * progress;
        
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            startLearningRecording();
        }
    }, 1000);
}

async function startLearningRecording() {
    const number = document.getElementById('levelTimerNumber');
    const label = document.getElementById('levelTimerLabel');
    const circle = document.getElementById('levelTimerCircle');
    
    number.textContent = '🎤';
    label.textContent = 'Play it!';
    circle.style.stroke = '#48bb78';
    circle.style.strokeDashoffset = 0;
    
    const circumference = 283;
    let recordTime = 3;
    
    const recordInterval = setInterval(() => {
        recordTime--;
        const progress = (3 - recordTime) / 3;
        circle.style.strokeDashoffset = circumference * progress;
    }, 1000);
    
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const stream = await navigator.mediaDevices.getUserMedia({ audio: { channelCount: 1 } });
        const source = audioContext.createMediaStreamSource(stream);
        const processor = audioContext.createScriptProcessor(4096, 1, 1);
        const audioChunks = [];
        const startTime = Date.now();
        
        processor.onaudioprocess = (e) => {
            audioChunks.push(new Float32Array(e.inputBuffer.getChannelData(0)));
            if (Date.now() - startTime >= 3000) {
                clearInterval(recordInterval);
                processor.disconnect();
                source.disconnect();
                stream.getTracks().forEach(t => t.stop());
                const realSampleRate = audioContext.sampleRate;
                audioContext.close();
                
                const totalLength = audioChunks.reduce((a, c) => a + c.length, 0);
                const audioData = new Float32Array(totalLength);
                let offset = 0;
                for (const chunk of audioChunks) {
                    audioData.set(chunk, offset);
                    offset += chunk.length;
                }
                
                analyzeLearningAudio(createWavBlob(audioData, realSampleRate));
            }
        };
        
        source.connect(processor);
        processor.connect(audioContext.destination);
        
    } catch (err) {
        document.getElementById('levelStatus').textContent = '❌ Microphone access denied';
    }
}

async function analyzeLearningAudio(wavBlob) {
    document.getElementById('levelTimer').style.display = 'none';
    
    const formData = new FormData();
    formData.append('audio', wavBlob, 'recording.wav');
    formData.append('expected_freq', currentChallenge.expected_freq);
    formData.append('note_name', currentChallenge.note_name);
    formData.append('fret', currentChallenge.fret);
    
    const result = await (await fetch('/check_note', { method: 'POST', body: formData })).json();
    
    const feedback = document.getElementById('levelFeedback');
    
    if (result.result === 'perfect') {
        feedback.innerHTML = '<p class="perfect">✅ Good!</p>';
        feedback.classList.remove('hidden');
        learningIndex++;
        setTimeout(() => nextLearningNote(), 1500);
    } else {
        feedback.innerHTML = `
            <p class="wrong">❌ ${result.message}</p>
            <div style="margin-top:15px;">
                <button class="btn btn-primary" onclick="retryLearningNote()" style="margin-right:10px;">🔄 Try Again</button>
                <button class="btn btn-skip" onclick="skipLearningNote()">Skip This Note →</button>
            </div>
        `;
        feedback.classList.remove('hidden');
    }
}

function retryLearningNote() {
    document.getElementById('levelFeedback').classList.add('hidden');
    setTimeout(() => startLearningCountdown(), 500);
}

function skipLearningNote() {
    document.getElementById('levelFeedback').classList.add('hidden');
    learningIndex++;
    setTimeout(() => nextLearningNote(), 500);
}

function showQuizInterstitial() {
    const stringNames = {6: '6th', 5: '5th', 4: '4th', 3: '3rd', 2: '2nd', 1: '1st'};
    const feedback = document.getElementById('levelFeedback');
    document.getElementById('levelTimer').style.display = 'none';
    document.getElementById('levelInstruction').textContent = '';
    
    feedback.innerHTML = `
        <div style="text-align:center; padding:20px 0;">
            <p style="font-size:1.3em; font-weight:700; color:white; margin-bottom:10px;">Nice work! Ready for the quiz?</p>
            <p style="color:rgba(255,255,255,0.6); margin-bottom:20px;">You'll be tested on 10 random notes from ${stringNames[currentLevel.string]} String, Frets ${currentLevel.minFret}-${currentLevel.maxFret}</p>
            <button class="btn btn-primary" onclick="startLevelQuiz()" style="width:100%;">Start Quiz →</button>
        </div>
    `;
    feedback.classList.remove('hidden');
}

function jumpToQuiz() {
    levelPhase = 'quiz';
    quizCorrect = 0;
    quizTotal = 0;
    showScreen('screen-level');
    document.getElementById('levelPrepTimeRow').style.display = 'flex';
    drawStringDiagram('levelDiagram', currentLevel.string, currentLevel.minFret, currentLevel.maxFret);
    showQuizInterstitial();
}

function startLevelQuiz() {
    levelPhase = 'quiz';
    quizCorrect = 0;
    quizTotal = 0;
    
    // Show prep time controls during quiz
    document.getElementById('levelPrepTimeRow').style.display = 'flex';
    
    nextLevelQuizQuestion();
}

function nextLevelQuizQuestion() {
    if (quizTotal >= 10) {
        finishLevelQuiz();
        return;
    }
    
    const fret = Math.floor(Math.random() * (currentLevel.maxFret - currentLevel.minFret + 1)) + currentLevel.minFret;
    const freq = calculateFretFreq(currentLevel.string, fret);
    const noteName = freqToNoteName(freq);
    
    const stringNames = {6: '6th string', 5: '5th string', 4: '4th string', 3: '3rd string', 2: '2nd string', 1: '1st string'};
    
    currentChallenge = {
        string: currentLevel.string,
        fret: fret,
        expected_freq: freq,
        note_name: noteName,
        instruction: `${stringNames[currentLevel.string]}: find the lowest ${noteName} note.`
    };
    
    const prog = getLevelProgress(currentLevel.id);
    document.getElementById('levelTitle').textContent = `Quiz: ${currentLevel.name} • ${currentLevel.group} (${quizTotal + 1}/10)`;
    document.getElementById('levelPoints').textContent = prog.points;
    document.getElementById('levelInstruction').textContent = currentChallenge.instruction;
    document.getElementById('levelFeedback').classList.add('hidden');
    
    startLevelQuizCountdown();
}

function startLevelQuizCountdown() {
    let timeLeft = prepTime;
    const timer = document.getElementById('levelTimer');
    const circle = document.getElementById('levelTimerCircle');
    const number = document.getElementById('levelTimerNumber');
    const label = document.getElementById('levelTimerLabel');
    const circumference = 283;
    
    timer.style.display = 'flex';
    label.textContent = 'Get Ready';
    number.textContent = timeLeft;
    circle.style.strokeDashoffset = 0;
    circle.style.stroke = '#667eea';
    
    countdownInterval = setInterval(() => {
        timeLeft--;
        number.textContent = timeLeft;
        const progress = (prepTime - timeLeft) / prepTime;
        circle.style.strokeDashoffset = circumference * progress;
        
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            startLevelQuizRecording();
        }
    }, 1000);
}

async function startLevelQuizRecording() {
    const number = document.getElementById('levelTimerNumber');
    const label = document.getElementById('levelTimerLabel');
    const circle = document.getElementById('levelTimerCircle');
    
    number.textContent = '🎤';
    label.textContent = 'Listening...';
    circle.style.stroke = '#48bb78';
    circle.style.strokeDashoffset = 0;
    
    const circumference = 283;
    let recordTime = 3;
    
    const recordInterval = setInterval(() => {
        recordTime--;
        const progress = (3 - recordTime) / 3;
        circle.style.strokeDashoffset = circumference * progress;
    }, 1000);
    
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const stream = await navigator.mediaDevices.getUserMedia({ audio: { channelCount: 1 } });
        const source = audioContext.createMediaStreamSource(stream);
        const processor = audioContext.createScriptProcessor(4096, 1, 1);
        const audioChunks = [];
        const startTime = Date.now();
        
        processor.onaudioprocess = (e) => {
            audioChunks.push(new Float32Array(e.inputBuffer.getChannelData(0)));
            if (Date.now() - startTime >= 3000) {
                clearInterval(recordInterval);
                processor.disconnect();
                source.disconnect();
                stream.getTracks().forEach(t => t.stop());
                const realSampleRate = audioContext.sampleRate;
                audioContext.close();
                
                const totalLength = audioChunks.reduce((a, c) => a + c.length, 0);
                const audioData = new Float32Array(totalLength);
                let offset = 0;
                for (const chunk of audioChunks) {
                    audioData.set(chunk, offset);
                    offset += chunk.length;
                }
                
                analyzeLevelQuizAudio(createWavBlob(audioData, realSampleRate));
            }
        };
        
        source.connect(processor);
        processor.connect(audioContext.destination);
        
    } catch (err) {
        document.getElementById('levelStatus').textContent = '❌ Microphone access denied';
    }
}

async function analyzeLevelQuizAudio(wavBlob) {
    document.getElementById('levelTimer').style.display = 'none';
    
    const feedback = document.getElementById('levelFeedback');
    quizTotal++;
    
    const formData = new FormData();
    formData.append('audio', wavBlob, 'recording.wav');
    formData.append('expected_freq', currentChallenge.expected_freq);
    formData.append('note_name', currentChallenge.note_name);
    formData.append('fret', currentChallenge.fret);
    
    const result = await (await fetch('/check_note', { method: 'POST', body: formData })).json();
    
    if (result.result === 'perfect') {
        quizCorrect++;
        addPoints(10);
        addLevelPoints(currentLevel.id, 10);
        document.getElementById('levelPoints').textContent = getLevelProgress(currentLevel.id).points;
        feedback.innerHTML = '<p class="perfect">✅ Correct!</p>';
    } else {
        feedback.innerHTML = '<p class="wrong">❌ ' + result.message + '</p>';
    }
    
    feedback.classList.remove('hidden');
    setTimeout(() => nextLevelQuizQuestion(), 2000);
}

function finishLevelQuiz() {
    const passed = quizCorrect >= 7;
    
    document.getElementById('levelCompleteTitle').textContent = passed ? '🎉 Level Complete!' : '📝 Quiz Complete';
    document.getElementById('levelCompleteScore').textContent = `You got ${quizCorrect} out of ${quizTotal} correct`;
    document.getElementById('levelCompleteMessage').textContent = passed ? 
        'Great job! Ready for the next level?' : 
        'You can retake this level or continue anyway.';
    
    if (passed) {
        completeLevel(currentLevel.id);
        document.getElementById('levelRetakeBtn').style.display = 'none';
        document.getElementById('levelContinueBtn').textContent = 'Next Level →';
    } else {
        document.getElementById('levelRetakeBtn').style.display = 'inline-block';
        document.getElementById('levelContinueBtn').textContent = 'Continue Anyway →';
    }
    
    showScreen('screen-level-complete');
}

function retakeLevel() {
    startLevel(currentLevel.id);
}

function continueFromLevel() {
    const nextLevel = LEVELS.find(l => l.id === currentLevel.id + 1);
    if (nextLevel) {
        startLevel(nextLevel.id);
    } else {
        showScreen('screen-dashboard');
    }
}

function skipLevel() {
    const nextLevel = LEVELS.find(l => l.id === currentLevel.id + 1);
    if (nextLevel) {
        startLevel(nextLevel.id);
    } else {
        showScreen('screen-dashboard');
    }
}

function exitLevel() {
    if (countdownInterval) clearInterval(countdownInterval);
    if (autoNextTimeout) clearTimeout(autoNextTimeout);
    showScreen('screen-dashboard');
}

// ========================================
// FREE PLAY
// ========================================

function toggleFreePlay() {
    if (!freePlayActive) {
        freePlayActive = true;
        document.getElementById('freeplayBtn').textContent = '⏸ Pause';
        document.getElementById('freeplayBtn').classList.remove('btn-primary');
        document.getElementById('freeplayBtn').classList.add('btn-pause');
        
        if (currentChallenge) {
            startFreePlayCountdown();
        } else {
            fetchFreePlayChallenge();
        }
    } else {
        freePlayActive = false;
        document.getElementById('freeplayBtn').textContent = '▶ Play';
        document.getElementById('freeplayBtn').classList.remove('btn-pause');
        document.getElementById('freeplayBtn').classList.add('btn-primary');
        
        if (autoNextTimeout) clearTimeout(autoNextTimeout);
        if (countdownInterval) clearInterval(countdownInterval);
        
        document.getElementById('freeplayTimer').style.display = 'none';
        document.getElementById('freeplayStatus').textContent = 'Paused';
    }
}

async function fetchFreePlayChallenge() {
    if (!freePlayActive) return;
    
    document.getElementById('freeplayFeedback').classList.add('hidden');
    document.getElementById('freeplayStatus').textContent = '';
    
    const response = await fetch('/get_challenge');
    currentChallenge = await response.json();
    
    document.getElementById('freeplayInstruction').textContent = currentChallenge.instruction;
    startFreePlayCountdown();
}

function startFreePlayCountdown() {
    if (!freePlayActive) return;
    
    let timeLeft = prepTime;
    const timer = document.getElementById('freeplayTimer');
    const circle = document.getElementById('freeplayTimerCircle');
    const number = document.getElementById('freeplayTimerNumber');
    const label = document.getElementById('freeplayTimerLabel');
    const circumference = 283;
    
    timer.style.display = 'flex';
    label.textContent = 'Get Ready';
    number.textContent = timeLeft;
    circle.style.strokeDashoffset = 0;
    circle.style.stroke = '#667eea';
    
    countdownInterval = setInterval(() => {
        timeLeft--;
        number.textContent = timeLeft;
        const progress = (prepTime - timeLeft) / prepTime;
        circle.style.strokeDashoffset = circumference * progress;
        
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            startFreePlayRecording();
        }
    }, 1000);
}

async function startFreePlayRecording() {
    if (!freePlayActive) return;
    
    const number = document.getElementById('freeplayTimerNumber');
    const label = document.getElementById('freeplayTimerLabel');
    const circle = document.getElementById('freeplayTimerCircle');
    
    number.textContent = '🎤';
    label.textContent = 'Listening...';
    circle.style.stroke = '#48bb78';
    circle.style.strokeDashoffset = 0;
    
    const circumference = 283;
    let recordTime = 3;
    
    const recordInterval = setInterval(() => {
        recordTime--;
        const progress = (3 - recordTime) / 3;
        circle.style.strokeDashoffset = circumference * progress;
    }, 1000);
    
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const stream = await navigator.mediaDevices.getUserMedia({ audio: { channelCount: 1 } });
        const source = audioContext.createMediaStreamSource(stream);
        const processor = audioContext.createScriptProcessor(4096, 1, 1);
        const audioChunks = [];
        const startTime = Date.now();
        
        processor.onaudioprocess = (e) => {
            audioChunks.push(new Float32Array(e.inputBuffer.getChannelData(0)));
            if (Date.now() - startTime >= 3000) {
                clearInterval(recordInterval);
                processor.disconnect();
                source.disconnect();
                stream.getTracks().forEach(t => t.stop());
                const realSampleRate = audioContext.sampleRate;
                audioContext.close();
                
                const totalLength = audioChunks.reduce((a, c) => a + c.length, 0);
                const audioData = new Float32Array(totalLength);
                let offset = 0;
                for (const chunk of audioChunks) {
                    audioData.set(chunk, offset);
                    offset += chunk.length;
                }
                
                analyzeFreePlayAudio(createWavBlob(audioData, realSampleRate));
            }
        };
        
        source.connect(processor);
        processor.connect(audioContext.destination);
        
    } catch (err) {
        document.getElementById('freeplayStatus').textContent = '❌ Microphone access denied';
        freePlayActive = false;
        document.getElementById('freeplayBtn').textContent = '▶ Play';
        document.getElementById('freeplayBtn').classList.remove('btn-pause');
        document.getElementById('freeplayBtn').classList.add('btn-primary');
    }
}

async function analyzeFreePlayAudio(wavBlob) {
    document.getElementById('freeplayTimer').style.display = 'none';
    document.getElementById('freeplayStatus').textContent = '⏳ Analyzing...';
    
    const feedback = document.getElementById('freeplayFeedback');
    freePlaySessionAttempts++;
    
    const formData = new FormData();
    formData.append('audio', wavBlob, 'recording.wav');
    formData.append('expected_freq', currentChallenge.expected_freq);
    formData.append('note_name', currentChallenge.note_name);
    formData.append('fret', currentChallenge.fret);
    
    const result = await (await fetch('/check_note', { method: 'POST', body: formData })).json();
    document.getElementById('freeplayStatus').textContent = '';
    
    if (result.result === 'perfect') {
        freePlayStreak++;
        freePlaySessionPoints += 10;
        if (freePlayStreak > freePlayLongestStreak) freePlayLongestStreak = freePlayStreak;
        addPoints(10);
        document.getElementById('streak').textContent = freePlayStreak;
        
        feedback.innerHTML = '<p class="perfect">' + result.message.replace(/\n/g, '<br>') + '</p>';
        feedback.classList.remove('hidden');
        
        if (freePlayActive) {
            autoNextTimeout = setTimeout(() => fetchFreePlayChallenge(), 3000);
        }
    } else {
        freePlayStreak = 0;
        document.getElementById('streak').textContent = freePlayStreak;
        
        feedback.innerHTML = `
            <p class="wrong">${result.message.replace(/\n/g, '<br>')}</p>
            <div style="margin-top:15px;">
                <button class="btn btn-primary" onclick="retryFreePlayNote()" style="margin-right:10px;">🔄 Try Again</button>
                <button class="btn btn-skip" onclick="skipFreePlayNote()">Skip This Note →</button>
            </div>
        `;
        feedback.classList.remove('hidden');
        
        freePlayActive = false;
        document.getElementById('freeplayBtn').textContent = '▶ Play';
        document.getElementById('freeplayBtn').classList.remove('btn-pause');
        document.getElementById('freeplayBtn').classList.add('btn-primary');
    }
}

function retryFreePlayNote() {
    document.getElementById('freeplayFeedback').classList.add('hidden');
    freePlayActive = true;
    document.getElementById('freeplayBtn').textContent = '⏸ Pause';
    document.getElementById('freeplayBtn').classList.remove('btn-primary');
    document.getElementById('freeplayBtn').classList.add('btn-pause');
    setTimeout(() => startFreePlayCountdown(), 500);
}

function skipFreePlayNote() {
    document.getElementById('freeplayFeedback').classList.add('hidden');
    freePlayActive = true;
    document.getElementById('freeplayBtn').textContent = '⏸ Pause';
    document.getElementById('freeplayBtn').classList.remove('btn-primary');
    document.getElementById('freeplayBtn').classList.add('btn-pause');
    fetchFreePlayChallenge();
}

function endFreePlay() {
    freePlayActive = false;
    if (autoNextTimeout) clearTimeout(autoNextTimeout);
    if (countdownInterval) clearInterval(countdownInterval);
    
    // Track final streak
    if (freePlayStreak > freePlayLongestStreak) freePlayLongestStreak = freePlayStreak;
    
    // Show session summary
    const feedback = document.getElementById('freeplayFeedback');
    document.getElementById('freeplayTimer').style.display = 'none';
    document.getElementById('freeplayInstruction').textContent = '';
    document.getElementById('freeplayStatus').textContent = '';
    document.getElementById('freeplayBtn').style.display = 'none';
    
    feedback.innerHTML = `
        <div style="text-align:center; padding:20px 0;">
            <p style="font-size:1.5em; font-weight:700; color:white; margin-bottom:15px;">🎸 Session Complete!</p>
            <div style="display:flex; justify-content:center; gap:20px; margin-bottom:20px;">
                <div style="text-align:center;">
                    <div style="font-size:2em; font-weight:700; color:#e8572a;">${freePlayLongestStreak}</div>
                    <div style="font-size:0.8em; color:rgba(255,255,255,0.6); text-transform:uppercase; letter-spacing:1px;">Longest Streak</div>
                </div>
                <div style="text-align:center;">
                    <div style="font-size:2em; font-weight:700; color:#e8572a;">${freePlaySessionAttempts}</div>
                    <div style="font-size:0.8em; color:rgba(255,255,255,0.6); text-transform:uppercase; letter-spacing:1px;">Notes Attempted</div>
                </div>
                <div style="text-align:center;">
                    <div style="font-size:2em; font-weight:700; color:#e8572a;">${freePlaySessionPoints}</div>
                    <div style="font-size:0.8em; color:rgba(255,255,255,0.6); text-transform:uppercase; letter-spacing:1px;">Points Earned</div>
                </div>
            </div>
            <button class="btn btn-primary" onclick="restartFreePlay()" style="width:100%; margin-bottom:10px;">Play Again</button>
            <button class="btn btn-skip" onclick="showScreen('screen-dashboard')" style="width:100%;">← Back to Dashboard</button>
        </div>
    `;
    feedback.classList.remove('hidden');
}

function restartFreePlay() {
    document.getElementById('freeplayBtn').style.display = 'block';
    document.getElementById('freeplayBtn').textContent = '▶ Play';
    document.getElementById('freeplayBtn').classList.remove('btn-pause');
    document.getElementById('freeplayBtn').classList.add('btn-primary');
    document.getElementById('freeplayFeedback').classList.add('hidden');
    document.getElementById('freeplayInstruction').textContent = 'Press Play to start!';
    currentChallenge = null;
    startFreePlay();
}

// ========================================
// UTILITIES
// ========================================

function adjustPrepTime(delta) {
    prepTime = Math.max(2, Math.min(15, prepTime + delta));
    document.getElementById('levelPrepTime').textContent = `${prepTime}s`;
    document.getElementById('freeplayPrepTime').textContent = `${prepTime}s`;
}

function createWavBlob(audioData, sampleRate) {
    const buffer = new ArrayBuffer(44 + audioData.length * 2);
    const view = new DataView(buffer);
    const writeString = (offset, string) => {
        for (let i = 0; i < string.length; i++) view.setUint8(offset + i, string.charCodeAt(i));
    };
    writeString(0, 'RIFF');
    view.setUint32(4, 36 + audioData.length * 2, true);
    writeString(8, 'WAVE');
    writeString(12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, 1, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * 2, true);
    view.setUint16(32, 2, true);
    view.setUint16(34, 16, true);
    writeString(36, 'data');
    view.setUint32(40, audioData.length * 2, true);
    let offset = 44;
    for (let i = 0; i < audioData.length; i++) {
        const s = Math.max(-1, Math.min(1, audioData[i]));
        view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
        offset += 2;
    }
    return new Blob([buffer], { type: 'audio/wav' });
}

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    showScreen('screen-mode-select');
});
