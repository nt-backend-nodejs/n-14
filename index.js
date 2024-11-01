// greet("Ozodbek")

// function greet(name) {
//   console.log(`hello, ${name}`)
// }

// l("Azizbek")
// let l = function(name){
//   console.log(`hello, ${name}`)
// }

// l("Bexruz")

// let sumOfNumber = function (str) {
//   let sum = 0;
//   let length = str.length;
//   for (let i = 0; i < length; i++) {
//     if (!isNaN(str[i])) {
//       sum += Number(str[i]);
//     }
//   }
//   return sum
// };

// const result = sumOfNumber("sadsfdg12343sas1234s"); //=> 1+2+3+4+4+1+2+3+4

// console.log({result})
let a = 12;

// (function () {
//   console.log("OKSASA");
// })();



let greet = (name)=>{
  console.log(`Hello, ${name}`)
}
// greet("Og'abek")




// let add = function(a,b){
//   return a+b
// }

// let add = (a,b)=> a + b

// console.log(add(1,2))
// let result = add(1,2)

// console.log({result})


let reverseStr= (str)=>{
  let length = str.length
  let result = '';
  for (let i = length - 1 ; i >= 0; i--) {
    result += str[i]
  }
  console.log(result)
} 

reverseStr('hello')




let  processUserInput =(test, name)=>{
  test(name)
}


let b = (name)=>{
  console.log(`Hello, ${name}`)
}


processUserInput(b, "Azamat")


car["make"]
car.starEngine()