// console.log("start");
// let isAdult = true;
// const promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     if (!isAdult) reject("Ukam Oshing kichik ekan");

//     resolve("Yoshiz yetibdi marhabo!");
//   }, 5000);
// });
// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// class MyMath {
//   static name = "my math"
//   static add(a, b) {
//     return a + b;
//   }
// }
// console.log(MyMath.name);

// console.log(MyMath.add(1, 2));

// const promise = Promise.resolve(1);

// const f1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(1);
//     }, 1000);
//   });
// };
// const f2 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(2);
//     }, 1000);
//   });
// };
// const f3 = () => {
//   return Promise.resolve(3);
// };

// // Promise.all([f1(), f2(), f3()])
// //   .then((arr) => {
// //     console.log(arr);
// //   })
// //   .catch((error) => {
// //     console.error("ERROR:", error);
// //   });

// Promise.any([f1(), f2(), f3()])
//   .then((arr) => {
//     console.log("ANY: ",arr);
//   })
//   .catch((error) => {
//     console.error("ERROR:", error);
//   });

// Promise.race([f1(), f2(), f3()])
//   .then((arr) => {
//     console.log(arr);
//   })
//   .catch((error) => {
//     console.error("ERROR:", error);
//   });

// ===================================
// console.log("start");
// // let randomNumber = Math.random();
// // let randomNumber = 1
// // let name = "ali"

// const promise = new Promise(function (resolve, reject) {
//     if (randomNumber !== 1) reject("1 dan kichik son");
//     resolve("Uraaaaaaaa")
// });
// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// ====================================================

//          0123456
let name = "Asadbek";
//          A     k

// console.log(name[0]);
// console.log(name[name.length - 1]);

const callBack = (resolve, reject) => {
  // if (
  //   name[0].toLowerCase() === "a" &&
  //   name[name.length - 1].toLowerCase() == "k"
  // ) {
  //   resolve("URAAAA");
  // }
  if (
    name.startsWith("A") &&
    name.endsWith("k")
  ) {
    resolve("URAAAA");
  }

  reject("XATOBEK");
};

// const promise = new Promise(callBack);

// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const myPromise = new Promise((resolve, reject) => {
//   let success = true;

//   if (success) {
//     resolve("Operatsiya muvaffaqiyatli bajarildi");
//   } else {
//     reject("Operatsiyada xatolik yuz berdi");
//   }
// });
