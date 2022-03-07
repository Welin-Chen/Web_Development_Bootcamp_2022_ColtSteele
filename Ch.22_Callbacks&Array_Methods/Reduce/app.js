// const prices = [10, 23, 5, 43, 38, 59, 19];

// let total = 0;
// for (price of prices) {
//   total += price;
// }

// console.log(total);

// let total2 = prices.reduce((total, price) => {
//   return total + price;
// });
// console.log(total2);

// let sum = prices.reduce((total, price) => total + price);
// console.log(sum);

// let minPrice = prices.reduce((min, currentPrice) => {
//   if (min > currentPrice) {
//     return currentPrice;
//   }
//   return min;
// });
// console.log(minPrice);

const movies = [
  { title: "Amadeus", score: 99, year: 1984 },
  { title: "Sharknado", score: 35, year: 2013 },
  { title: "13 Going On 30", score: 70, year: 2004 },
  { title: "Waterworld", score: 62, year: 1995 },
  { title: "Jingle All the Way", score: 71, year: 1996 },
  { title: "Parasite", score: 95, year: 2019 },
];

const highRatedMovie = movies.reduce((bestMovie, currMovie) => {
  if (currMovie.score > bestMovie.score) {
    return currMovie;
  }
  return bestMovie;
});

console.log(highRatedMovie);

const evens = [2, 4, 6, 8];
evens.reduce((sum, num) => sum + num, 100);
