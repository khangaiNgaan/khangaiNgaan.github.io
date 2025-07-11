function calcdays() {
        const startdate = new Date('2025-01-04T22:34:00+08:00');
        const now = new Date();

        const difference = now - startdate; 

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        function formatTime(number) {
        return number.toString().length < 2 ? '0' + number : number;
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