const date = document.querySelector("#theDate");
const todayIs = getCurrentDate();

function showCurrentDate() {
    let currentDate = new Date();
    let displayDate = currentDate.toString();
    alert(displayDate);
}

function pasteThis() {
    let pasteDate = "Thu Nov 24 2022 00:45:07 GMT-0500 (Eastern Standard Time)"
    date.textContent = pasteDate;
}
