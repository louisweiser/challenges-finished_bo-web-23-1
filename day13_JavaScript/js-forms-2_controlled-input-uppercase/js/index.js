console.clear();

const input = document.querySelector('[data-js="toUpperCase"]');

input.addEventListener("input", () => {
  const newInput = input.value.toUpperCase();
  input.value = newInput;
});
