
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`ASSALOMU ALAYKUM ${this.name} AKAHON`);
  }
}
















class Student extends Person {
  constructor(name, age, univer) {
    super(name, age);
    this.univer = univer
  }
  logUniver() {
    console.log(this.univer);
  }
}
let bexruz = new Student("Bexruz", 12, "KOCHA");
bexruz.greet();
bexruz.logUniver();

// DRY = DON'T REPEAT YOUR SELF
// const odam = new Person("Azizbek", 15);

// odam.greet()
