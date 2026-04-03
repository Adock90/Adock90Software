let DownloadButtonObj = document.getElementById("Download");
let Link = document.getElementById("link");
let i = 0;


DownloadButtonObj.addEventListener("click", () => {
    window.open(Link.innerHTML);
    window.location.href = "./ThankYou.html";
});
