console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

console.log(pizzaInput1.valueAsNumber);

pizzaInput1.addEventListener("input", () => {
  // write your code here
  calculatePizzaGain(pizzaInput1.valueAsNumber, pizzaInput2.valueAsNumber);
  updatePizzaDisplay(1, pizzaInput1.valueAsNumber);
  updateOutputColor(pizzaInput1.valueAsNumber, pizzaInput2.valueAsNumber);
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
  calculatePizzaGain(pizzaInput1.valueAsNumber, pizzaInput2.valueAsNumber);
  updatePizzaDisplay(2, pizzaInput2.valueAsNumber);
  updateOutputColor(pizzaInput1.valueAsNumber, pizzaInput2.valueAsNumber);
});

// Task 1

function calculatePizzaGain(diameter1, diameter2) {
  // write your code here
  /* (area2 - area1) / area1 * 100 */
  const area1 = Math.PI * Math.pow(diameter1, 2);
  const area2 = Math.PI * Math.pow(diameter2, 2);
  const proz = Math.round(((area1 - area2) / area1) * 100);
  output.textContent = proz;
}

// Task 2

function updatePizzaDisplay(pizzaElement, newSize) {
  // write your code here
  if (pizzaElement === 1) {
    pizza1.style.width = (newSize / 24) * 100 + "px";
  } else if (pizzaElement === 2) {
    pizza2.style.width = (newSize / 24) * 100 + "px";
  }
}

// Task 3

function updateOutputColor(size1, size2) {
  // write your code here
  if (size1 < size2) {
    outputSection.style.backgroundColor = "var(--red)";
  } else {
    outputSection.style.backgroundColor = "var(--green)";
  }
}
