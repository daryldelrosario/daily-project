const date = document.querySelector("#theDate");
const todayIs = getCurrentDate();

function showCurrentDate() {
    let currentDate = new Date();
    let displayDate = currentDate.toString();
    alert(displayDate);
}

function pasteThis() {
    let pasteDate = "Sun Nov 20 2022 11:45:44 GMT-0500 (Eastern Standard Time)"
    date.textContent = pasteDate;
}
