const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const a = numbers.filter((n) => {
  return n < 10;
});

const movies = [
  { title: "Amadeus", score: 99, year: 1984 },
  { title: "Sharknado", score: 35, year: 2013 },
  { title: "13 Going On 30", score: 70, year: 2004 },
  { title: "Waterworld", score: 62, year: 1995 },
  { title: "Jingle All the Way", score: 71, year: 1996 },
  { title: "Parasite", score: 95, year: 2019 },
];

// const goodMovies = movies.filter((m) => m.score > 90);
// const goodTitles = goodMovies.map((m) => m.title);
const goodTitles = movies.filter((m) => m.score > 80).map((m) => m.title);

const badMovies = movies.filter((m) => m.score < 70);
const recentMovies = movies.filter((m) => m.year > 2000);

let validUserNames = function (arr) {
  return arr.filter((name) => name.length < 10);
};
