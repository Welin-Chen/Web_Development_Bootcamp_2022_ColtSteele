const p1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Display"),
  deuce: 0,
  displaydeuce: document.querySelector("#p1Displaydeuce"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Display"),
  deuce: 0,
  displaydeuce: document.querySelector("#p2Displaydeuce"),
};

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playTo");

let winningScore = 3;
let isGameOver = false;
let isdeuce = false;

function updateScores(player, opponent) {
  if (!isGameOver) {
    if (!isdeuce) {
      player.score++;
      if (
        player.score === winningScore - 1 &&
        player.score === opponent.score
      ) {
        isdeuce = true;
      }
    } else {
      player.deuce++;
      player.displaydeuce.textContent = player.deuce;
      if (player.deuce === 2) {
        isdeuce = false;
        player.score++;
      } else if (player.deuce === 1 && player.deuce === opponent.deuce) {
        for (let p of [player, opponent]) {
          p.deuce = 0;
          p.displaydeuce.textContent = 0;
        }
      }
    }

    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

p1.button.addEventListener("click", function () {
  updateScores(p1, p2);
});

p2.button.addEventListener("click", function () {
  updateScores(p2, p1);
});

resetButton.addEventListener("click", reset);

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;

    p.deuce = 0;
    p.displaydeuce.textContent = 0;
  }
}
