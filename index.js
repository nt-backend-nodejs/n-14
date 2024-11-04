// const add = (a, b, c) => {
//   c(a + b);
// };

// const logger = (num) => {
//   console.log(num);
// };

// add(1, 3, logger);

// const ages1 = [1, 2, 3, 4, 5, 7, 44, 8, 293, 3920];
// const ages2 = [1, 2, 3, 4, 5, 7, 44, 8, 293, 3920];
// const ages3 = [1, 2, 3, 4, 5, 7, 44, 8, 293, 3920];
// const ages4 = [1, 2, 3, 4, 5, 7, 44, 8, 293, 3920];

// const newArray = ages1.concat(ages2, ages3, ages4)
// const newArray = [...ages2, ...ages3, ...ages4, ...ages1].sort((a, b) => a - b);
// console.log(newArray);

// const newAges = ages.sort((a, b) => b - a);

// console.log(ages);
// console.log(newAges);

// console.time("inclues")
// if (ages.includes(44)) {
//   console.log("SIZ KATTASIZ");
// }
// console.timeEnd("inclues")

// 1. for (let``)
// 2. for (in)
// 3. for (of)
// 3. array.forEach

// Array.prototype.myForEach = function (callback) {
//   const arr = this;
//   const length = arr.length;

//   for (let i = 0; i < length; i++) {
//     callback(arr[i])
//   }
// };

// ages.myForEach((age) => {
//   console.log(age);
// });

// ages.forEach((age) => {
//   console.log(age);
// });

// const ages1 = [1, 2, 3, 4, 5, 7, 44, 8, 293, 3920];

// // console.log(ages1.join(", "))
// console.log(ages1.reverse())

// const person = {
//   firstName: "azizbek",
//   lastName: "Bahromjonov",
//   age: 15,
//   isMerried: false,
//   isStudent: false,
//   phoneNumber: 998944040239,
//   address: "TOSHkent",
// };
// console.log(person.age);
// console.log(person["age"]);
// const keys = Object.keys(person)
// const values = Object.values(person)
// const entries = Object.entries(person)

// console.log(keys);
// console.log(values);
// console.log(entries);

// const person = {
//   firstName: "azizbek",
//   lastName: "Bahromjonov",
//   age: 15,
//   isMerried: false,
//   isStudent: false,
//   phoneNumber: 998944040239,
//   address: "TOSHkent",
// };

// const keys = Object.keys(person);

// keys.forEach((key) => {
//   console.log(person[key]);
// });
// const values = Object.values(person);

// values.forEach((value) => {
//   console.log(value);
// });

// for (const b of values) {
//   console.log(b);
// }

// for (const index in values) {
//   console.log(values[index]);
// }

const contact = {
  contacts: [],
  add(name, contact) {
    this.contacts.push({ name, contact });
  },
  getOne(name) {},
  getAll() {
    return this.contacts;
  },
  deleteOne(name) {},
};

contact.add("Azizbek", 944040239);
contact.add("Bexruz", 999900919);

console.log(contact.getAll());
