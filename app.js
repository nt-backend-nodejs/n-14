class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}


class Student extends Person {

  constructor(name, age, gender, course, level) {
    super(name, age, gender);
    this.course = course;
    this.level = level;
  }
}
const person = new Person("john", 22, "MALE");

const ozodbek = new Student("Ozodbek", 18, "MALE", "TDIU", 1);
class Animal {
  constructor(name, age, gender, color) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.color = color;
  }
}

class Cat extends Animal {
  constructor(name, age, gender, color, legs) {
    super(name, age, gender, color);
    this.legs = legs;
  }
  speak() {
    console.log("MOEW");
  }
}

const animal = new Animal("Baroqvow", 2, "MALE", "green");
const garfield = new Cat("Garfield", 10, "FEMALE", "red", 4);
// console.log(person instanceof Animal);
// console.log(ozodbek instanceof Person);
console.log(garfield instanceof Animal);


