function calcdays() {
    // 2025-01-04T22:34:00+08:00
    var starttime = 1736001240000;
    var now = new Date().getTime();

    var difference = now - starttime;
    if (difference < 0) difference = 0;

    var days = Math.floor(difference / 86400000);
    var hours = Math.floor((difference % 86400000) / 3600000);
    var minutes = Math.floor((difference % 3600000) / 60000);
    var seconds = Math.floor((difference % 60000) / 1000);

    function formatTime(number) {
        return number < 10 ? '0' + number : number;
    }

    return {
        days: days,
        time: formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds)
    };
}

function displayTime() {
    var result = calcdays();
    document.getElementById('days').textContent = result.days;
    document.getElementById('time').textContent = result.time;
}
setInterval(displayTime, 1000);
displayTime();