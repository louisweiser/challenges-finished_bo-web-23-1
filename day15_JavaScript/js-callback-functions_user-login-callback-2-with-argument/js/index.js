console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!

function showWelcomeMessage(text) {
  console.log(text);
}

handleUserLogin(showWelcomeMessage);

handleUserLogin((text) => {
  console.log(text);
});
