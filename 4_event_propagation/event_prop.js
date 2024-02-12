const дедушка = document.querySelector(".дедушка");
const отец = document.querySelector(".отец");
const сын = document.querySelector(".сын");

сын.addEventListener("click", onClick);
отец.addEventListener("click", onClick);
дедушка.addEventListener("click", onClick);

function onClick(event) {
  console.groupCollapsed('onClick');
  console.log('target = ', event.target);
  console.log('currentTarget = ', event.currentTarget);
  console.groupEnd();
}
