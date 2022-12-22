
// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in 12 hour format
// Returns

// string: the time in 24 hour format
// Input Format

// A single string  that represents a time in -hour clock format (i.e.: hh:mm:ssAM or hh:mm:ssPM ).

// Constraints

// All input times are valid

// Sample Input
// 07:05:45PM

// Sample Output
// 19:05:45



function timeConversion(s) {
  let arr = s.split(":");

  if (arr[2].includes("PM")) {
    let hours = arr[0];
    if (hours !== "12") {
      hours = parseInt(hours, 10) + 12;
    }
    arr[0] = hours;
  } else if (arr[2].includes("AM")) {
    let amHours = arr[0];
    if (amHours === "12") {
      arr[0] = "00";
    }
  }

  arr[2] = arr[2].replace(/[A-Z]/g, "");
  let result = arr.join(":");

  return result;
}

console.log(timeConversion("07:05:45PM"))
console.log(timeConversion("04:05:45PM"))
console.log(timeConversion("12:05:45AM"))