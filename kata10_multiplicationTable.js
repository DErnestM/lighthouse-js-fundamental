const multiplicationTable = function(maxValue) {
  // Your code here
  let output = ""
  let matrix = ""

  for (let y = 1; y <= maxValue; y++){
    let row = []
    for (let x = 1; x <= maxValue; x++){
      if (x === maxValue){
        row.push( y*x )
        row.push("\n")  
      }else{
        row.push( y*x )
      }
    }
    matrix = matrix.concat(row.toString())
  }

  for (let char of matrix){
    if (char === ","){
      output = output.concat(" ")
    }else{
      output = output.concat(char)
  }
}
return output
}
;

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));