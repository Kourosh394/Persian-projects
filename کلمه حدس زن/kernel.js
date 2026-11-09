/*All rights reserved © 2026
Made by Kourosh Fathabadi*/
let money = Number(localStorage.getItem("money-g"));
let fileVersion = false;
let localStorages = Object.keys(localStorage).filter(LSFG => LSFG.endsWith("-g")).sort();
const downloadLink = "https://kourosh394.github.io/Persian-projects/کلمه%20حدس%20زن/کلمه%20حدس%20زن.zip";
const KPF = ["آموزگار", "ادب", "بهترین", "خوشحال", "دیروز", "فردا", "معلم", "نابود", "ناراحت", "پول", "پیدا", "کردگار", "گردش"];
if (localStorage.getItem("words-g") != null) {
    localStorage.removeItem("words-g");
    localStorage.setItem("Word location:/ -g", localStorages.filter(wordLSN => wordLSN.startsWith("W")).map(wordLSN => localStorage.getItem(wordLSN)).join("\n"));
}
if (localStorage.getItem("W1-g") != null) {
    localStorages.filter(wordLSN => wordLSN.startsWith("W") && wordLSN.length < 18).map(wordLSN => localStorage.removeItem(wordLSN));
}
document.addEventListener("keydown", function (keydownforbug) {
    if (keydownforbug.key == "Escape") {
        document.body.innerHTML = `<h1>الان میتوانید با خیال راحت بازی رو ببندید.</h1>
        <button onclick="createRestorePoint()">دانلود نقطه ی بازیابی</button>`;
    }
});
if (window.location.protocol == "file:") {
    fileVersion = true;
}
window.onload = function () {
    window.addEventListener("error", function (bug) {
        message(`error: ${bug.error}.\nلطفا به کوروش بگویید.`);
    });
    if (window.location.hostname != "kourosh394.github.io" && fileVersion == false) {
        message(`این بازی تقلبی کلمه حدس زن است. لینک تقلبی: ${decodeURIComponent(window.location.href)} لینک اصلی: https://kourosh394.github.io/Persian-projects/کلمه حدس زن/main.html "بله" را بزنید تا به نسخه ی اصلی بروید.`, function () {
            window.location.href = "https://kourosh394.github.io/Persian-projects/کلمه حدس زن/main.html";
        });
    }
}
function checkLScacheG(LSValue) {
    if (localStorage.getItem("cache-g") != LSValue) {
        window.location.href = "main.html";
        return;
    }
}
function moneyG() {
    if (document.getElementById("money") == null) {
        document.body.appendChild(Object.assign(document.createElement("p"), { id: "money" }));
    }
    document.getElementById("money").innerText = `💵: ${money}`;
    localStorage.setItem("money-g", money);
}
function music(deleteDataes) {
    let musicLocation = localStorage.getItem("musicLocation-g");
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
function RLSSV() {
    localStorages = Object.keys(localStorage).filter(LSFG => LSFG.endsWith("-g")).sort();
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
    if (id != undefined) {
        document.getElementById(id).classList.add(classFE);
        setTimeout(function () {
            if (document.getElementById(id) != null) {
                document.getElementById(id).classList.remove(classFE);
            }
        }, time);
    }
}
function message(messageText, yesFunction) {
    let messageDiv;
    if (document.body.querySelector(".message") == null) {
        messageDiv = Object.assign(document.createElement("div"), { className: "message" })
    } else {
        messageDiv = document.body.querySelector(".message");
        messageDiv.innerHTML = "";
    }
    function close() {
        messageDiv.style.display = "none";
    }
    const header = document.createElement("header");
    header.appendChild(Object.assign(document.createElement("p"), { innerText: "X", onclick: close }));
    messageDiv.appendChild(header);
    messageDiv.appendChild(Object.assign(document.createElement("p"), { innerText: messageText }));
    if (yesFunction == undefined) {
        messageDiv.appendChild(Object.assign(document.createElement("button"), { innerText: "باشه", onclick: close }));
    } else {
        messageDiv.appendChild(Object.assign(document.createElement("button"), { innerText: "خیر", onclick: close }));
        messageDiv.appendChild(Object.assign(document.createElement("button"), {
            innerText: "بله", onclick: function () {
                yesFunction();
                close();
            }
        }));
    }
    if (document.body.querySelector(".message") == null) {
        document.body.appendChild(messageDiv);
    } else {
        messageDiv.style.display = "";
    }
}
function hold(element, functionHold, repeat) {
    element.addEventListener("pointerdown", function () {
        let HI;
        let HTO;
        if (repeat) {
            HTO = setTimeout(function () {
                HI = setInterval(functionHold, 100);
            }, 750);
        } else {
            HTO = setTimeout(functionHold, 750);
        }
        element.addEventListener("pointerup", CELATO);
        element.addEventListener("pointercancel", CELATO);
        function CELATO() {
            clearTimeout(HTO);
            if (HI != undefined) {
                clearInterval(HI);
            }
            element.removeEventListener("pointerup", CELATO);
            element.removeEventListener("pointercancel", CELATO);
        }
    });
}
function giveTextFile(element = document.body.appendChild(Object.assign(document.createElement("input"), { type: "file", accept: ".js" }))) {
    element.click();
    return new Promise(function (returnText) {
        element.addEventListener("change", async function () {
            const codeJS = await element.files[0].text();
            if (codeJS == "") {
                returnText(null);
            } else {
                returnText(codeJS);
            }
        });
    }, { once: true });
}
async function getRestorePoint(doWorkWith) {
    let codeJS = await giveTextFile();
    if (doWorkWith == "DADAT") {
        codeJS = "deleteAllData()\n" + codeJS;
    }
    if (codeJS != null) {
        document.body.appendChild(Object.assign(document.createElement("script"), { innerHTML: codeJS }));
        window.location.href = "main.html";
    }
}
function createRestorePoint() {
    let downloadRP = document.createElement("a");
    downloadRP.href = URL.createObjectURL(new Blob([localStorages.map(word => `localStorage.setItem("${word}", "${localStorage.getItem(word).replaceAll("\n", "\\n")}");`).join("\n")], { type: "text/plain" }));
    downloadRP.download = "نقطه ی بازیابی.js";
    downloadRP.click();
}
function deleteAllData() {
    localStorages.map(LSS => localStorage.removeItem(LSS));
}