const organizeInstructors = function(instructors) {
  // Create an empty object to store the instructors by course
  const instructorsByCourse = {};
  // Iterate through the instructors
  for (const instructor of instructors) {
    // Get the instructor's course
    const course = instructor.course;
    // Check if the course is already in the object
    if (instructorsByCourse[course]) {
      // If the course is already in the object, add the instructor to the list for that course
      instructorsByCourse[course].push(instructor.name);
    } else {
      // If the course is not in the object, create a new list for that course and add the instructor
      instructorsByCourse[course] = [instructor.name];
    }
  }
  // Return the object with the instructors organized by course
  return instructorsByCourse;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));