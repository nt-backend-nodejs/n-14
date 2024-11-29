class Person {
  constructor(name, designation) {
    this.name = name;
    this.designation = designation;
  }

  learn() {
    console.log("person learning something");
  }
  walk() {
    console.log("person walking on ways");
  }
  eat() {
    console.log("person eating hot-dog");
  }
}

class Programmer extends Person {
  constructor(name, designation, companyName) {
    super(name, designation);
    this.companyName = companyName;
  }
  learn() {
    console.log("Programmer learning python");
  }
}

const brogrammer = new Programmer("ALI", "bag", "GOOGLE");


brogrammer.learn()
