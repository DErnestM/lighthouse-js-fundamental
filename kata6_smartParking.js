const whereCanIPark = function (spots, vehicle) {
  
  let type = [];

  function findSpot(spots, letter){
    for (let column = 0; column < spots.length; column++){
      for (let row = 0; row < spots[column].length; row++){
        if (letter.includes(spots[column][row])){
          return [row, column]
        }
      }
    }
    return false
  }

  if (vehicle === "regular"){
    type = ["R"];
    return findSpot(spots, type);

  } else if (vehicle === "small"){
    type = ["R", "S"];
    return findSpot(spots, type);
    
  } else if (vehicle === "motorcycle"){
    type = ["R", "S", "M"];
    return findSpot(spots, type);

  }else {
    return false;
  }
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))

