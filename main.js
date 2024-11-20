// class Car {

// }

// const car =  new Car()

// console.log(car)

// function Car (){
//     return  {}
// }

// const result = Car()

// console.log(result);

// class Car {
//   constructor(name, year, color) {
//     this.name = name;
//     this.year = year;
//     this.color = color;
//   }

// }

// const newCar = new Car("BMW", 1999, "black");
// const newCar1 = new Car("AUDI", 2000, "red");
// const newCar2 = new Car("TESLA", 2001, "green");
// const newCar3 = new Car("MERS", 2002, "pink");
// const newCar4 = new Car("CHEVROLET", 2004, "white");
// console.log(newCar);
// console.log(newCar1);
// console.log(newCar2);
// console.log(newCar3);
// console.log(newCar4);

class Person {
  constructor(firstName, lastName, age, gender, add) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.add = add;
  }
  makeSpeak() {
    console.log(`${this.name} gapirmoqda!.`);
  }
  logFullName() {
    console.log(`${this.firstName}  ${this.lastName}`);
  }
}
const bexruz = new Person("Bexruz", "Adxamov", 34, "male", "TOSHKENT");

// bexruz.makeSpeak();
// bexruz.logFullName();


