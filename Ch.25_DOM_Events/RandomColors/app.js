const button = document.querySelector("button");
const h1 = document.querySelector("h1");

button.addEventListener("click", () => {
  const rgb = makeRandColor();
  const newColor = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
  let total = 0;
  for (let num of rgb) {
    total += num;
  }
  if (total < 200) {
    h1.style.color = "white";
  } else {
    h1.style.color = "black";
  }

  document.body.style.backgroundColor = newColor;
  h1.innerText = newColor;

  console.log(rgb);
  console.log(total);
});

const makeRandColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  // return `rgb(${r},${g},${b})`;
  return [r, g, b];
};
