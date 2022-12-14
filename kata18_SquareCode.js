/*
One classic method for composing secret messages is called a square code. In this activity, we will be creating our own Square Code algorithm.

Square Code
In Square Code, the spaces are removed from the english text and the characters are written into a square (or rectangle). For example, the sentence "If man was meant to stay on the ground god would have given us roots" is 54 characters long, once the spaces are removed, so it is written into a rectangle with 7 rows and 8 columns.

    ifmanwas
    meanttos
    tayonthe
    groundgo
    dwouldha
    vegivenu
    sroots
The square root of 54 (Math.sqrt(54)) is 7.3484692283495345. If we round this number up (Math.ceil(Math.sqrt(54))), we get 8. If we use that for the number of characters on each line (the number of columns), then our text will be close to a square shape.

The message is then coded by reading down the columns going left to right. For example, the message above is coded as:

And that's the output of the algorithm. We can then reverse the process to decrypt the text and read the original message.
*/



const squareCode = function(message) {
    
    // remove spaces from the message
    let text = message.replace(/ /g,'');

    // find the number of columns
    let columns = Math.ceil(Math.sqrt(text.length));

    // initialize the result array
    let result = [];

    // iterate through the text by columns
    for (let i = 0; i < columns; i++) {

    // initialize a new row for the result array
    result.push('');

    // iterate through the text by rows
    
    for (let j = i; j < text.length; j += columns) {

    // add the current character to the current row
    result[result.length - 1] += text[j];

    }
    }
    
    // join the rows with a space and return the result
    return result.join(' ');

};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));


// Expected Output
// clu hlt io  
// fto ehg ee dd
// hae and via ecy
// imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau


/** Suggested by ChatGPT
 * 
 * const squareCode = function(message) {
 * 
 */