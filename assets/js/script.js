let $ = document,
    startStopButton = $.querySelector('#btn-start-stop'),
    timeBox = $.querySelector('#time'),
    resetBtn = $.querySelector('.container-reset span'),
    hrBox = $.querySelector('.hr'),
    minBox = $.querySelector('.min'),
    secBox = $.querySelector('.sec'),
    min = 0,
    sec = 0,
    hour= 0,
    interval

function timerHandler(){
    document.querySelector('#time').style.transition = "all 0.6s"
    startStopButton.classList.toggle('start')
    if (startStopButton.classList.contains('start')) {  //start
        clearInterval(interval)
        interval = setInterval(() => {
            sec ++
            hrBox.innerHTML = '0' + hour
            minBox.innerHTML = '0' + min
            secBox.innerHTML = '0' + sec
            if (sec > 9) {
                secBox.innerHTML = sec

            }if (sec >= 59) {
                min ++ 
                sec = '0'+ 0

            }if (min >= 59) {
                hour ++
                min = 0
                sec = 0
                secBox.innerHTML = '0' + sec

            }if (min > 9){
                minBox.innerHTML =  min
                secBox.innerHTML = sec

            }if (hour > 9) {
                hrBox.innerHTML = hour
                minBox.innerHTML =  '0'+ min 

            }if (hour >= 23) {
                hour = 0
                min = 0
                sec = 0
                hrBox.innerHTML = '0' + hour
                minBox.innerHTML =  '0'+ min 
            }
           
        }, 11);

    }else{  //stop
        clearInterval(interval)
    }
}
function resetTimer(){
    clearInterval(interval)
    sec = 0
    hour = 0
    min = 0
    hrBox.innerHTML = '0' + hour
    minBox.innerHTML =  '0'+ min 
    secBox.innerHTML = '0' + sec

    startStopButton.removeAttribute('class', 'start')
}

startStopButton.addEventListener('click', timerHandler)
resetBtn.addEventListener('click', resetTimer)