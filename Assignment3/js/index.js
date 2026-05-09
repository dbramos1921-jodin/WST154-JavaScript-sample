let time = 0;
let timer = null;

function startWatch() {

    if (timer === null) {

        timer = setInterval(updateTime, 1000);
    }
}

function updateTime() {

    time++;

    document.getElementById("display").innerHTML = time;
}

function stopWatch() {

    clearInterval(timer);

    timer = null;
}

function resetWatch() {

    clearInterval(timer);

    timer = null;

    time = 0;

    document.getElementById("display").innerHTML = time;
}