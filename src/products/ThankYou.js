
function LocateBack() {
    let TimerObj = document.getElementById("countdown");
    let TimeLeft = parseInt(TimerObj.innerHTML);
    if (1 === TimeLeft){
        window.location.href = "../index.html";
    } else {
        TimeLeft--;
        TimerObj.innerHTML = TimeLeft.toString();
    }
    
}

setInterval(LocateBack, 1000);