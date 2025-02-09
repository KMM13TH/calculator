// Access all the elements in the calculartor
let historyValue = document.getElementById("history-value");
let outputValue = document.getElementById("output-value");

let clearButton = document.getElementById("clear");
let backspaceButton = document.getElementById("backspace");
let equalsButton = documents.getElementById("=");

let currentInput = "";
let perviousInput = "";
let operator = "";

function updateDisplay(value) {
    outputValue.textContent = value;
}

function addToOutput(value) {
    currentInput = currentInput + value;
    outputValue.textContent = currentInput;
}

clearButton.onclick = function () {
    currentInput = "";
    previousInput = "";
    operator = "";
    outputValue.textContent = "";
    historyValue.textContent = "";
}

backspaceButton.onclick = function () {
    currentInput = currentInput.slice(0, -1)
    outputValue.textContent = currentInput;
}

function calculate() {
    let result;
    let num1 = parseFloat(previousInput);
    let num2 = parseFloat(currentInput);

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 != 0) {
                result = num1 / num2;
            } else {
                result = "Error";
            }
            break;
        default:
            result = "Error";

    }
    return result;
}

equalsButton.onclick = function () {
    if (previousInput != "" && currentInput != "") {
        let result = calculate();
        historyValue.textContent = previousInput + " " + operator + " " + currentInput;
        outputValue.textContent = result;
        currentInput = result.toString();
        previousInput = "";
        operator = "";
    }
}

// Event Listener to button number and operator 
let buton = document.querySelectorAll(".number, .operator");

button.forEach(function (button) {
    button.addEventListener("click", function () {
        let buttonValue = button.textContent;
        if (["+", "-", "*", "/"].includes(buttonValue)) {
            if (previousInput == "") {
                previousInput = currentInput;
                currentInput = "";
            }
            operator = buttonValue;
        } else {
            addToOutput(buttonValue);
        }
    });

});
