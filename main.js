const date = document.querySelector("#theDate");
const todayIs = getCurrentDate();

function showCurrentDate() {
    let currentDate = new Date();
    let displayDate = currentDate.toString();
    alert(displayDate);
}

function pasteThis() {
    let pasteDate = "Tue Nov 22 2022 19:22:25 GMT-0500 (Eastern Standard Time)"
    date.textContent = pasteDate;
}
