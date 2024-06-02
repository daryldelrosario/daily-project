/* DOM VARIABLES */
const dateTime = document.getElementById("date-time");
const displayUpdate = document.getElementById("updated-date");
const copyDateBtn = document.getElementById("copydate-btn");
const leftGradientInput = document.getElementById("left-gradient-input");
const rightGradientInput = document.getElementById("right-gradient-input");
const chosenLeftGradient = document.getElementById("chosen-left-gradient");
const chosenRightGradient = document.getElementById("chosen-right-gradient");
const jokeContainer = document.getElementById("joke-container");

/* DYNAMIC CLOCK EXERCISE */
const updateDateTime = () => {
    const now = new Date();

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[now.getDay()];

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[now.getMonth()];

    const day = now.getDate();
    const year = now.getFullYear();

    const hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const amPM = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

    const formattedDateTime = `${dayOfWeek}, ${month} ${day}, ${year} @ ${formattedHours}:${minutes}:${seconds} ${amPM}`

    dateTime.textContent = formattedDateTime;
}

updateDateTime();
setInterval(updateDateTime, 1000);

// FUNCTION: copyDate
const copyDate = () => {
    const capturedDate = dateTime.textContent;
    try {
        navigator.clipboard.writeText(capturedDate);
        alert("Captured Date: " + capturedDate);
        updateLastCopied(capturedDate);
    } catch(err) {
        alert("Failed to copy: ", err);
    }
}

// FUNCTION: updateLastCopied
const updateLastCopied = (capturedDate) => {
    displayUpdate.textContent = capturedDate;
    localStorage.setItem("lastCopiedDate", capturedDate);
}

// FUNCTION: loadLastCopied
const loadLastCopied = () => {
    const lastCopiedDate = localStorage.getItem("lastCopiedDate");
    if(lastCopiedDate) {
        displayUpdate.textContent = lastCopiedDate;
    }
}

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

// FUNCTION reloadPage
const reloadPage = () => {
    location.reload();
}

/* BACKGROUND COLOR GRADIENT GENERATOR EXERCISE */
chosenLeftGradient.textContent = leftGradientInput.value;
chosenRightGradient.textContent = rightGradientInput.value;
// FUNCTION: display the chosen left & right gradient
const displayLeftGradient = () => {
    const color = leftGradientInput.value;
    chosenLeftGradient.textContent = color;
}

const displayRightGradient = () => {
    const color = rightGradientInput.value;
    chosenRightGradient.textContent = color;
}

// ADDEVENT LISTENERS
copyDateBtn.addEventListener("click", copyDate);
jokeContainer.addEventListener("click", reloadPage);
leftGradientInput.addEventListener("input", displayLeftGradient);
rightGradientInput.addEventListener("input", displayRightGradient);

// LOAD LAST COPIED DATE ON PAGE LOAD
loadLastCopied();