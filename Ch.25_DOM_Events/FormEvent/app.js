const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const cats = document.querySelector("#cats");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const catName = input.value;
  const cat = document.createElement("li");
  // cat.append(catName);
  cat.innerText = catName;
  cats.append(cat);
});
