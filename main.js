const date = document.querySelector("#theDate");
const todayIs = getCurrentDate();

function showCurrentDate() {
    let currentDate = new Date();
    let displayDate = currentDate.toString();
    alert(displayDate);
}

function pasteThis() {
    let pasteDate = "Sat Nov 19 2022 12:53:16 GMT-0500 (Eastern Standard Time)"
    date.textContent = pasteDate;
}
