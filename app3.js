const value = document.querySelector(".value");
const ac = document.querySelector(".btnAc");
const pm = document.querySelector(".btnPm");
const percent = document.querySelector(".btnPercent");

// operators
const addition = document.querySelector(".btnAddition");
const subtraction = document.querySelector(".btnSubtraction");
const multiplication = document.querySelector(".btnMultiplication");
const division = document.querySelector(".btnDivision");
const equal = document.querySelector(".btnEqual");

// Numbers
const decimal = document.querySelector(".btnDecimal");
const number0 = document.querySelector(".btn-0");
const number1 = document.querySelector(".btn-1");
const number2 = document.querySelector(".btn-2");
const number3 = document.querySelector(".btn-3");
const number4 = document.querySelector(".btn-4");
const number5 = document.querySelector(".btn-5");
const number6 = document.querySelector(".btn-6");
const number7 = document.querySelector(".btn-7");
const number8 = document.querySelector(".btn-8");
const number9 = document.querySelector(".btn-9");
const numberArray = [
  number0,
  number1,
  number2,
  number3,
  number4,
  number5,
  number6,
  number7,
  number8,
  number9,
];
const numberButtons = document.querySelectorAll(".button");
const valueDisplay = document.querySelector(".value");
const valueMiniDisplay = document.querySelector(".valueMini");
let firstNumber = null;
let operator = null;
let result = "";

numberArray.map((numberArray) => {
  numberArray.addEventListener("click", () => {
    const buttonValue = numberArray.innerText;
    valueDisplay.textContent += buttonValue;
  });
});

function additionOperation() {
  const currentValue = parseFloat(valueDisplay.textContent);

  if (!isNaN(currentValue)) {
    firstNumber = currentValue;
    valueMiniDisplay.textContent = valueDisplay.textContent + " +";
    valueDisplay.textContent = "";

    operator = "+";
  }
}

addition.addEventListener("click", additionOperation);

function subtractionOperation() {
  const currentValue = parseFloat(valueDisplay.textContent);

  if (!isNaN(currentValue)) {
    firstNumber = currentValue;
    valueMiniDisplay.textContent = valueDisplay.textContent + " -";

    valueDisplay.textContent = "";
    operator = "-";
  }
}

subtraction.addEventListener("click", subtractionOperation);

multiplication.addEventListener("click", () => {
  const currentValue = parseFloat(valueDisplay.textContent);

  if (!isNaN(currentValue)) {
    if (firstNumber === null) {
      firstNumber = currentValue;
      valueMiniDisplay.textContent = valueDisplay.textContent + " *";
      valueDisplay.textContent = "";
      operator = "*";
    } else {
      const result = //
        console.log("sfirt:  /current", firstNumber, currentValue);
      valueDisplay.textContent = result;
      firstNumber = result;
    }
  }
});
division.addEventListener("click", () => {
  const currentValue = parseFloat(valueDisplay.textContent);

  if (!isNaN(currentValue)) {
    firstNumber = currentValue;
    valueMiniDisplay.textContent = valueDisplay.textContent + " /";
    valueDisplay.textContent = "";
    operator = "/";
  }
});
percent.addEventListener("click", () => {
  const currentValue = parseFloat(valueDisplay.textContent);
  if (!isNaN(currentValue)) {
    firstNumber = currentValue;
    valueMiniDisplay.textContent = valueDisplay.textContent + "%";
    valueDisplay.textContent = firstNumber / 100;
  }
});
equal.addEventListener("click", () => {
  const currentValue = parseFloat(valueDisplay.textContent);

  if (!isNaN(currentValue)) {
    if (firstNumber !== null && operator !== null) {
      let result = null;

      switch (operator) {
        case "+":
          result = firstNumber + currentValue;
          break;
        case "-":
          result = firstNumber - currentValue;
          break;
        case "*":
          result = firstNumber * currentValue;
          break;
        case "/":
          result = firstNumber / currentValue;
          break;
        default:
          break;
      }

      if (result !== null) {
        valueDisplay.textContent = result;
        valueMiniDisplay.textContent = "";
        firstNumber = result;
        operator = null;
      }
    }
  }
});
ac.addEventListener("click", () => {
  valueDisplay.textContent = "";
  firstNumber = null;
  operator = null;
});

pm.addEventListener("click", () => {
  valueDisplay.textContent = Math.abs(firstNumber) * -1;
});
