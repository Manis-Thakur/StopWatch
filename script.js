const display = document.getElementById('display');
let timer = null;
let starttime = 0;
let elapsedtime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        starttime = Date.now() - elapsedtime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop() {
    if (isRunning) {
        clearInterval(timer);
        elapsedtime = Date.now() - starttime;
        isRunning = false;
    }

}

function reset() {
    clearInterval(timer);
    timer = null;
    starttime = 0;
    elapsedtime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";


}

function update() {
    const currentTime = Date.now();
    elapsedtime = currentTime - starttime;
    let hours = Math.floor(elapsedtime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedtime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedtime / 1000 % 60);
    let milliseconds = Math.floor(elapsedtime % 1000 / 10);
    
    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");
    milliseconds = milliseconds.toString().padStart(2, "0");


    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`
}