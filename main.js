/* DOM VARIABLES */
const today = document.getElementById("today");
const lastStreak = document.getElementById("last-streak");
const logo = document.getElementById("logo");
const jokeContainer = document.getElementById("joke-container");

/* GOT TO CLEAN UP THIS CODE */
logo.innerHTML = "@daryldevcodes";
logo.style.fontSize = "22px";
logo.style.fontWeight = "700";

let currentDate = new Date();
let displayDate = currentDate.toString();

today.textContent = displayDate;

let lastDate = "Sat May 18 2024 06:11:19 GMT-0400 (Eastern Daylight Time)";

lastStreak.textContent = lastDate;


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
/* END OF CLEANING */

/* FETCH API EXERCISE */
const fetchJoke = async () => {
    try {
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        const data = await response.json();
        return data.value;
    } catch(error) {
        console.log("There was an error fetching the joke: ", error);
        alert(error);
    }
}

(async () => {
    try {
        const joke = await fetchJoke();
        jokeContainer.innerHTML = `<p>${joke}</p>`;
    } catch(error) {
        alert(error);
    }
})();