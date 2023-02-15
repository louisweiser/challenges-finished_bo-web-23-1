console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);

    if (response.ok) {
      console.log(response);
      const data = await response.json();
      console.log(data);
      console.log(data.results);
      console.log(data.results[4]);
      console.log(data.results[4].name);

      console.log(data.results[2].eye_color);
    }
  } catch (error) {
    console.log("Ups.. da hat etwas nicht geklappt.");
  }
}

fetchData();
