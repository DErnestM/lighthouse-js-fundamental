function main() {
  var i = 4
  var d = 4.0
  var s = "HackerRank "
  // Declare second integer, double, and String variables.
  
const readline = require('readline');

const isInt = readline.createInterface({
input: process.stdin,
output: process.stdout
});

isInt.question('Please enter an integer: ', (isInteger) => {
isInt = isInteger;
rl.close();
});

const isDouble = readline.createInterface({
input: process.stdin,
output: process.stdout
});

isDouble.question('Please enter a Double: ', (numberDouble) => {
isDouble = numberDouble;
rl.close();
});
  
  
const isString = readline.createInterface({
input: process.stdin,
output: process.stdout
});

isString.question('Please enter a String: ', (string) => {
isString = string;
rl.close();
});    
  
  // Read and save an integer, double, and String to your variables.

  // Print the sum of both integer variables on a new line.
console.log( i + isInt);
  // Print the sum of the double variables on a new line.
console.log( d + isDouble);

  // Concatenate and print the String variables on a new line
  // The 's' variable above should be printed first.
console.log(`${s} + ${isString}`);
}