const date = document.querySelector("#theDate");
const todayIs = getCurrentDate();


function showCurrentDate() {
    let currentDate = new Date();
    let displayDate = currentDate.toString();
    alert(displayDate);
}

function pasteThis() {
    let pasteDate = "Tue Nov 15 2022 21:19:30 GMT-0500 (Eastern Standard Time)";
    date.textContent = pasteDate;
}
