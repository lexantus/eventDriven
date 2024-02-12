const button = document.querySelector("button");
const p = document.querySelector("p");
const div = document.querySelector("div");

button.addEventListener("click", onClick);
p.addEventListener("click", onClick);
div.addEventListener("click", onClick.bind(window));

function onClick(event) {
  console.groupCollapsed('onClick');
  console.log('this.currentTarget = ', event.currentTarget);
  console.log('this = ', this); // равен элементу до addEventListener
  console.groupEnd();
}
