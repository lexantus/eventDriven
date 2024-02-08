const button = document.querySelector("button");
const p = document.querySelector("p");
const div = document.querySelector("div");

button.addEventListener("click", onClick);
p.addEventListener("click", onClick);
div.addEventListener("click", onClick);

function onClick(event) {
  console.log('this = ', this); // равен элементу до addEventListener
}