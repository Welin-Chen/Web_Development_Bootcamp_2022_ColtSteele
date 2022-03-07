// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector("form");
const ul = document.querySelector("ul");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const qty = form.elements.qty;
  const product = form.elements.product;
  const li = document.createElement("li");

  li.innerText = `${qty.value} ${product.value}`;
  ul.appendChild(li);
  qty.value = "";
  product.value = "";
});
