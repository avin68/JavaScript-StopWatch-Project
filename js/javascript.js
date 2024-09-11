let showTimer = document.querySelector('.timerDisplay');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let totolTime = 0;
let timer;

//start button
start.addEventListener('click' ,()=>{
    timer = setInterval(() => {
        totolTime++;
        showTimer.innerHTML = calculateTime(totolTime);
    }, 1000);
    start.disabled = true
})

//stop button
stop.addEventListener('click' , () => {
    clearInterval(timer)
    start.disabled = false
})

//reset button
reset.addEventListener('click' , () => {
    clearInterval(timer)
    showTimer.innerHTML = '00 : 00 : 00'
    totolTime = 0;
    start.disabled = false
})

function calculateTime(totolTime){
    let seconds = (totolTime % 60);
    let minutus = (totolTime - seconds) / 60;
    let hours = (minutus - (minutus % 60)) / 60;

    if(seconds < 10) seconds = '0' + seconds;
    if(minutus < 10) minutus = '0' + minutus;
    if(hours < 10) hours = '0' + hours;
    
    return `${hours} : ${minutus} : ${seconds}`;
}
