// Timing Inputs
const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");
const millisecondsInput = document.getElementById("milliseconds");

hoursInput.addEventListener("input", filterTimeInput);
minutesInput.addEventListener("input", filterTimeInput);
secondsInput.addEventListener("input", filterTimeInput);
millisecondsInput.addEventListener("input", filterTimeInput);

millisecondsInput.addEventListener("input", (e) => {
    let value = parseInt(e.target.value);

    if (!value || value >= 50) {
        millisecondsInput.style.borderColor = "#0f172b";
    };

    if (value < 50) {
        millisecondsInput.style.borderColor = "#82181a";
    };
});

// Mouse Button Inputs
const leftClickButton = document.getElementById("left_click");
const rightClickButton = document.getElementById("right_click");

// Keybind Control
const setKeybindButton = document.getElementById("set_keybind");
const keybindDisplay = document.getElementById("keybind_display");
let currentKeybind = "F6";
let isListening = false;

setKeybindButton.addEventListener('click', (e) => {
    if (isListening == false) {
        isListening = true;
        setKeybindButton.setAttribute("value", "Listening...");
        keybindDisplay.setAttribute("value", "");

        toggleButton(leftClickButton, false);
        toggleButton(rightClickButton, false);
        toggleButton(hoursInput, false);
        toggleButton(minutesInput, false);
        toggleButton(secondsInput, false);
        toggleButton(millisecondsInput, false);
        toggleButton(startButton, false);
        toggleButton(stopButton, false);
    } else {
        isListening = false;
        setKeybindButton.setAttribute("value", "Set Keybind");
        keybindDisplay.setAttribute("value", currentKeybind);
        
        toggleButton(leftClickButton, true);
        toggleButton(rightClickButton, true);
        toggleButton(hoursInput, true);
        toggleButton(minutesInput, true);
        toggleButton(secondsInput, true);
        toggleButton(millisecondsInput, true);
        toggleButton(startButton, true);
        toggleButton(stopButton, true);
    };
});

// Auto Clicker Control
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");

startButton.addEventListener("click", (e) => {
    const isEnabled = startButton.getAttribute("data-enabled");

    if (isEnabled !== "enabled") {
        startButton.setAttribute("data-enabled", "enabled");
        startButton.style.backgroundColor = "#0d542b";
    };
});

stopButton.addEventListener("click", (e) => {
    const isEnabled = startButton.getAttribute("data-enabled");

    if (isEnabled == "enabled") {
        startButton.setAttribute("data-enabled", "disabled");
        startButton.style.backgroundColor = "#020618";
    };
});

// Other Functions
function toggleButton(button, toggle) {
    if (toggle) {
        button.removeAttribute("disabled");
    } else {
        button.setAttribute("disabled", "disabled");
    };
};

function filterTimeInput(e) {
    let filteredValue = e.target.value.replace(/[^0-9]/gm, "");

    e.target.value = filteredValue;
};