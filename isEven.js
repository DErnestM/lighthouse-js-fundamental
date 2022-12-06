const isOdd  = function (num) {
  return num % 2 === 0;
}

const tenIsEven = isOdd(10);
const elevenIsEven = isOdd(11);

console.log(tenIsEven);
console.log(elevenIsEven);