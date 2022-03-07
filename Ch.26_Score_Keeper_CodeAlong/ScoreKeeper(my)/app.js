const button1 = document.querySelector("#player1");
const button2 = document.querySelector("#player2");
const reset = document.querySelector("#reset");
const select = document.querySelector("select");

const idPlayer1 = document.querySelector("#idPlayer1");
const idPlayer2 = document.querySelector("#idPlayer2");

let score1 = 0;
let score2 = 0;

function buttonControl() {
  idPlayer1.innerText = score1;
  idPlayer2.innerText = score2;
  let endScore = parseInt(select.value);

  if (score1 === endScore) {
    idPlayer1.classList.toggle("winColor");
    idPlayer2.classList.toggle("lossColor");
  } else if (score2 === endScore) {
    idPlayer2.classList.toggle("winColor");
    idPlayer1.classList.toggle("lossColor");
  }

  if (score1 === endScore || score2 === endScore) {
    button1.disabled = true;
    button2.disabled = true;
  }
}

button1.addEventListener("click", function (e) {
  score1++;
  buttonControl();
});

button2.addEventListener("click", function (e) {
  score2++;
  buttonControl();
});

reset.addEventListener("click", function (e) {
  score1 = 0;
  score2 = 0;
  button1.disabled = false;
  button2.disabled = false;

  idPlayer1.innerText = score1;
  idPlayer2.innerText = score2;

  idPlayer1.classList = [];
  idPlayer2.classList = [];
});

function count() {
  console.log(select.value);
}

count();
select.addEventListener("change", count);
