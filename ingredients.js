const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

console.group("Printing the content with while loop")
let i = 0
while (i <= ingredients.length){
  console.log(ingredients[i])
  i++
}
console.groupEnd()

// Write a for loop that prints out the contents of ingredients:

console.group("Printing the content of an array with for loop")

for (let n = 0; n <= ingredients.length -1 ; n++){
  console.log(ingredients[n])
}
console.groupEnd()

// Write any loop (while or for) that prints out the contents of ingredients backwards:

console.group("Printing the content backwards using for loop")

function reverseArray (array){
  let reversed = []
  for (let index = array.length - 1; index >= 0; index--){
    reversed.push(array[index])
  }
  return (reversed)
}
console.log(reverseArray(ingredients))
console.groupEnd()