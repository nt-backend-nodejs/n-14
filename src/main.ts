// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function LogClass(target: any) {
  console.log(`Class created: ${target.name}`);
  console.log(target.prototype);
  target.prototype.logName = function (name: string) {
    console.log(`Name: ${name}`);
  };
}

@LogClass
class ToDo {
  // Properties and methods of the ToDo class
}

const todo = new ToDo();
todo.logName("Ozodbek");

// const a = new String("Hello");
// const b = "Hello";

// console.log(a == b); // true
// console.log(a === b); // false

// // frozen dekoratorini aniqlash
// function frozen(constructor: Function) {
//   Object.freeze(constructor);
//   Object.freeze(constructor.prototype);
// }

// // User classiga dekoratorni qo'llash
// @frozen
// class User {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   getInfo() {
//     return `${this.name} ${this.age} yoshda.`;
//   }
// }

// // User klassini sinash
// const user = new User("John", 30);
// console.log(user.getInfo());

// // Klass yoki uning prototipini o'zgartirishga urinish, qat'iy rejimda xatolik keltirib chiqaradi yoki sukut bo'yicha bajarilmaydi
// User.prototype.newMethod = function () {
//   console.log(`Bu qo'shilmaydi.`);
// };

// console.log(User.prototype.newMethod); // undefined
