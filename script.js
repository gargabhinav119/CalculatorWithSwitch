// Select the display screen element by its ID
const display = document.querySelector("#display");

// Select all the buttons
const buttons = document.querySelectorAll("button");

// Add click event listeners to each button
buttons.forEach((item) => {
    item.onclick = () => {
        // If the button is "C" (clear), clear the display
        if (item.id == "clear") {
            display.innerText = "";
        }
        // If the button is "<" (backspace), remove the last character from the display
        else if (item.id == "backspace") {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        }
        // If the display is not empty and the button is "=", calculate the result
        else if (display.innerText != "" && item.id == "equal") {
            display.innerText = eval(display.innerText);
        }
        // If the display is empty and the button is "=", show "Empty!" for 2 seconds
        else if (display.innerText == "" && item.id == "equal") {
            display.innerText = "Empty!";
            setTimeout(() => (display.innerText = ""), 2000);
        }
        // For all other buttons, append their value to the display
        else {
            display.innerText += item.id;
        }
    };
});

// Select the theme toggler button, calculator, and toggler icon
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");

let isDark = true; // Initialize the dark mode state

// Toggle dark and light themes when the theme toggler button is clicked
themeToggleBtn.onclick = () => {
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark = !isDark; // Toggle the theme mode
};
