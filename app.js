// function mostFrequentElement(arr) {
//   const obj = {};

//   arr.forEach((num) => {
//     if (obj[num]) {
//       obj[num]++;
//     } else {
//       obj[num] = 1;
//     }
//   });
//   console.log(obj);
// }

// // Test case
// console.log(mostFrequentElement([1, 3, 3, 2, 1, 1, 4, 4, 4, 4, 5, 6, 6])); // 4

// function printCharsInLine(s) {
//   const str =  s.split("")
//   return str.join(" ")
// }

// // Test case
// console.log(printCharsInLine("hello")); // Output: "h e l l o"

// function firstMissingPositive(nums) {
//   let a = nums.filter((x) => x > 0);
//   return Math.min(...a);

//   // return  Math.min(nums.filter(x=>x>0))
// }
function firstMissingPositive(nums) {
  let min = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0 && nums[i] < min) {
      min = nums[i];
    }
  }
  return min;
}

console.log(firstMissingPositive([3, 4, -1, 1])); // Output: 1
console.log(firstMissingPositive([1, 2, 0])); // Output: 1

// let  add = ()=>{

// }

const list = [12, 3, 4, 5, 6, 7];

/* let add = function () {
  const sortedArr = list.sort((a, b) => a - b);

  return sortedArr;
};
 */
let func = function () {
  let count = 1;
  return function () {
    count++;
    return count;
  };
};

let result = func();

console.log(result());
console.log(result());
console.log(result());
console.log(result());
