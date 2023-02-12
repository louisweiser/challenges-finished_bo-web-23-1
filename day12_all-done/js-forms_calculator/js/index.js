console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  const formElements = event.target.elements;
  const numberOne = Number(formElements.numberA.value);
  const numberZwo = Number(formElements.numberB.value);

  if (formElements.addition.checked === true) {
    result = add(numberOne, numberZwo);
  } else if (formElements.subtraction.checked) {
    result = subtract(numberOne, numberZwo);
  } else if (formElements.multiplication.checked) {
    result = multiply(numberOne, numberZwo);
  } else {
    result = divide(numberOne, numberZwo);
  }
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
