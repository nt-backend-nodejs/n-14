// function greet(name){
//   console.log(`hello, ${name}`)
// }

// greet("azizbek")
// greet("Abdulloh")

// function sum(num1, num2) {

//    return num1 + num2;
// }

// let result = sum(1, 2);

// console.log({result})

// function greetWithPrompt() {
//   const input = prompt("ISM?");
//   console.log(`Hello ${input}`);
// }

// greetWithPrompt()

// a,b,c,d = > piremetr

// function calcPirm(a, b, c, d) {
//   return a + b + c + d;
// }

// console.log(calcPirm(3,2,3,4))

// 10  => 1+2+3+5+6++7+8+9+10 =>
// 15  => 1+2+3+5+6++7+8+9+10+11+12+13+14+15 =>

// function sumOfNum(number) {
//   let sum = 0;
//   for (let i = 0; i <= number; i++) {

//     if (i % 2 === 0) {

//       console.log(i);
//       sum += i; // sum = sum + i
//     }
//   }
//   console.log({ sum });
// }
// let number = Number(prompt("NUM?"));

// sumOfNum(number);
// sumOfNum(number);

function calcMark(name) {
  const mark = +prompt("MARK? " + name)

  if (mark >= 90) {
    console.log("A'lo");
  } else if(mark >= 80) {
    console.log("Yaxshi");
  } else if(mark >= 70) {
    console.log("Qoniqarli");
  } else if(mark >= 60) {
    console.log("Chidasa bo'ladi lekin o'qish kere");
  } else if(mark < 60) {
    console.log("CHOPILDI");
  }
}

calcMark("AZIZBEK")
calcMark("BEHRUZ")