// let die1 = Math.floor(Math.random() * 6) + 1;
// console.log(die1);

function singSong() {
  console.log("DO");
  console.log("RE");
  console.log("MI");
}

// singSong();
// singSong();
// singSong();
// singSong();
// singSong();

function greet(firstName, lastName) {
  console.log(`Hey, ${firstName} ${lastName[0]}.!`);
}

function repeat(str, numTimes) {
  let result = "";
  for (let i = 0; i < numTimes; i++) {
    result += str;
  }
  console.log(result);
}

function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return false;
  }
  return x + y;
}

// DEFINE YOUR FUNCTION BELOW:
function capitalize(str) {
  let letter = str[0].toUpperCase();
  return letter + str.slice(1, str.length);
}

// DEFINE YOUR FUNCTION BELOW:
function returnDay(day) {
  let weekDay = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday",
  };
  let returnDay = weekDay[day];
  if (returnDay !== undefined) {
    return returnDay;
  }
  return null;
}
