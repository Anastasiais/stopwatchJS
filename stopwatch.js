let ss = document.querySelector('.stopwatch');
let div = document.getElementsByTagName('div')[2];
let start = ss.querySelector('button.start');
let stop = ss.querySelector('button.stop');
let reset = ss.querySelector('button.reset');
let seconds = 0;
let minutes = 0;  
let hours = 0;
let t;

const startCounting = () => {
    seconds++;
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;
        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    div.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + 
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + 
    (seconds > 9 ? seconds : "0" + seconds);
    Timer();
}

const Timer =() => {
    t = setTimeout(startCounting, 1000);
}
Timer();

start.addEventListener('click', () =>{
    Timer();
})

stop.addEventListener('click', () => {
    clearTimeout(t);
})

reset.addEventListener('click', () =>  {
    div.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
})
