const setTime = document.querySelector("#time");
const setDate = document.querySelector("#date");
const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
};

let d;
let time, hourInTwelve, hour;
let date;

setInterval(() => {
    d = new Date();

    hour = hourInTwelve = d.getHours();
    if (d.getHours() > 12) {
        hourInTwelve = d.getHours() - 12;
    }
    if (hourInTwelve < 10) {
        hour = `0${hourInTwelve}`;
    }

    if (d.getMinutes() < 10) {
        min = `0${d.getMinutes()}`;
    } else {
        min = d.getMinutes();
    }

    if (d.getSeconds() < 10) {
        sec = `0${d.getSeconds()}`;
    } else {
        sec = d.getSeconds();
    }

    time = hour + ":" + min + ":" + sec;
    date = d.toLocaleDateString(undefined, options);

    setTime.innerHTML = time;
    setDate.innerHTML = date;
}, 1000);
