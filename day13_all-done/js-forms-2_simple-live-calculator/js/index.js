console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');

firstInput.addEventListener("input", () => {
  result.textContent = Number(firstInput.value) * Number(secondInput.value);
});

secondInput.addEventListener("input", () => {
  result.textContent = Number(firstInput.value) * Number(secondInput.value);
});
