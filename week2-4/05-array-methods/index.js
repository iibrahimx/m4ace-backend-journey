// Array Methods Practice

const students = [
  { name: "Adewale", score: 85, passed: true },
  { name: "Emmanuel", score: 58, passed: false },
  { name: "Jessica", score: 92, passed: true },
  { name: "Mustapha", score: 74, passed: true },
  { name: "Daniel", score: 45, passed: false },
];

// use filter to get students who passed
const passedStudents = students.filter((student) => student.passed);

// map out names only
const studentNames = students.map((student) => student.name);

// reduce method to get total score
const totalScore = students.reduce((sum, student) => sum + student.score, 0);

// use sort to order from highest to lowest
const sortedByScore = [...students].sort((a, b) => b.score - a.score);

// use some to get any failed students?
const hasFailedStudents = students.some((student) => !student.passed);

// use every to get if all students pass
const allPassed = students.every((student) => student.passed);

console.log("Passed students:", passedStudents);
console.log("Student names:", studentNames);
console.log("Total score:", totalScore);
console.log("Sorted by score:", sortedByScore);
console.log("Any failed students?:", hasFailedStudents);
console.log("Did all students pass?:", allPassed);
