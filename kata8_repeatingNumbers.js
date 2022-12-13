const repeatNumbers = function(data) {

  let output = []

    for (let pair of data){
      let repeat = (pair[0].toString()).repeat(pair[1])
      output.push(repeat)
    }
  
    return output.join(", ")
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));