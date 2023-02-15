const icon = document.querySelector('[data-js="status-icon"]');
const button = document.querySelector('[data-js="status-button"]');

const apiStatusUrl = "https://example-apis.vercel.app/api/status";

// Something needs to change here…
// ↙️
async function checkIfApiIsAvailable() {
  /**
   * Hint 1:
   * Use the `fetch()` function and pass the `apiStatusUrl` into it
   *
   * Hint 2:
   * The fetch function returns a promise which resolves to a Response
   * object once it is ready.
   *
   * Hint 3:
   * The Response object has a `ok` property which is true if the response
   * is okay and false if it is not.
   **/
  // --v-- write your code here --v--
  button.disabled = true;
  button.textContent = "Loading ...";
  icon.textContent = "⏳";
  console.log("before fetch");
  try {
    const response = await fetch(apiStatusUrl);
    console.log(response);
    if (response.ok) {
      icon.textContent = "✅";
    } else {
      icon.textContent = "❌";
    }
  } catch (error) {
    console.log(error);
  }
  button.disabled = false; //bei solchen Geschichten butten wehrend asynchronen vorgängen butten deaktivieren um daten spam zu verhindern und fehler oder abstürtze zu vermeiden
  button.textContent = "Check API Status";
  // Ältere Schreibweise mit then():
  // const promise = fetch(apiStatusUrl);
  // console.log(promise);
  // promise.then((response) => {
  //   console.log(response);
  //   if (response.ok) {
  //     icon.textContent = "✅";
  //   } else {
  //     icon.textContent = "❌";
  //   }
  // });
  console.log("after fetch");
  // --^-- write your code here --^--
}

button.addEventListener("click", () => {
  checkIfApiIsAvailable();
});
