console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const success = document.querySelector('[data-js="success"]');

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
  success.textContent = "Complaint successfully submitted!";
  form.remove();
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});

// Aufgabe: Can you make the error message hidden initially (before the form is submitted)?
form.addEventListener("click", () => {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  if (data.tos === "on") {
    hideTosError();
  } else {
    showTosError();
  }
});
