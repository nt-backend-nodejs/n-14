const addButton = document.querySelector(".add");
const boxElement = document.querySelector(".box");
const todoElement = document.querySelector("#todo");
const todoListElement = document.querySelector(".todo-list");

addButton.addEventListener("click", () => {
  const pElement = document.createElement("li");
  pElement.textContent = todoElement.value;
  todoElement.value = "";
  todoListElement.appendChild(pElement);
  // boxElement.appendChild(pElement)
});

// // const h1Element = document.getElementById("greet")
// // const h1Element = document.getElementsByClassName("gretting")
// // const h1Element = document.getElementsByTagName("h1")
// // const h1Element = document.querySelector("#greet")
// const h1Element = document.querySelector(".gretting");
// const btnElement = document.querySelector("#btn");
// const btnAgeElement = document.querySelector("#btn-age");
// // const btnElement = document.getElementById("btn");
// let inputs = table.getElementsByTagName("input");
// btnElement.addEventListener("click", () => {
//   document.body.style.backgroundColor = "red";
//   document.body.style.color = "white";
//   // h1Element.innerHTML = "<i>SALOM</i>"
//   h1Element.textContent = "<i>SALOM</i>";
//   console.log(h1Element.attributes);
// });

// btnAgeElement.addEventListener("click", () => {
//   for (let input of inputs) {
//     console.log(input.value + ": " + input.checked);
//   }
// });

//   let elem = document.getElementById('elem');

//   // make its background red
//   elem.style.background = 'red';
