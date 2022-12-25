const makeCase = function(input, modifications) {

  // Convert the input string to an array of words
  let words = input.split(' ');

  // Defining a function for evey possible scenario
  

  // turn an array in camel case, returns a array
  function camelCase(textArray){
    let output = []
    for (let word = 0; word < textArray.length ; word++){
      if (word === 0 ){
        output.push(textArray[word].toLowerCase())
      }else{
        output.push(textArray[word][0].toUpperCase() + textArray[word].slice(1))
      }
    }
    return output
  }
  // console.log(camelCase(["this","should","work","camel","case"]))
  
  
  // turn an array into Pascal Case, returns a array
  function pascalCase(textArray){
    let output = []
    for (let word = 0; word < textArray.length ; word++){
      output.push(textArray[word][0].toUpperCase() + textArray[word].slice(1))
    }
    return output
  }
  // console.log(pascalCase(["this","should","work","pascal","case"]))
  

  // turn an array into snakeCase, returns a array
  function snakeCase(textArray){
    let output = []
    for (let word = 0; word < textArray.length ; word++){
      if (word === textArray.length - 1){
        output.push(textArray[word])
      }else{
        output.push(textArray[word])
        output.push("_")
      }
    }
    return output
  }
  // console.log(snakeCase(["this","should","work","snake","case"]))
  

  // turn an array into kebabCase, returns a array
  function kebabCase(textArray){
    let output = []
    for (let word = 0; word < textArray.length ; word++){
      if(word === textArray.length - 1){
        output.push(textArray[word])
      }else{
        output.push(textArray[word])
        output.push("-")
      }
    }
    return output
  }
  // console.log(kebabCase(["this","should","work","kebab","case"]))


  // turn an array into kebabCase, returns a array
  function titleCase(textArray){
    let output = [] 
    for (let word = 0; word < textArray.length ; word++){
      output.push(textArray[word][0].toUpperCase() + textArray[word].slice(1))
    }
    return output
  }
  // console.log(titleCase(["this","should","work","title","case"]))
  
  
  
  // turn an array with all the vowels in Upper Case, returns a array
  function vowelCase(textArray){
    
    let output = [] 
    
    for (let word = 0; word < textArray.length ; word++){
      let transformed = ""

      for (let letter = 0; letter < textArray[word].length ; letter++){
        if (['a','e','i','o','u'].includes(textArray[word][letter])){
          transformed += textArray[word][letter].toUpperCase()
        } else {
          transformed += textArray[word][letter]
        }
      }
      output.push(transformed)
    }
    return output
  }
    // console.log(vowelCase(["this","should","work","vowel","case"]))
    
    
  // turn an array with all the consonants in Upper Case, returns a array
  function consonantCase(textArray){
    let output = [] 
  
    for (let word = 0; word < textArray.length ; word++){
      let transformed = ""

      for (let letter = 0; letter < textArray[word].length ; letter++){
        if (!(['a','e','i','o','u'].includes(textArray[word][letter]))){
          transformed += textArray[word][letter].toUpperCase()
        } else {
          transformed += textArray[word][letter]
        }
      }
      output.push(transformed)
    }
    return output
  }
  // console.log(consonantCase(["this","should","work","consonant","case"]))
  
  
  function upperCase(textArray){
    let output = [] 
    for (let word = 0; word < textArray.length ; word++){
      output.push(textArray[word].toUpperCase())
    }
    return output
  }
  // console.log(upperCase(["this","should","be","all upper","case"]))
  
  
  function lowerCase(textArray){
    let output = [] 
    for (let word = 0; word < textArray.length ; word++){
      output.push(textArray[word].toLowerCase())
    }
    return output
  }
  // console.log(lowerCase(["this","should","be","all lower","case"]))

  // Logic to make the main function work

  if(typeof(modifications) === 'string'){
    modifications = new Array(modifications)
  }
  
  modifications.forEach(modification => {
    
    switch (modification) {
      case 'camel':
        words = camelCase(words);
      break;
  
      case 'pascal':
        words = pascalCase(words);    
        break;
        
      case 'snake':
        words = snakeCase(words);    
        break;

      case 'kebab':
        words = kebabCase(words);
        break;

      case 'title':
        words = titleCase(words);
        break;

      case 'vowel':
        words = vowelCase(words);
        break;

      case 'consonant':
        words = consonantCase(words);
        break;

      case 'upper':
        words = upperCase(words);
        break;

      case 'lower':
        words = lowerCase(words);
        break;

      // default:
      //   console.log('Here')
      //   break;
    }
  }
  )

  console.log(words.join(""))

}

console.log(makeCase("this is a string camel", "camel"));
// thisIsAString
console.log(makeCase("this is a string pascal camel", ["pascal","camel"]));
// ThisIsAString
console.log(makeCase("this is a string snake", "snake"));
// this_is_a_string
console.log(makeCase("this is a string kebab", "kebab"));
// this-is-a-string
console.log(makeCase("this is a string title", "title"));
// This Is A String
console.log(makeCase("this is a string vowel", "vowel"));
// thIs Is A strIng
console.log(makeCase("this is a string consonant", "consonant"));
// THiS iS a STRiNG
console.log(makeCase("this is a string upper and snake", ["upper", "snake"]));
// THIS_IS_A_STRING
