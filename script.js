var ss = document.getElementsByClassName('timer-container');

[].forEach.call(ss, function (s) {
    var currentTimer = 0,
        interval = 0,
        lastUpdateTime = new Date().getTime(),
        start = s.querySelector('button.start-btn'),
        stop = s.querySelector('button.stop-btn'),
        reset = s.querySelector('button.reset-btn'),
        hrs = s.querySelector('span.hours'),
        mins = s.querySelector('span.minutes'),
        secs = s.querySelector('span.seconds');

    start.addEventListener('click', startTimer);
    stop.addEventListener('click', stopTimer);
    reset.addEventListener('click', resetTimer);

    function pad (n) {
        return ('00' + n).substr(-2);
    }

    function update () {
        var now = new Date().getTime(),
            dt = now - lastUpdateTime;

        currentTimer += dt;

        var time = new Date(currentTimer);

        hrs.innerHTML = pad(Math.floor(time.getHours()));
        mins.innerHTML = pad(Math.floor(time.getMinutes()));
        secs.innerHTML = pad(Math.floor(time.getseconds()));

        lastUpdateTime = now;
    }

    function startTimer () {
        if (!interval) {
            lastUpdateTime = new Date().getTime();
            interval = setInterval(update, 1);
        }
    }

    function stopTimer () {
        clearInterval(interval);
        interval = 0;
    }

    function resetTimer () {
        stopTimer();

        currentTimer = 0;

        hrs.innerHTML = mins.innerHTML = secs.innerHTML = pad(0);
    }
});