function Dog(name, breed, color) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.bark = function () {
    return "WOFF";
  };
}

const reks = new Dog("reks", "meat", "ping");

console.log(reks);
console.log(

reks.bark()
);

