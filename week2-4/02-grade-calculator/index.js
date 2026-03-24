// Operators & Conditionals - Grade Calculator

function gradeWithIfElse(score) {
  if (typeof score !== "number" || Number.isNaN(score)) return "Invalid input";
  if (score < 0 || score > 100) return "Invalid input";

  if (score >= 70) return "A";
  else if (score >= 60) return "B";
  else if (score >= 50) return "C";
  else if (score >= 45) return "D";
  else if (score >= 40) return "E";
  else return "F";
}

function gradeWithSwitch(score) {
  if (typeof score !== "number" || Number.isNaN(score)) return "Invalid input";
  if (score < 0 || score > 100) return "Invalid input";

  switch (true) {
    case score >= 70:
      return "A";
    case score >= 60:
      return "B";
    case score >= 50:
      return "C";
    case score >= 45:
      return "D";
    case score >= 40:
      return "E";
    default:
      return "F";
  }
}

// Test cases (so you can see output)
const tests = [95, 72, 67, 55, 47, 41, 10, -5, 120, "80", NaN];

console.log("IF/ELSE RESULTS:");
for (const t of tests) {
  console.log(t, "=>", gradeWithIfElse(t));
}

console.log("\nSWITCH RESULTS:");
for (const t of tests) {
  console.log(t, "=>", gradeWithSwitch(t));
}
