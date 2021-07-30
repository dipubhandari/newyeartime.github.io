const newYear = "1 Jan 2022";

function countdown() {
    const currentDate = new Date();
    const newYearDate = new Date(newYear);
    const totalseconds = (newYearDate - currentDate) / 1000;
    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600) % 24;
    const minutes = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds % 60);

    let dayFrontend = document.getElementById('d');
    dayFrontend.innerText = days;
    let hoursFrontend = document.getElementById('hoursShow');
    hoursFrontend.innerText = hours;
    let minutesFrontend = document.getElementById('minutesShow');
    minutesFrontend.innerText = minutes;
    let secondsFrontend = document.getElementById('secondsShow');
    secondsFrontend.innerText = seconds;
}
countdown();

setInterval(countdown, 1000);