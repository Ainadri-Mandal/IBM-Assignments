document.addEventListener("DOMContentLoaded", function () {
    const display = document.querySelector(".display");
    const buttons = document.querySelectorAll(".btn");
    let currentInput = "";
    let operator = "";
    let previousInput = "";

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.innerText;

            if (button.classList.contains("clear")) {
                currentInput = "";
                previousInput = "";
                operator = "";
                display.innerText = "0";
            } 
            else if (button.classList.contains("backspace")) {
                currentInput = currentInput.slice(0, -1);
                display.innerText = currentInput || "0";
            }
            else if (button.classList.contains("operator")) {
                if (currentInput !== "") {
                    previousInput = currentInput;
                    operator = value;
                    currentInput = "";
                }
            }
            else if (button.classList.contains("equals")) {
                if (previousInput !== "" && currentInput !== "") {
                    currentInput = calculate(previousInput, currentInput, operator);
                    display.innerText = currentInput;
                    previousInput = "";
                    operator = "";
                }
            }
            else {
                if (value === "." && currentInput.includes(".")) return;
                currentInput += value;
                display.innerText = currentInput;
            }
        });
    });

    function calculate(num1, num2, operator) {
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        switch (operator) {
            case "+": return (a + b).toString();
            case "−": return (a - b).toString();
            case "×": return (a * b).toString();
            case "÷": return b !== 0 ? (a / b).toString() : "Error";
            case "%": return (a % b).toString();
            default: return num2;
        }
    }
});
