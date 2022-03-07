// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const doubles = nums.map(function (num) {
//   return num * 2;
// });

// nums.forEach(function (num) {
//   if (num % 2 === 0) {
//     console.log(num);
//   }
// });

// for (num of nums) {
//   console.log(num);
// }

// const movies = [
//   { title: "Amadeus", score: 99 },
//   { title: "Stand By Me", score: 85 },
//   { title: "Parasite", score: 95 },
//   { title: "Alien", score: 90 },
// ];

// movies.forEach(function (movie) {
//   console.log(`${movie.title} - ${movie.score}/100`);
// });

// const titles = movies.map(function (movie) {
//   return movie.title.toUpperCase();
// });

// DO NOT ALTER THE FOLLOWING CODE:
// const fullNames = [
//   { first: "Albus", last: "Dumbledore" },
//   { first: "Harry", last: "Potter" },
//   { first: "Hermione", last: "Granger" },
//   { first: "Ron", last: "Weasley" },
//   { first: "Rubeus", last: "Hagrid" },
//   { first: "Minerva", last: "McGonagall" },
//   { first: "Severus", last: "Snape" },
// ];

// // Write your code here
// const firstNames = fullNames.map(function (fullName) {
//   return fullName.first;
// });

// const add = (x, y) => {
//   return x + y;
// };

// const square = (num) => {
//   return num * num;
// };

// const rollDie = () => {
//   return Math.floor(Math.random() * 6) + 1;
// };

// const greet = (str) => {
//   return `Hey ${str}!`;
// };

// const rollDie = () => Math.floor(Math.random() * 6) + 1;

// const add = (x, y) => x + y;

const movies = [
  { title: "Amadeus", score: 99 },
  { title: "Stand By Me", score: 85 },
  { title: "Parasite", score: 95 },
  { title: "Alien", score: 90 },
];

// const newMovies = movies.map(function (movie) {
//   return `${movie.title} - ${movie.score / 10}`;
// });

const newMoives = movies.map((movie) => `${movie.title} - ${movie.score / 10}`);
