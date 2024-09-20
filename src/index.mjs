import "./styles.css";

const calculatorDisplay = document.getElementById("calculator-display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const decimalButton = document.querySelector(".decimals");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const equalsButton = document.querySelector(".equals");

const operators = ["+", "-", "/", "*"];

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculatorDisplay.value += button.textContent;
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const lastChar =
      calculatorDisplay.value[calculatorDisplay.value.length - 1];

    if (operators.includes(lastChar)) {
      return;
    }

    if (calculatorDisplay.value === "" && button.textContent !== "-") {
      return;
    }

    calculatorDisplay.value += button.textContent;
  });
});

decimalButton.addEventListener("click", () => {
  let currentNumber = "";
  for (let i = calculatorDisplay.value.length - 1; i >= 0; i--) {
    if (operators.includes(calculatorDisplay.value[i])) {
      break;
    }

    currentNumber += calculatorDisplay.value[i];
  }

  if (currentNumber.includes(".")) {
    return;
  }

  calculatorDisplay.value += ".";
});

clearButton.addEventListener("click", () => {
  calculatorDisplay.value = "";
});

deleteButton.addEventListener("click", () => {
  calculatorDisplay.value = calculatorDisplay.value.slice(0, -1);
});

equalsButton.addEventListener("click", () => {
  try {
    calculatorDisplay.value = eval(calculatorDisplay.value);
  } catch (error) {
    calculatorDisplay.value = "Error";
  }
});
