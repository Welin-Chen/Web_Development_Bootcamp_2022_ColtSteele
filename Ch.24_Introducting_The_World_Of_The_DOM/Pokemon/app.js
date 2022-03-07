// // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");
// console.dir(container);

const baseUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i <= 151; i++) {
  const pokemon = document.createElement("div");
  const newImg = document.createElement("img");
  const label = document.createElement("span");
  const url = `${baseUrl}${i}.png`;
  newImg.src = url;
  label.innerText = `#${i}`;

  pokemon.append(newImg);
  pokemon.append(label);
  container.append(pokemon);

  pokemon.classList.add("pokemon");

  //   pokemon.setAttribute("class", "pokemon");

  //   newImg.style.display = "block";
  //   pokemon.style.display = "inline-block";
  //   pokemon.style.textAlign = "center";
}

{
  /* <div>
    <img></img>
    <span></span>
</div> */
}
