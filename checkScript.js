let AmountOfVisits = GetUserVisits();
let AmountOfDownloads = GetUserDownloads();
let LastVisit = TranslateLVLSToLVI(GetLastVisit());
let CurrentTime = GetTime();
if (CurrentTime - LastVisit < 100){
    window.location.href = "../Woah.html";
}
        
if (AmountOfDownloads === null){
    AmountOfDownloads = 0;
}
SetLastVisit();
SetUserVisits(AmountOfVisits);

if (AmountOfVisits === NaN){
    AmountOfVisits = 0;
}

let UserStats = document.getElementById("UserStats");
UserStats.innerHTML = "You have visited us: "+AmountOfVisits+" times and downloaded software "+AmountOfDownloads+" times";