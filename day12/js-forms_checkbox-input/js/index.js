console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  const formElements = event.target.elements;

  if (formElements.tos.checked === false) {
    console.log("error");
    showTosError();
    return;
  }
  hideTosError();
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});

// Aufgabe: Can you make the error message hidden initially (before the form is submitted)?
//Ich weiß nicht wie umsetzten ohne HTML zu berühren
form.addEventListener("click", () => {
  /* Ansatz */
  console.log("click");
});
