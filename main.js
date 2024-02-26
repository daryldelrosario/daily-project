const logo = document.getElementById("logo");
logo.innerHTML = "@daryldevcodes";
logo.style.fontSize = "22px";
logo.style.fontWeight = "700";

let currentDate = new Date();
let displayDate = currentDate.toString();
const today = document.querySelector("#today");
today.textContent = displayDate;

let lastDate = "Mon Feb 26 2024 07:51:21 GMT-0500 (Eastern Standard Time)";
const lastStreak = document.querySelector("#last-streak");
lastStreak.textContent = lastDate;

const date = document.querySelector("#theDate");
let copiedDate = document.querySelector("#today").textContent;
function copyDate() {
    try {
        navigator.clipboard.writeText(copiedDate);
        console.log("First One");
        alert("Copied " + copiedDate);
    } catch(err) {
        console.log("Second One");
        alert("Failed to copy: " , err);
    }
}