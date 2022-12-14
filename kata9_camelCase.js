const camelCase = function(input) {
  let output = "" 
  let array = input.split(" ")

  function toTitle(text){

    let title = ""

    if (text.length === 1){
      return text.toUpperCase()
    } else{
      for (let char = 0; char < text.length; char++){
        if (char === 0 ){
          title = title.concat(text[char].toUpperCase())
        } else {
          title = title.concat(text[char].toLowerCase())
        }
      }
    }
    return title
  }

  for (let i = 0; i < array.length; i++){
    if (i === 0){
      output = output.concat(array[i].toLowerCase())
    }
    else {
      output = output.concat(toTitle(array[i]))
    }
  }  

  return(output)
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));