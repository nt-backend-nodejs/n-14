// class Student {
//   constructor(firstName, lastName, age, gender, add, university, level) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.gender = gender;
//     this.add = add;
//     this.university = university;
//     this.level = level;
//   }
//   getInfo() {
//     console.log(
//       this.firstName,
//       this.lastName,
//       this.age,
//       this.university,
//       this.add,
//       this.level
//     );
//   }
// }

// const ozodbek = new Student(
//   "ozodbek",
//   "Hoshimov",
//   18,
//   "male",
//   "BUHORO",
//   "TDIU",
//   1
// );

// ozodbek.getInfo()

// class Calc {
//   add(a, b) {
//     return a + b;
//   }
//   div(a, b) {
//     return a / b;
//   }
//   sub(a, b) {
//     return a - b;
//   }
//   mul(a, b) {
//     return a * b;
//   }
// }

// const calc = new Calc();
// console.log(calc.add(1, 2));

// class MyMath {
//   static add(a, b) {
//     return a + b;
//   }
// }

// // const a = new MyMath();
// console.log(MyMath.add(1, 2));
// console.log(MyMath.add(23, 32));

class Contact {
  contacts = new Map();

  add(name, phoneNumber) {
    this.contacts.set(name, {
      name,
      phoneNumber,
    });
  }
  getOne(name) {
    return this.contacts.get(name);
  }

  update(name, newPhoneNumber) {
    const isExists = this.contacts.has(name);
    if (!isExists) {
      return "Bunday user topilmadi";
    }

    this.contacts.delete(name);
    this.contacts.set(name, { name, newPhoneNumber });
    return this.contacts.get(name);
  }
  delete(name) {
    return this.contacts.delete(name);
  }
}

const contact = new Contact();

contact.add("xamidullo", 998942400214);
contact.add("azizbek", 998944040239);
contact.add("ozodbek", 998507247600);
contact.add("bexruz", 998943400434);

// console.log(contact.delete("azizbek"));
console.log(contact.update("azizbek", 123456789));
console.log(contact.getOne("azizbek"));
