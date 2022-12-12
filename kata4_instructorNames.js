const instructorWithLongestName = function(instructors) {
  // Put your solution here
  let longest = []
  let maxCaracters = 0

  for (let i = 0; i < instructors.length; i++){
    if (instructors[i].name.length > maxCaracters){
      maxCaracters = instructors[i].name.length;
      longest = [];
      longest.push(instructors[i]);
    }else if (instructors[i].name.length === maxCaracters){
      longest.push(instructors[i]);
    }
  }
  return longest[0];

};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));