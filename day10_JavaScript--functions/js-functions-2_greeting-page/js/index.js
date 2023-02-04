console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current time: new Date().getHours() )
(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting(dayTime) {
  // Code here
  if (dayTime >= 6 || dayTime <= 12) {
    return "Good Morning";
  } else if (dayTime >= 13 || dayTime <= 18) {
    return "Good Afternoon";
  } else if (dayTime >= 19 || dayTime <= 22) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
}

function getDayColor(weekDay) {
  // Code here
  if (weekDay === 1) {
    return "darkgray";
  } else if (weekDay <= 5) {
    return "lightblue";
  } else {
    return "hotpink";
  }
}

display.textContent = getGreeting(new Date().getHours());
document.body.style.backgroundColor = getDayColor(new Date().getDay());
