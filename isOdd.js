const isOdd  = function (num) {
  return num % 2 === 0;
}

const elevenIsOdd = isOdd(11);
const nineIsOdd = isOdd(9);
const fourIsOdd = isOdd(4);

console.log(nineIsOdd);
console.log(elevenIsOdd);
console.log(fourIsOdd);