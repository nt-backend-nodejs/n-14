# Links

- [https://exercism.org](https://exercism.org)
- [https://typehero.dev](https://typehero.dev)
- [https://basarat.gitbook.io/typescript](https://basarat.gitbook.io/typescript)

### 1. `swap` funksiyasi

#### Input

Bir xil tipdagi ikkita argumentni qabul qiladigan va ularning qiymatlarini almashtiradigan `swap` funksiyasini yozing. Masalani yechishda genericdan foydalaning.

#### Output

```typescript
// Sinov uchun
let a = 1;
let b = 2;
[a, b] = swap(a, b);
console.log(`a: ${a}, b: ${b}`); // a: 2, b: 1

let x = "hello";
let y = "world";
[x, y] = swap(x, y);
console.log(`x: ${x}, y: ${y}`); // x: world, y: hello
```

### 2. `assertString` funksiyasi

#### Input

Kirish parametrini qabul qilib, uning string tipida ekanligini tasdiqlovchi `assertString` funksiyasini yozing. Agar kirish string bo'lmasa, funksiya xatoga yo'l qo'yishi kerak.

#### Output

```typescript
// Sinov uchun
try {
  assertString("hello"); // OK
  console.log("Input is a string");
} catch (e) {
  console.error(e.message);
}

try {
  assertString(123); // Error: Input is not a string
} catch (e) {
  console.error(e.message);
}
```

### 3. Quicksort va Mergesort algoritmlari

#### Input

Quicksort va Mergesort algoritmlarini yozing. Massivni 1000 ta tasodifiy son bilan to'ldiring va yuqoridagi saralash algoritmlaridan foydalangan holda tartiblang. Qaysi metod tezroq ishlashini aniq vaqtlar bilan ko'rsating.

#### Output

```typescript
// Tasodifiy sonlar bilan massiv yaratish va saralash
const array = Array.from({ length: 1000 }, () =>
  Math.floor(Math.random() * 10000)
);

// Quicksort ishlash vaqti
const quicksortStart = performance.now();
const quicksortedArray = quicksort(array);
const quicksortEnd = performance.now();
console.log(`Quicksort ishlash vaqti: ${quicksortEnd - quicksortStart} ms`);

// Mergesort ishlash vaqti
const mergesortStart = performance.now();
const mergesortedArray = mergesort(array);
const mergesortEnd = performance.now();
console.log(`Mergesort ishlash vaqti: ${mergesortEnd - mergesortStart} ms`);
```



    BankAccount sinfini yozing. U private balance: number maydoniga ega bo‘lsin

deposit(amount: number) va withdraw(amount: number) metodlari orqali balansni o‘zgartirish imkoniyati bo‘lsin.

2.Person sinfini yozing. Unda public name: string bo‘lsin va sayHello() metodi Hello, my name is ... deb ekranga chiqarsin.

3.Employee sinfini yozing. Unda protected salary: number bo‘lsin va Developer sinfi undan meros olib, showSalary() metodi orqali ekranga chiqaradigan bo‘lsin.

4.Vehicle interfeysini yarating (brand: string va speed: number maydonlari bo‘lsin).

Car sinfi shu interfeysni implements qilsin va showInfo() metodini qo‘shing.
