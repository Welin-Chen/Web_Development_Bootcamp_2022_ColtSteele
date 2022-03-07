const exams = [80, 98, 88, 70, 98, 99];

exams.every((score) => score > 75);

const movies = [
  { title: "Amadeus", score: 99, year: 1984 },
  { title: "Sharknado", score: 35, year: 2013 },
  { title: "13 Going On 30", score: 70, year: 2004 },
  { title: "Waterworld", score: 62, year: 1995 },
  { title: "Jingle All the Way", score: 71, year: 1996 },
  { title: "Parasite", score: 95, year: 2019 },
];

movies.some((movie) => movie.year > 2015);

// function allEvens(nums) {
//   return nums.every((num) => num % 2 === 0);
// }

function allEvens(nums) {
  return nums.every((num) => num % 2 === 0);
}
