const button = document.querySelector("button");

button.addEventListener("click", onClick);

function onClick(event) {
  console.log('event = ', event);
  console.log('event.target = ', event.target);
  console.log('event.type = ', event.type);
}