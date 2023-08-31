const countdownDisplay = document.getElementById('countdownDisplay');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const startButton = document.getElementById('start');
const restartButton = document.getElementById('restart');

let countdownInterval;
let totalSeconds = 0;

function startTimer() {
    totalSeconds = parseInt(minutesInput.value) * 60 + parseInt(secondsInput.value);

    if (isNaN(totalSeconds) || totalSeconds <= 0) {
        return;
    }

    countdownInterval = setInterval(updateTimer, 1000);
    updateTimer();
    startButton.disabled = true;
}

function updateTimer() {
    if (totalSeconds <= 0) {
        clearInterval(countdownInterval);
        countdownDisplay.textContent = '00:00';
        startButton.disabled = false;
        alert(`Time is up`);
        return;
    }

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    countdownDisplay.textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;
    totalSeconds--;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function restartTimer() {
    clearInterval(countdownInterval);
    countdownDisplay.textContent = '00:00';
    startButton.disabled = false;
}

startButton.addEventListener('click', startTimer);
restartButton.addEventListener('click', restartTimer);
