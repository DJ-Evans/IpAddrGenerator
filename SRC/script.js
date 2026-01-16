let masterIp = "0"
let cam1 = ""
let cam2 = ""
let cam3 = ""
let cam4 = ""
let cam5 = ""
let ptz = ""
let wolfCynap = ""
let muteHub = ""
let ftrClock = ""
let wyreStorm = ""
let crestron = ""
let biamp = ""
let pdu = ""
let isUpgraded = 0
console.log(masterIp)


function generate(masterIp) {
    console.log(masterIp);
    let splitIp = masterIp.split('.');
    let firstDigit = splitIp.slice(0, -1).join(".");
    let lastDigit = splitIp.slice(-1);
    cam1 = parseInt(lastDigit) + 15
    cam2 = parseInt(lastDigit) + 16
    cam3 = parseInt(lastDigit) + 17
    cam4 = parseInt(lastDigit) + 18
    cam5 = parseInt(lastDigit) + 38
    ptz = parseInt(lastDigit) + 19
    wolfCynap = parseInt(lastDigit) + 31
    muteHub = parseInt(lastDigit) + 10
    ftrClock = parseInt(lastDigit) + 11
    wyreStorm = parseInt(lastDigit) + 8
    crestron = parseInt(lastDigit) + 6
    biamp = parseInt(lastDigit) + 3
    pdu = parseInt(lastDigit) + 12

    cam1Display.textContent = firstDigit+"."+cam1
    cam2Display.textContent = firstDigit+"."+cam2
    cam3Display.textContent = firstDigit+"."+cam3
    cam4Display.textContent = firstDigit+"."+cam4
    cam5Display.textContent = firstDigit+"."+cam5
    ptzDisplay.textContent = firstDigit+"."+ptz
    wolfCynapDisplay.textContent = firstDigit+"."+wolfCynap
    muteHubDisplay.textContent = firstDigit+"."+muteHub
    ftrClockDisplay.textContent = firstDigit+"."+ftrClock
    wyreStormDisplay.textContent = firstDigit+"."+wyreStorm
    crestronDisplay.textContent = firstDigit+"."+crestron
    biampDisplay.textContent = firstDigit+"."+biamp
    pduDisplay.textContent = firstDigit+"."+pdu
}

function onClickSubmit(event) {
    masterIp = document.getElementById("masterIp").value;
    console.log(masterIp);
    if (event.target.tagName !== "BUTTON") {
        return;
    }
    else {
        generate(masterIp);
    }
}


const submitBtn = document.querySelector('#submit').addEventListener('click', onClickSubmit);

const cam1Display = document.querySelector("#cam1");
const cam2Display = document.querySelector("#cam2");
const cam3Display = document.querySelector("#cam3");
const cam4Display = document.querySelector("#cam4");
const cam5Display = document.querySelector("#cam5");
const ptzDisplay = document.querySelector("#ptz");
const wolfCynapDisplay = document.querySelector("#wolfCynap");
const muteHubDisplay = document.querySelector("#muteHub");
const ftrClockDisplay = document.querySelector("#ftrClock");
const wyreStormDisplay = document.querySelector("#wyreStorm");
const crestronDisplay = document.querySelector("#crestron");
const biampDisplay = document.querySelector("#biamp");
const pduDisplay = document.querySelector("#pdu"); 
