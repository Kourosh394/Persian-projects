let money = Number(localStorage.getItem("money-g"));
let words = Number(localStorage.getItem("words-g"));
let localStorages = Object.keys(localStorage);
let fileVersion = false;
if (window.location.hostname != "kourosh394.github.io" && window.location.protocol != "file:") {
    alert(`این بازی تقلبی کلمه 5 حرف حدس زن است. لینک تقلبی: ${decodeURIComponent(window.location.href)} لینک اصلی: https://kourosh394.github.io/HTMLCFF/faprgs/کلمه 5 حرف حدس زن/main.html OK را بزنید تا به نسخه ی اصلی بروید.`);
    window.location.href = "https://kourosh394.github.io/Persian-projects/کلمه 5 حرف حدس زن/main.html";
}
if (window.location.protocol == "file:") {
    fileVersion = true;
}
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
function music(deleteDataes) {
    let musicLocation = localStorage.getItem("playMusicLocation-g");
    if (musicLocation != null && musicLocation.slice(-4) == ".mp3") {
        let audio = document.createElement("audio");
        audio.src = musicLocation;
        audio.loop = true;
        let musicTime = localStorage.getItem("musicTime-g");
        if (musicTime != null) {
            audio.currentTime = Number(musicTime);
        }
        document.body.appendChild(audio);
        let audioPlayButton = document.createElement("p");
        audioPlayButton.innerHTML = "🎵";
        audioPlayButton.id = "MPB";
        audioPlayButton.onclick = function () {
            audio.play();
            audioPlayButton.style.display = "none";
        };
        document.body.appendChild(audioPlayButton);
        let saveTime = setInterval(function () {
            localStorage.setItem("musicTime-g", audio.currentTime);
        }, 250);
        if (deleteDataes == "deleteDataes") {
            audio.pause();
            clearInterval(saveTime);
            localStorage.removeItem("playMusicLocation-g");
            localStorage.removeItem("musicTime-g");
            window.location.reload();
            return;
        }
    }
}
function random(max = 0, min = 0) {
    if (max <= min) {
        return "error";
    }
    let output = Math.floor(Math.random() * ((max - min) + 1)) + min;
    let randomName = `lastRandom ${decodeURIComponent(window.location.pathname.split("/").pop())} -g`;
    while (output == Number(localStorage.getItem(randomName))) {
        output = Math.floor(Math.random() * ((max - min) + 1)) + min;
    }
    localStorage.setItem(randomName, output);
    return output;
}
function CWT(id, classFE, time = 1000) {
    document.getElementById(id).classList.add(classFE);
    setTimeout(function () {
        document.getElementById(id).classList.remove(classFE);
    }, time);
}
async function getRestorePoint(deleteAllDatas = false) {
    let restorePointInput = document.createElement("input");
    restorePointInput.type = "file";
    restorePointInput.accept = ".js";
    restorePointInput.style.display = "none";
    restorePointInput.click();
    restorePointInput.addEventListener("change", async function () {
        if (deleteAllDatas == true) {
            await deleteAllData();
        }
        let codeJS = URL.createObjectURL(restorePointInput.files[0]);
        if (codeJS != false) {
            let JS = document.createElement("script");
            JS.src = codeJS;
            document.body.appendChild(JS);
            window.location.href = "main.html";
        }
    });
}
function createRestorePoint() {
    let downloadRP = document.createElement("a");
    downloadRP.href = URL.createObjectURL(new Blob([localStorages.filter(word => word.endsWith("-g")).map(word => `localStorage.setItem("${word}", "${localStorage.getItem(word)}");`).join("\n")], { type: "text/plain" }));
    downloadRP.download = "نقطه ی بازیابی.js";
    downloadRP.click();
}
function deleteAllData() {
    let counter = localStorages.length;
    while (counter > 0) {
        let LSNFR = localStorages[counter - 1];
        if (LSNFR.slice(-2) == "-g") {
            localStorage.removeItem(LSNFR);
        }
        counter--;
    }
}