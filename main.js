const date = document.querySelector("#theDate");
const todayIs = getCurrentDate();

function showCurrentDate() {
    let currentDate = new Date();
    let displayDate = currentDate.toString();
    alert(displayDate);
}

function pasteThis() {
    let pasteDate = "Wed Nov 23 2022 21:20:15 GMT-0500 (Eastern Standard Time)"
    date.textContent = pasteDate;
}
