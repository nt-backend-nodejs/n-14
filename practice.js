
const length = input.length

const input = prompt("ISM?");

// for (let i = 0; i < input.length; i++) {
//   const element = input[i];
//   console.log({element})
// }



console.log(length)
let reverseName = "";

for (let i = input.length - 1; i >= 0; i--) {
  const element = input[i];
  reverseName = reverseName + element;
  console.log({ reverseName });
}
