// { } => scope

// if (true) {
// }

// for (;;) {

// }

// while(12){

// }

// function a(){

// }

// let a = 12;

// if (true) {
//   let a = 90
//   console.log(a);
// }

// const b = 12;
// for (let i = 0; i < 5; i++) {
//   // const b = 22;
//   console.log(b);
// }

// const c = 122;
// {
//   const c = 1;
//   console.log(c);
// }

// 1 global scope
// 2 local scope -> {}=> lar ichidagi
// 3 functional scope-> {}=> lar ichidagi

// a();

// function a() {
//   console.log("salom");
// }

// var b

// console.log(b)

// function getString(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "string") {
//       console.log(arr[i]);
//     }
//   }
// }

// function getString(arr) {
//   let stringArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "string") {
//       stringArr.push(arr[i]);
//       // console.log(arr[i]);
//     }
//   }
//   return stringArr;
// }

// const result = getString([1, 2, 4, "b", "v", 43, "a"]);
// console.log(result);

// function minMax(arr) {}

// minMax([1, 2, 3, 4, 5]); //➞ 5

// minMax([2334454, 5]); //➞ 2334454

/// ********** 1- MISOL ***********

/* 
 function findPrimeNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      return arr[i];
    }
  }
} 

*/

// const r1 = findPrimeNumber([4, 12, 42, 9, 12, 3]); // ➞ 9
// // const r2 = findPrimeNumber([123, 42, 93, 21, 11]); // ➞ 123

// console.log(r1);
// // console.log(r2);

// function func(arr){

// }

// func([3,4]) //=> 12
// func([2,4]) //=> 8

// function  countTrue(arr) {

// }
// countTrue([true, false, false, true, false]) // ➞ 2

// countTrue([false, false, false, false]) //➞ 0

// countTrue([]) //➞ 0

function sumOfItem(arr) {}

sumOfItem([1, 22, 3, 4, 5, 6, 7, 81]);
