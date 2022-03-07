// function callTwice(func) {
//   func();
//   func();
// }

// function callTenTimes(func) {
//   for (let i = 0; i < 10; i++) {
//     func();
//   }
// }

// function rollDie() {
//   const roll = Math.floor(Math.random() * 6) + 1;
//   console.log(roll);
// }

// // callTwice(rollDie);
// callTenTimes(rollDie);

// function makeMysteryFunc() {
//   const rand = Math.random();
//   if (rand > 0.5) {
//     return function () {
//       console.log("congrats, i am a good function!".toUpperCase());
//       console.log("you win a million dollars!".toUpperCase());
//     };
//   } else {
//     return function () {
//       alert("you have been infected by a computer virus".toUpperCase());
//       alert("stop trying to close this window!".toUpperCase());
//       alert("stop trying to close this window!".toUpperCase());
//       alert("stop trying to close this window!".toUpperCase());
//       alert("stop trying to close this window!".toUpperCase());
//     };
//   }
// }

// let func = makeMysteryFunc();
// func();

// function isBetween(num) {
//   return num >= 50 && num <= 100;
// }

function makeBetweenFunc(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}

let isChild = makeBetweenFunc(0, 18);
let isAdult = makeBetweenFunc(19, 64);
let isSenior = makeBetweenFunc(65, 120);

// function isBetween(num, min, max) {
//   return num >= min && num <= max;
// }
