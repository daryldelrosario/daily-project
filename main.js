const date = document.querySelector("#theDate");
const todayIs = getCurrentDate();

function showCurrentDate() {
    let currentDate = new Date();
    let displayDate = currentDate.toString();
    alert(displayDate);
}

function pasteThis() {
    let pasteDate = "Mon Nov 21 2022 19:55:09 GMT-0500 (Eastern Standard Time)"
    date.textContent = pasteDate;
}
