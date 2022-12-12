const urlEncode = function(text) {
  // Put your solution here
  let output = "";
  let character = ""
  let trimmed = text.trim();
  
  for (let letter of trimmed ){
    if (letter === " "){
      character = "%20"
    }else{
      character = letter;
    }
    output += character;
  }
  return output;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));