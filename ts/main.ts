/*
type Person = {
  name: string;
  age: number;
  gender: "male" | "female";
  isMerried: boolean;
};

type Student = Person & {
  univer: string;
  group: string;
  level: "beginner" | "elementery" | "inter" | "advanced";
};

type JobWorker = Person & {
  job: string;
  salary: number;
  experience?: string;
  shift: "night" | "day";
};

const person: Person = {
  name: "Alica",
  age: 22,
  gender: "female",
  isMerried: false,
};

const john: Person = {
  name: "John",
  age: 21,
  gender: "male",
  isMerried: true,
};

const umid: Student = {
  name: "Umidjon",
  age: 18,
  gender: "male",
  isMerried: false,
  univer: "TSUE",
  group: "SI-0324",
  level: "advanced",
};

const worker: JobWorker = {
  name: "Ulug'bek",
  age: 44,
  gender: "male",
  isMerried: false,
  job: "Bloger",
  salary: 1.2,
  shift: "night",
};

type Add = (a: number, b: number) => number;

const add: Add = (a, b) => {
  return a + b;
};

add(1, 1);

type TObj = {
  a: number;
  b: string;
};

const obj = {
  a: 12,
  b: "hell",
} as TObj;


interface IPerson {
  name: string;
  age: number;
  gender: "male" | "female";
  isMerried?: boolean;
}

interface IPerson {
  religion: "muslim" | "other";
  phone_number?: string;
}

interface IStudent extends IPerson {
  univer: string;
  student_id: string;
}
const person: IPerson = {
  name: "Ali",
  age: 22,
  gender: "male",
  religion: "muslim",
  phone_number: "121212121",
};

const student: IStudent = {
  name: "John",
  age: 21,
  gender: "male",
  religion: "muslim",
  phone_number: "121212121",
  univer: "TATU",
  student_id: "111111",
};


type A = {
  a: number;
  b: number;
};

type B = {
  b: string;
  c: number;
  d: string;
};

type E = A | B;

const e: E = {
  a: 1,
  b: "sas",
  c: 5,
  d: "sasa",
};


interface IPerson {
  name: string;
  age: number;
  gender: "male" | "female";
  isMerried?: boolean;
}

interface IPerson {
  religion: "muslim" | "other";
  phone_number?: string;
  greet(): void;
}

const person: IPerson = {
  name: "Ali",
  age: 22,
  gender: "male",
  religion: "muslim",
  phone_number: "121212121",
  greet() {
    console.log("ok");
  },
};

*/

interface IPerson {
  name: string;
  age: number;
  gender: "male" | "female";
  isMerried?: boolean;
}

interface IPerson {
  religion: "muslim" | "other";
  phone_number?: string;
  greet(): void;
}

// class Person implements IPerson {
//   greet(): void {
//     console.log("sasa");
//   }
// }

class Person {
  private a;
  protected c = 12;

  public b: number = 12;
  static s = "999";
}

class Workers extends Person {
  greet() {
    console.log(this.c);
  }
}

console.log(Person.s);
console.log(Math.abs(12));
const person = new Person();
const worker = new Workers();

person;

worker.greet();
