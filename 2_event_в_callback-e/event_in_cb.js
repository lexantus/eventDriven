const button = document.querySelector("button");

button.addEventListener("click", onClick);

function onClick(event) {
  console.groupCollapsed('event in cb');
  console.log('event = ', event);
  console.log('event.target = ', event.target);
  console.log('event.currentTarget = ', event.currentTarget);
  console.log('event.type = ', event.type);
  console.groupEnd();
}
