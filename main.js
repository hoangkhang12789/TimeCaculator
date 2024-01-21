let day = document.getElementById("day");
let hour = document.getElementById("hour");
let min = document.getElementById("min");
let dayResult = document.getElementById("dayResult");
let hourResult = document.getElementById("hourResult");
let minResult = document.getElementById("minResult");
let calculate = document.getElementById("calculate");

calculate.addEventListener("click", (e) => {
    let dayTime = day.value;
    let hourTime = hour.value;
    let minTime = min.value;
    let time = 0;
    if (parseInt(dayTime) > 0) {
        time += parseInt(dayTime) * 24 * 60 * 60;
    }
    if (parseInt(hourTime) > 0) {
        time += parseInt(hourTime) * 60 * 60;
    }
    if (parseInt(minTime) > 0) {
        time += parseInt(minTime) * 60;
    }
    let result = ConvertSecondsToDHMS(time);
    dayResult.value = result.day;
    hourResult.value = result.hour;
    minResult.value = result.min
})

function ConvertSecondsToDHMS(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "Invalid input";
    }

    var days = Math.floor(seconds / 86400);
    var hours = Math.floor((seconds % 86400) / 3600);
    var minutes = Math.floor((seconds % 3600) / 60);
    var remainingSeconds = seconds % 60;

    var formattedDays = ("0" + days).slice(-2);
    var formattedHours = ("0" + hours).slice(-2);
    var formattedMinutes = ("0" + minutes).slice(-2);
    var formattedSeconds = ("0" + remainingSeconds).slice(-2);
    return {
        day: formattedDays,
        hour: formattedHours,
        min: formattedMinutes
    }
}