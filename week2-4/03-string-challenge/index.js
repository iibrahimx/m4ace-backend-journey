// String Manipulation Challenge

function toTitleCase(text) {
  if (typeof text !== "string") return "Invalid input";

  return text
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function countVowels(text) {
  if (typeof text !== "string") return "Invalid input";

  const vowels = "aeiou";
  let count = 0;

  for (const char of text.toLowerCase()) {
    if (vowels.includes(char)) count++;
  }

  return count;
}

function reverseString(text) {
  if (typeof text !== "string") return "Invalid input";

  return text.split("").reverse().join("");
}

// Test outputs
console.log(toTitleCase("backend development with javascript"));
console.log(countVowels("Backend Development"));
console.log(reverseString("JavaScript"));
