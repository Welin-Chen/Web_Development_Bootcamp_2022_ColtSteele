// let totalEggs = 0;
// function collectEggs() {
//   totalEggs = 6;
// }

// console.log(totalEggs);
// collectEggs();
// console.log(totalEggs);

// let bird = "Scarlet Macaw";
// function birdWatch() {
//   //   let bird = "Great Blue Heron";
//   console.log(bird);
// }

// birdWatch();

// let radius = 8;
// if (radius > 0) {
//   const PI = 3.14159;
//   let msg = "HI";
// }

// console.log(radius);

// for (let i = 0; i < 5; i++) {
//   let msg = "aijofisd";
//   console.log(msg);
// }
// console.log(msg);

function bankRobbery() {
  const heros = ["Spiderman", "Wolverin", "Black Panther", "Batman"];
  function cryForHelp() {
    function inner() {
      for (hero of heros) {
        console.log(`Please Help us, ${hero.toUpperCase()}`);
      }
    }
    inner();
  }
  cryForHelp();
}

const add = function (x, y) {
  return x + y;
};
