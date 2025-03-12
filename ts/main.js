"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
app.use("/", function (req, res, next) {
    res.send("ok");
});
app.listen(4000, "localhost", function () {
    console.log("server running on port :", 4000);
});
/*

interface IPerson {
  name: string;
  age: number;
  gender: "male" | "female";
  isMerried: boolean;
}

interface ICreatedUser extends IPerson {
  id: string;
}

interface DB {
  create(user: IPerson): ICreatedUser;
}

class Mongodb implements DB {
  async create(user: IPerson): ICreatedUser {
    const createdUser = new User(user);
    await createdUser.save();
    return createdUser;
  }
}

class Postgres implements DB {
  async create(user: IPerson): ICreatedUser {
    const createdUser = await pg.query(
      "INSERT INTO user(name, age, gender) VALUES ($1, $2, $3)",
      ["UMAR", 12, "MALE"],
    );
    return createdUser;
  }
}
*/
/*
class Person {
  constructor(
    public name: string,
    public age: number = 12,
  ) {}

  static getRandomNumber() {
    return Math.random() * 100;
  }
  static MAX_SAFE_INTEGER = 13;
}

const num = new Number();

console.log(Person.getRandomNumber());

const user = new Person("john", 12);
*/
// console.log(user);
/*
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
*/
// type Book = {
//   title: string;
//   genre: string;
//   publicationYear: number;
// };
// const listOfBooks: Readonly<Book[]> = [
//   { title: "Dragon Of The Titans", genre: "fantasy", publicationYear: 1992 },
//   { title: "Queen Of Spring", genre: "drama", publicationYear: 2005 },
//   { title: "Wolves Of The King", genre: "fantasy", publicationYear: 1988 },
// ];
// const book: Readonly<Book> = {
//   title: "Dragon Of The Titans",
//   genre: "fantasy",
//   publicationYear: 1992,
// };
// book.title = "1111";
/*
import { IpVersion } from "zod";

// Define a book type
type Book = {
  title: string;
  genre: string;
  publicationYear: number;
};

// Define a list of types
const listOfBooks: Book[] = [
  { title: "Dragon Of The Titans", genre: "fantasy", publicationYear: 1992 },
  { title: "Queen Of Spring", genre: "drama", publicationYear: 2005 },
  { title: "Wolves Of The King", genre: "fantasy", publicationYear: 1988 },
];
*/
// Use a common function to retrieve books
// const filterArrayByValue = (
//   items: Book[],
//   propertyName: string,
//   valueToFilter: string,
// ): Book[] => {
//   return items.filter((item) => item[propertyName] === valueToFilter);
// };
// Call the function
// The result is an array with two books: "Dragon Of The Titans" and  "Wolves Of The King"
/*
const filterArrayByValue = <T>(
  items: T[],
  propertyName: keyof T,
  valueToFilter: string,
): T[] => {
  return items.filter((item) => item[propertyName] === valueToFilter);
};
*/
/*
interface IPerson {
  name: string;
  age: number;
  gender: "male" | "female";
  isMerried: boolean;
}

const listOfPerson: IPerson[] = [
  {
    name: "john",
    age: 12,
    gender: "male",
    isMerried: true,
  },
  {
    name: "ali",
    age: 12,
    gender: "male",
    isMerried: true,
  },
  {
    name: "umar",
    age: 12,
    gender: "male",
    isMerried: true,
  },
];

const filterArrayByValue = <T, P extends keyof T>(
  items: T[],
  propertyName: P,
  valueToFilter: string,
): T[] => {
  return items.filter((item) => item[propertyName] === valueToFilter);
};

console.log(filterArrayByValue<Book, "genre">(listOfBooks, "genre", "fantasy"));
console.log(filterArrayByValue<IPerson, "name">(listOfPerson, "name", "umar"));
*/
// type A = keyof IPerson;
// function printParams(obj: IPerson, key: A) {
//   console.log(obj[key]);
// }
// // const person: IPerson = {
//   name: "john",
//   age: 12,
//   gender: "male",
//   isMerried: true,
// };
// printParams(person, "gender");
