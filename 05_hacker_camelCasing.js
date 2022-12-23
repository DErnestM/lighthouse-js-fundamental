/*
Camel Case is a naming style common in many programming languages. In Java, method and variable names typically start with a lowercase letter, with all subsequent words starting with a capital letter (example: startThread). Names of classes follow the same pattern, except that they start with a capital letter (example: BlueCar).

Your task is to write a program that creates or splits Camel Case variable, method, and class names.

Input Format

Each line of the input file will begin with an operation (S or C) followed by a semi-colon followed by M, C, or V followed by a semi-colon followed by the words you'll need to operate on.
The operation will either be S (split) or C (combine)
M indicates method, C indicates class, and V indicates variable
In the case of a split operation, the words will be a camel case method, class or variable name that you need to split into a space-delimited list of words starting with a lowercase letter.
In the case of a combine operation, the words will be a space-delimited list of words starting with lowercase letters that you need to combine into the appropriate camel case String. Methods should end with an empty set of parentheses to differentiate them from variable names.
Output Format

For each input line, your program should print either the space-delimited list of words (in the case of a split operation) or the appropriate camel case string (in the case of a combine operation).
Sample Input

S;M;plasticCup()

C;V;mobile phone

C;C;coffee machine

S;C;LargeSoftwareBook

C;M;white sheet of paper

S;V;pictureFrame

Sample Output

plastic cup

mobilePhone

CoffeeMachine

large software book

whiteSheetOfPaper()

picture frame


Print the result to console, using console.log()

*/

function processData(input) {
  // Split the input into an array of lines
  const lines = input.split("\n");
  // Iterate through the lines
  for (const line of lines) {
    // Split the line into an array of words
    const words = line.split(";");
    // Get the operation and type from the first two words
    const operation = words[0];
    const type = words[1];
    // Get the camel case string from the third word
    let camelCase = words[2];
    // Check the operation
    if (operation === "S") {
      // Split the camel case string
      let result = camelCase.replace(/[A-Z]/g, (match) => " " + match);
      // Check the type
      if (type === "M") {
        // Add the parentheses to the end of the result
        result += "()";
      }
      // Print the result
      console.log(result.toLowerCase().trim());
    } else {
      // Combine the words into a camel case string
      let result = camelCase.split(" ").map((word, index) => {
        if (type === "M") {
          // Make the first letter of the first word lowercase for method names
          if (index === 0) {
            return word[0].toLowerCase() + word.slice(1);
          } else {
            return word[0].toUpperCase() + word.slice(1);
          }
        } else {
          // Make the first letter of the first word uppercase for class names
          if (index === 0) {
            return word[0].toUpperCase() + word.slice(1);
          } else {
            return word[0].toUpperCase() + word.slice(1);
          }
        }
      }).join("");
      // Check the type
      if (type === "M") {
        // Add the parentheses to the end of the result
        result += "()";
      }
      // Print the result
      console.log(result);
    }
  }
}


processData("S;M;plasticCup()")
processData("C;V;mobile phone")
processData("C;C;coffee machine")
processData("S;C;LargeSoftwareBook")
processData("C;M;white sheet of paper")
processData("S;V;pictureFrame")
processData("S;V;iPad")
processData("C;M;mouse pad")
processData("C;C;code swarm")
processData("S;C;OrangeHighlighter")

/*

This processData function should be able to split and combine camel case strings as requested in the problem statement.

Here's a brief explanation of how it works:

The function first splits the input into an array of lines, and then iterates through the lines.
For each line, it splits the line into an array of words and gets the operation and type from the first two words and the camel case string from the third word.
If the operation is "S" (split), it uses a regular expression to split the camel case string by replacing every capital letter with a space and the letter. It then adds parentheses to the end of the result if the type is "M" (method). Finally, it prints the result in lowercase and trims any leading or trailing spaces.
If the operation is "C" (combine), it splits the camel case string into an array of words and maps each word to a new string where the first letter is capitalized. It then joins the words back together and adds parentheses to the end of the result if the type is "M" (method). Finally, it prints the result.

*/