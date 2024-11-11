// const obj = {
//   name: "ali",
//   greet() {
//     console.log(`Hello ${this.name}`);
//   },
//   // greet: () => {
//   //   console.log(`Hello ${this.name}`);
//   // },
// };

// obj.greet();

// const add = function (a, b) {
//   return {
//     name: "a",
//     greet() {
//       console.log(this);
//     },
//   };
// };

// console.log(add(1, 2));

// function Person() {
//   this.name = "ali";
//   this.age = 12;
//   // const that  = {}

//   // that.name = "ali"

//   // return that
// }

// const person = new Person();

// console.log(person);

// const person = {
//   name: "behruz",
//   age: 12,
//   isMeeried: false,
// };

// console.log(Object.entries(person));

// const greet = function (name) {
//   console.log(this)
// };

// // greet("azizbekz")

// greet.call({ age: 12 }, "Guli");

// function countAll(str) {
//   let obj = { HARFLAR: 0, RAQAMLAR: 0 };

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (char == " ") {
//     } else if (typeof char === "number") {
//       obj.RAQAMLAR++;
//     } else if (typeof char === "string") {
//       obj.HARFLAR++;
//     }
//   }
//   return obj;
// }
// console.log(countAll("Hello World"));

// countAll("H3ll0 Wor1d") ➞ { "HARFLAR":  7, "RAQAMLAR": 3 }
// countAll("149990") ➞ { "HARFLAR": 0, "RAQAMLAR": 6 }

// // Misollar
// console.log(
//   afterNYears(
//     {
//       Joel: 32,
//       Fred: 44,
//       Reginald: 65,
//       Susan: 33,
//       Julian: 13,
//     },
//     1
//   )
// );
// // Natija: { "Joel" : 33, "Fred" : 45, "Reginald" : 66, "Susan" : 34, "Julian" : 14 }

// console.log(
//   afterNYears(
//     {
//       Baby: 2,
//       Child: 8,
//       Teenager: 15,
//       Adult: 25,
//       Elderly: 71,
//     },
//     19
//   )
// );
// // Natija: { "Baby" : 21, "Child" : 27, "Teenager" : 34, "Adult" : 44, "Elderly" : 90 }

// console.log(
//   afterNYears(
//     {
//       Genie: 1000,
//       Joe: 40,
//     },
//     5
//   )
// );
// Natija: { "Genie" : 1005, "Joe" : 45 }

function multiply(arr) {
  return function (num) {
    return arr.map((item) => item * num);
  };
}

const result = multiply([1, 2, 3])(2);
console.log(result);

//  ➞ [2, 4, 6]
console.log(multiply([4, 6, 5])(10));

// ➞ [40, 60, 50]

console.log(multiply([1, 2, 3])(0));
//  ➞ [0, 0, 0]
