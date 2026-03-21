// Part 1: Variables & Data Types

// 1) User profile with different data types
const userProfile = {
  username: "Ibrahim",
  age: 20,
  isStudent: true,
  email: null, // intentionally unknown
  phone: undefined, // not provided yet
  skills: ["JavaScript", "Git", "Node.js"],
  address: {
    city: "Kaduna",
    country: "Nigeria",
  },
};

console.log("USER PROFILE:", userProfile);

// 2) Type checking with typeof
console.log("\nTYPE CHECKING (typeof):");
console.log("username:", typeof userProfile.username);
console.log("age:", typeof userProfile.age);
console.log("isStudent:", typeof userProfile.isStudent);
console.log("email:", typeof userProfile.email); // note: typeof null is "object" (JS quirk)
console.log("phone:", typeof userProfile.phone);
console.log("skills:", typeof userProfile.skills); // arrays show as "object" in typeof
console.log("address:", typeof userProfile.address);

// 3) Type coercion examples
console.log("\nTYPE COERCION:");
console.log('"5" + 2 =', "5" + 2); // string concatenation => "52"
console.log('"5" - 2 =', "5" - 2); // numeric coercion => 3
console.log("Number('5') + 2 =", Number("5") + 2);
console.log("String(20) + ' years' =", String(20) + " years");
console.log("Boolean('') =", Boolean("")); // false
console.log("Boolean('hello') =", Boolean("hello")); // true

// 4) Template literals
const summary = `Hi, I'm ${userProfile.username}.
I'm ${userProfile.age} years old and I know ${userProfile.skills.length} skills.
I live in ${userProfile.address.city}, ${userProfile.address.country}.`;

console.log("\nTEMPLATE LITERAL:");
console.log(summary);
