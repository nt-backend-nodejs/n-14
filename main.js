/********************************* 2-masala ************************************/

function reverseInput(input) {
    if (typeof input === 'string') return input.split(' ').reverse().join(' ');
    if (typeof input === 'number') return +input.toString().split('').reverse().join('');
    return "xato. matn";
}
console.log(reverseInput("Hello world")); 
console.log(reverseInput(12345));        
console.log(reverseInput("How are you?"));
console.log(reverseInput(true));



/********************************* 3-masala ************************************/

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


/********************************* 4-masala ************************************/


function removeABC(str) {
    return /[abc]/i.test(str) ? str.replace(/[abc]/gi, ' ') : null;
}

console.log(removeABC("abcdef"));      
console.log(removeABC("Hello World"));
console.log(removeABC("apple"));      
console.log(removeABC("banana"));       



/********************************* 5-masala ************************************/


function isAnagram(str1, str2) {
    const format = (str) => {
        str = str.toLowerCase();          
        str = str.replace(/[^a-z]/g, ''); 
        str = str.split('').sort().join(''); 
        return str;
    };
    

console.log(isAnagram("tuk", "kut"));             
console.log(isAnagram("olma", "mola"));           
console.log(isAnagram("Hello", "world"));         
console.log(isAnagram("Dormitory", "Dirty room")); 
}