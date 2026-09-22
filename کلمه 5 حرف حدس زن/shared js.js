let money = Number(localStorage.getItem("money-g"));
let words = Number(localStorage.getItem("words-g"));
if (window.location.hostname != "kourosh394.github.io" && window.location.protocol != "file:") {
    alert(`این بازی تقلبی کلمه 5 حرف حدس زن است. لینک تقلبی: ${decodeURIComponent(window.location.href)} لینک اصلی: https://kourosh394.github.io/HTMLCFF/faprgs/کلمه 5 حرف حدس زن/main.html OK را بزنید تا به نسخه ی اصلی بروید.`);
    window.location.href = "https://kourosh394.github.io/HTMLCFF/faprgs/کلمه 5 حرف حدس زن/main.html";
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