const date = document.querySelector("#theDate");
const todayIs = getCurrentDate();


function showCurrentDate() {
    let currentDate = new Date();
    let displayDate = currentDate.toString();
    alert(displayDate);
}

function pasteThis() {
    let pasteDate = "Fri Nov 18 2022 18:08:57 GMT-0500 (Eastern Standard Time)";
    date.textContent = pasteDate;
}
