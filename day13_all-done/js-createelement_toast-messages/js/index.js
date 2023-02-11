console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  const createElement = document.createElement("li");
  createElement.textContent = "hello";
  createElement.classList.add("toast-container__message");
  toastContainer.append(createElement);
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  toastContainer.innerHTML = `<li class="toast-container__message">I'm a toast message.</li>
  `;
});
