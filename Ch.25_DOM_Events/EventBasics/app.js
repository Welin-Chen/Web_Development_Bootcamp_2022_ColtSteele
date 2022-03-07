const btn = document.querySelector("#v2");
console.dir(btn);

// function btnAction() {
//   console.log("You clicked me");
//   console.log("I hope it worked!");
// }

// btn.onclick = btnAction;

btn.onclick = function () {
  console.log("You clicked me");
  console.log("I hope it worked!");
};

function scream() {
  console.log("Ahhhhhhh");
  console.log("stop touching me!");
}
btn.onmouseenter = scream;

document.querySelector("h1").onclick = () => alert("you clicked h1");

const btn3 = document.querySelector("#v3");
btn3.addEventListener("click", function () {
  alert("CLICKED");
});

function twist() {
  console.log("twist");
}

function shout() {
  console.log("shout");
}

const btnTas = document.querySelector("#tas");
// btnTas.onclick = twist;
// btnTas.onclick = shout;

btnTas.addEventListener("click", twist, { once: true });
btnTas.addEventListener("click", shout);

// btnTas.removeEventListener("click", twist);
