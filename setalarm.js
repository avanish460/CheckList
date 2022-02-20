// console.log("This is tutorial 54");
// const alarmSubmit = document.getElementById('alarmSubmit');

// // Add an event listener to the submit button
// alarmSubmit.addEventListener('click', setAlarm);

// var audio = new Audio('kina_chir.mp3');

// // function to play the alarm ring tone
// function ringBell() {
//     audio.play();
// }

// // This function will run whenever alarm is set from the UI
// function setAlarm(e) {
//     e.preventDefault();
//     const alarm = document.getElementById('alarm');
//     alarmDate = new Date(alarm.value);
//     console.log(`Setting Alarm for ${alarmDate}...`);
//     now = new Date();

//     let timeToAlarm = alarmDate - now;
//     console.log(timeToAlarm);
//     if(timeToAlarm>=0){
//         setTimeout(() => {
//             console.log("Ringing now")
//             ringBell();
//         }, timeToAlarm);
//     }
// }

const display = document.getElementById('clock');
const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3');
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;

function updateTime() {
    const date = new Date();

    const hour = formatTime(date.getHours());
    const minutes = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());



    display.innerText = `${hour} : ${minutes} : ${seconds}`
}

function formatTime(time) {
    if (time < 10) {
        return '0' + time;
    }
    return time;
}

function setAlarmTime(value) {
    alarmTime = value;
}

function setAlarm() {
    if (alarmTime) {
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);

        if (timeToAlarm > current) {
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(() => audio.play(), timeout);
            alert('Alarm set');
        }
    }
}

function clearAlarm() {
    audio.pause();
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
        alert('Alarm cleared');
    }
}

setInterval(updateTime, 1000);