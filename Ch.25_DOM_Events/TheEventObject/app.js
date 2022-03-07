document.querySelector("button").addEventListener("click", function (evt) {
  console.log(evt);
});

// const input = document.querySelector("input");
// input.addEventListener("keydown", (e) => {
//   //   console.log("keydown");
//   console.log(e.key);
//   console.log(e.code);
// });

// input.addEventListener("keyup", () => {
//   console.log("keyup");
// });

window.addEventListener("keydown", function (e) {
  switch (e.code) {
    case "ArrowUp":
      console.log("up");
      break;
    case "ArrowDown":
      console.log("down");
      break;
    case "ArrowLeft":
      console.log("left");
      break;
    case "ArrowRight":
      console.log("right");
      break;
    default:
      console.log("ignored");
  }
});
