function func(arr) {
  let sum = 0;
  for (let i = 0; i < arr[1]; i++) {
    // sum +=arr[1];
    sum = sum + arr[0];
  }
  
  return sum;
}

const result = func([3, 4]); //=> 12
console.log(result);
// func([2, 4]); //=> 8
