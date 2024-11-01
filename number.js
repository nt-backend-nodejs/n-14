// console.log(Number.MAX_SAFE_INTEGER+10);
// console.log(Number.MIN_SAFE_INTEGER);

// console.log(isNaN(12/"a"))
// console.log(isNaN("v"/1))

// console.log(Math.sqrt(81))
// console.log(Math.pow(2, 4))
// console.log("MATH ROUND")
// console.log(Math.round(11.3))
// console.log(Math.round(12.6))
// console.log("MATH FLOOR")
// console.log(Math.floor(4.1))
// console.log(Math.floor(3.9))

// console.log("MATH RANDOM")
// console.log(Math.floor(Math.random()*14 +1))

// const a = Symbol("A");
// const b = Symbol("A");

// console.log(a === b);

// let obj = {
//   name: 12,
//   greet: () => {},
// };

// let keys = Object.keys(obj);

// for (let i = 0; i < keys.length; i++) {
//   if (typeof obj[keys[i]] === "function") {
//     console.log(obj[keys[i]])
//   }
// }

// let fruits = ["Banana", "Apple", "cherry"];
// for (let i = 0; i < fruits.length; i++) {
//   if (fruits[i] === "Apple") {
//     console.log({
//       index: i,
//       item: fruits[i],
//     });
//   }
// }

// let ages = [12, 12, 4, 21, 5, 64, 12, 5, 21, 7, 12, 7];
// let randomNumber = [12,21,4,24,64,86,23457,99,31,21,35,8,23,86];

// function getEvenAge(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const item = arr[i];
//     if (item % 2 !== 0) {
//       console.log({
//         index: i,
//         item: item,
//         message: "Bu Juft son",
//       });
//     }
//   }
// }

// getEvenAge(ages)
// console.log("####################################")
// getEvenAge(randomNumber)

// let ages = [12, 12, 4, 21, 5, 64, 12, 5, 21, 7, 12, 7];
// let randomNumber = [12, 21, 4, 24, 64, 86, 23457, 99, 31, 21, 35, 8, 23, 86];

// function search(arr, item) {
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];

//     if (element === item) {
//       return 1;
//     }
//   }

//   return -1;
// }

// const result = search(ages, 7);
// const result2 = search(randomNumber, 7);
// console.log(result);
// console.log(result2);

let ages = [12, 12, 4, 21, 5, 64, 12, 5, 21, 7, 12, 7];
let randomNumber = [12, 21, 4, 24, 64, 86, 23457, 99, 31, 21, 35, 8, 23, 86];

// for (a of ages) {
//   console.log(a);
// }

for (index in ages) {
  console.log(`index: ${index} , item: ${ages[index]}`);
}
