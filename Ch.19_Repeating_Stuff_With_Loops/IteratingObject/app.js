const testScores = {
  keenan: 80,
  damon: 67,
  kim: 89,
  shawn: 91,
};

// for (let person in testScores) {
//   console.log(`${person}: ${testScores[person]}`);
// }

let scores = Object.values(testScores);
let total = 0;
for (let score of scores) {
  total += score;
}
console.log(total / scores.length);
