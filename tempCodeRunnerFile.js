
function calculateSum(arr) {
    let sum = 0;
    let count = {};

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) break; 
        count [arr[i]] = (count[arr[i]] || 0) + 1; 
        sum += Math.pow(arr[i], count[arr[i]]);  
    }
    return sum;
}
console.log(calculateSum([2, 3, 2, 4, 2, 3, 0, 1, 2])); 
console.log(calculateSum([1, 2, 3, 4, 5]));             
console.log(calculateSum([1, 1, 1, 0, 1]));            
