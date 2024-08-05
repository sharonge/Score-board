let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homecount = 0
let guestcount = 0

function homeScore1() {
    homecount += 1
    homeScore.textContent = homecount
}

function homeScore2() {
    homecount += 2
    homeScore.textContent = homecount
}

function homeScore3() {
    homecount += 3
    homeScore.textContent = homecount
}

function guestScore1() {
    guestcount += 1
    guestScore.textContent = guestcount
}

function guestScore2() {
    guestcount += 2
    guestScore.textContent = guestcount
}

function guestScore3() {
    guestcount += 3
    guestScore.textContent = guestcount
}

//timer

let timer;
let totalSeconds = 0;
let isRunning = false;

function updateDisplay() {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    document.getElementById('timer').innerHTML = minutes + ":" + seconds;
}

function startTimer() {
    if (!isRunning) {
        timer = setInterval(function() {
            totalSeconds++;
            updateDisplay();
        }, 1000);
        isRunning = true;
    }
}

function pauseTimer() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
}

function resetTimer() {
    clearInterval(timer);
    totalSeconds = 0;
    updateDisplay();
    isRunning = false;
}

function stopTimer() {
    clearInterval(timer);
    totalSeconds = 0;
    updateDisplay();
    isRunning = false;
}