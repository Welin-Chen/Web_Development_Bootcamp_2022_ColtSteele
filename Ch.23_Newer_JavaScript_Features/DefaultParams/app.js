// function rollDie(numSides) {
//   if (numSides === undefined) {
//     numSides = 6;
//   }
//   return Math.floor(Math.random() * numSides) + 1;
// }

function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1;
}

function greet(person, msg = "Hi", punc = "!") {
  console.log(`${msg}, ${person}${punc}`);
}

const dogs = ["dog1", "dog2", "dog3"];
const cats = ["cat1", "cat2"];

const allPets = [...cats, ...dogs, "test"];
