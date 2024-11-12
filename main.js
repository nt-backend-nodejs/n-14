// function multiply(factor) {
//   return function (number) {
//     return number * factor;
//   };
// }

// const multiplyby2 = multiply(2);

// const result = multiplyby2(6);

// console.log(result);

// function makeCounter() {
//   let count = 0;
//   return function () {
//     return count++;
//   };
// }

// const counter = makeCounter();

// counter()
// counter()
// counter()
// counter()
// counter()
// const result = counter()
// console.log(result);

function Person(name, age, isMerried) {
  this.name = name;
  this.age = age;
  this.isMerried = isMerried;
}

const result = new Person("xamidullo", 12, true);
const result2 = new Person("Azizbek", 15, true);

console.log(result);
console.log(result2);
