/* DOM VARIABLES */
const dateTime = document.getElementById("date-time");
const displayUpdate = document.getElementById("updated-date");
const copyDateBtn = document.getElementById("copydate-btn");
const leftGradientInput = document.getElementById("left-gradient-input");
const rightGradientInput = document.getElementById("right-gradient-input");
const chosenLeftGradient = document.getElementById("chosen-left-gradient");
const chosenRightGradient = document.getElementById("chosen-right-gradient");
const randomGradientBtn = document.querySelector(".random-gradient");
const jokeContainer = document.getElementById("joke-container");
const body = document.body;

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
// FUNCTION to set background gradient
const setGradientBackground = (leftColor, rightColor) => {
    body.style.background = `linear-gradient(to right, ${leftColor}, ${rightColor})`;
}

chosenLeftGradient.textContent = leftGradientInput.value;
chosenRightGradient.textContent = rightGradientInput.value;

setGradientBackground(leftGradientInput.value, rightGradientInput.value);

// FUNCTION: display the chosen left & right gradient
const displayLeftGradient = () => {
    const color = leftGradientInput.value;
    chosenLeftGradient.textContent = color;
    setGradientBackground(color, rightGradientInput.value);
}

const displayRightGradient = () => {
    const color = rightGradientInput.value;
    chosenRightGradient.textContent = color;
    setGradientBackground(leftGradientInput.value, color);
}

// FUNCTION: generate random color
const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

// FUNCTION: generate random gradient 
const generateRandomGradient = () => {
    const leftColor = getRandomColor();
    const rightColor = getRandomColor();
    leftGradientInput.value = leftColor;
    rightGradientInput.value = rightColor;
    displayLeftGradient();
    displayRightGradient();
}

// ADDEVENT LISTENERS
copyDateBtn.addEventListener("click", copyDate);
jokeContainer.addEventListener("click", reloadPage);
leftGradientInput.addEventListener("input", displayLeftGradient);
rightGradientInput.addEventListener("input", displayRightGradient);
randomGradientBtn.addEventListener("click", generateRandomGradient);

// LOAD LAST COPIED DATE ON PAGE LOAD
loadLastCopied();