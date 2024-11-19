const vowel = ["a", "e", "i", "o", "u"];

// function returnVowel(arr) {
//   const length = arr.length;
//   const newArr = [];

//   for (let i = 0; i < length; i++) {
//     let word = "";
//     for (let j = 0; j < arr[i].length; j++) {
//       const isExists = vowel.includes(arr[i][j]);
//       if (isExists) {
//         word += arr[i][j];
//       }
//     }
//     newArr.push(word);
//   }
//   return newArr;
// }

function returnVowel(arr) {
  const length = arr.length;
  const newArr = [];

  for (const item of arr) {
    let wordVowel = "";
    for (const word of item) {
      const isExists = vowel.includes(word);
      if (isExists) {
        wordVowel += word;
      }
    }
    newArr.push(wordVowel);
  }
  return newArr;
}

const result = returnVowel(["Assalomu alaykum", "salom", "Najot ta'lim"]); //=>  ['aouaau', 'ao', 'aoai]
// const result = returnVowel(["Toshkent"]); //=>  ['oe']

console.log(result);
