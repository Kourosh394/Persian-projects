let money = Number(localStorage.getItem("money-g"));
let words = Number(localStorage.getItem("words-g"));
if (window.location.hostname != "kourosh394.github.io" && window.location.protocol != "file:") {
    alert(`این بازی تقلبی کلمه 5 حرف حدس زن است. لینک تقلبی: ${decodeURIComponent(window.location.href)} لینک اصلی: https://kourosh394.github.io/HTMLCFF/faprgs/کلمه 5 حرف حدس زن/main.html OK را بزنید تا به نسخه ی اصلی بروید.`);
    window.location.href = "https://kourosh394.github.io/HTMLCFF/faprgs/کلمه 5 حرف حدس زن/main.html";
}
window.onload = function () {
    let musicLocation = localStorage.getItem("autoPlayMusic-g");
    if (musicLocation != null && musicLocation.slice(-4) == ".mp3") {
        let audio = document.createElement("audio");
        audio.src = musicLocation;
        audio.loop = true;
        document.body.appendChild(audio);
        let audioPlayButton = document.createElement("button");
        audioPlayButton.innerHTML = "پخش آهنگ🎵";
        audioPlayButton.className = "BM";
        audioPlayButton.onclick = function () {
            audio.play();
            audioPlayButton.style.display = "none";
        };
        document.body.appendChild(audioPlayButton);
    }
};
function checkLScacheG(LSValue) {
    if (localStorage.getItem("cache-g") != LSValue) {
        window.location.href = "main.html";
        return;
    }
}
function MAW() {
    document.getElementById("money").innerText = `💵: ${money}`;
    localStorage.setItem("money-g", money);
    document.getElementById("words").innerText = `کلمات: ${words}`;
    localStorage.setItem("words-g", words);
}
function shake(id) {
    setTimeout(function () {
        document.getElementById(id).classList.add("shake");
    }, 500)
    document.getElementById(id).classList.remove("shake");
}
function SFTTXS(id) {
    setTimeout(function () {
        document.getElementById(id).classList.add("SFTTXS");
    }, 500)
    document.getElementById(id).classList.remove("SFTTXS");
}
function SBE(id) {
    setTimeout(function () {
        document.getElementById(id).classList.add("SBE");
    }, 500)
    document.getElementById(id).classList.remove("SBE");
}