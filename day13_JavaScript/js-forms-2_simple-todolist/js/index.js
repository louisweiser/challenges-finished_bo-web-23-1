console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const headline = document.createElement("li");
  headline.textContent = data.headline;
  todoList.append(headline);

  const task = document.createElement("li");
  task.textContent = data.task;
  headline.append(task);

  event.target.reset();
  event.target.headline.focus();
});
