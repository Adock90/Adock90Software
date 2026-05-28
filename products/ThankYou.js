function MatchTheme(){
    let textcolourfirsttitle = document.getElementById("firsttitle");
    let textcoloursecondtitle = document.getElementById("secondtitle");
    let textcolourcountdown = document.getElementById("countdown");
    if (getComputedStyle(document.body).backgroundColor === "rgb(41, 41, 41)"){
        textcolourcountdown.style.color = 'white';
        textcolourfirsttitle.style.color = 'white';
        textcoloursecondtitle.style.color = 'white';
    }
}

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


window.addEventListener("load", MatchTheme());

setInterval(LocateBack, 1000);
