const numberOfVowels = function(data) {
  // Put your solution here
  let numberOfVowels = 0;

  for (let letter of data.toLowerCase())
    if (["a","e","i","o","u"].includes(letter)){
      numberOfVowels +=1;
    }
  return numberOfVowels;
};

console.log(numberOfVowels("orange")); //3
console.log(numberOfVowels("lighthouse labs")); //5
console.log(numberOfVowels("aeiou")); //5