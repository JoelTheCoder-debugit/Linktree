const clockEl = document.getElementById("clock");
const timezoneEl = document.getElementById("timezone");

// 🔒 YOUR timezone here
const MY_TIMEZONE = "Australia/Adelaide";

timezoneEl.textContent = MY_TIMEZONE;

function updateClock() {
    const now = new Date();

    const time = now.toLocaleTimeString("en-AU", {
        timeZone: MY_TIMEZONE,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    clockEl.textContent = time;
}

updateClock();
setInterval(updateClock, 1000);
