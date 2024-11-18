const person = new Map();

person.set("name", "xamidullo");
person.set("age", 44);
person.set("isMerried", false);

const personName = person.get("name");
const personAge = person.get("age");

// console.log(personName);
// console.log(personAge);

// console.log("AGE before", person.has("age"));
// console.log("SIZe before", person.size);

// person.delete("age");

// console.log("AGE after ", person.has("age"));
// console.log("SIZe after", person.size);

// console.log(person)

// person.clear()

// console.log(person)

// console.log(person.entries());
// for (const user of person) {
//   console.log(user)
// }

// person.forEach((a, b, c) => {
//   console.log(a, b, c);
// });

// console.log(person.keys());

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// let odam = new Person("xamidullo", 44);

// console.log(odam);

class Person {
  name = "xamidullo";

  constructor(name, age){
    this.name = name
    this.age = age
  }
}

let odam = new Person("azizbek");

console.log(odam);
