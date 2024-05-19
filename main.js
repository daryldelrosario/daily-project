/* DOM VARIABLES */
const clock = document.getElementById("clock");
const copyDateBtn = document.getElementById("copydate-btn");
const jokeContainer = document.getElementById("joke-container");
// const today = document.getElementById("today");
// const lastStreak = document.getElementById("last-streak");
// const logo = document.getElementById("logo");

/* DYNAMIC CLOCK EXERCISE */
const updateClock = () => {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

updateClock();
setInterval(updateClock, 1000);

/* FETCH API EXERCISE */
const fetchJoke = async () => {
    try {
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.value;
    } catch(error) {
        console.error("There was an error fetching the joke: ", error);
        throw error;
    }
}

const displayJoke = async () => {
    try {
        const joke = await fetchJoke();
        jokeContainer.innerHTML = `<p>${joke}</p>`;
    } catch(error) {
        alert("Failed to display joke: " + error.message);
    }
}

displayJoke();

// FUNCTION: copyDate
const copyDate = () =>{
    console.log("You Copied The Date");
}

// ADDEVENT LISTENERS
copyDateBtn.addEventListener("click", copyDate);

/* GOT TO CLEAN UP THIS CODE */
// logo.innerHTML = "@daryldevcodes";
// logo.style.fontSize = "22px";
// logo.style.fontWeight = "700";

// let currentDate = new Date();
// let displayDate = currentDate.toString();

// today.textContent = displayDate;

// let lastDate = "Sat May 18 2024 06:11:19 GMT-0400 (Eastern Daylight Time)";

// lastStreak.textContent = lastDate;


// let copiedDate = document.querySelector("#today").textContent;
// function copyDate() {
//     try {
//         navigator.clipboard.writeText(copiedDate);
//         console.log("First One");
//         alert("Copied " + copiedDate);
//     } catch(err) {
//         console.log("Second One");
//         alert("Failed to copy: " , err);
//     }
// }
/* END OF CLEANING */

(async () => {
    try {
        const joke = await fetchJoke();
        jokeContainer.innerHTML = `<p>${joke}</p>`;
    } catch(error) {
        alert(error);
    }
})();