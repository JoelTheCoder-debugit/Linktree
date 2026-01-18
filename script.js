const clockEl = document.getElementById("clock");
const timezoneEl = document.getElementById("timezone");

// Get user's timezone automatically
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
timezoneEl.textContent = timezone;

function updateClock() {
    const now = new Date();

    const time = now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    clockEl.textContent = time;
}

updateClock();
setInterval(updateClock, 1000);
