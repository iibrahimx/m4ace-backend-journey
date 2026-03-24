// =======================================
// Map and Set Collections
// =======================================

// Creating a user cache with Map
const userCache = new Map();
userCache.set(1, { name: "Ibrahim", role: "student" });
userCache.set(2, { name: "Gaius", role: "mentor" });

console.log("User Cache:");
console.log(userCache);
console.log("Get user with ID 1:", userCache.get(1));

// Word frequency tracking with Map
const sentence =
  "javascript is fun and javascript is powerful and javascript can be used for both frontend and backend development";
const words = sentence.split(" ");
const wordFrequency = new Map();

for (const word of words) {
  wordFrequency.set(word, (wordFrequency.get(word) || 0) + 1);
}

console.log("\nWord Frequency:");
console.log(wordFrequency);

// Create a phone book with Map
const phoneBook = new Map();
phoneBook.set("Ibrahim", "08012345678");
phoneBook.set("Gaius", "08087654321");
phoneBook.set("Joy", "08123456789");

console.log("\nPhone Book:");
console.log("Gaius's phone number:", phoneBook.get("Gaius"));
console.log("Joy's phone number:", phoneBook.get("Joy"));

// Remove duplicates with Set
const numbers = [1, 2, 2, 3, 4, 4, 5, 5, 1, 6, 2, 6, 7, 8, 8, 9, 10];
const uniqueNumbers = [...new Set(numbers)];

console.log("\nUnique Numbers:");
console.log(uniqueNumbers);

// Find unique characters with Set
const word1 = "programming";
const word2 = "bookkeeper";
const word3 = "Mississippi";
const word4 = "Successlessness";
const word5 = "Hippopotomonstrosesquippedaliophobia";
const uniqueCharacters1 = [...new Set(word1)];
const uniqueCharacters2 = [...new Set(word2)];
const uniqueCharacters3 = [...new Set(word3)];
const uniqueCharacters4 = [...new Set(word4)];
const uniqueCharacters5 = [...new Set(word5)];

console.log("\nUnique Characters:");
console.log("Word 1:", uniqueCharacters1);
console.log("Word 2:", uniqueCharacters2);
console.log("Word 3:", uniqueCharacters3);
console.log("Word 4:", uniqueCharacters4);
console.log("Word 5:", uniqueCharacters5);

// Set operations
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

const union = new Set([...setA, ...setB]);
const intersection = new Set([...setA].filter((value) => setB.has(value)));
const difference = new Set([...setA].filter((value) => !setB.has(value)));

console.log("\nSet Operations:");
console.log("Union of SetA and SetB:", union);
console.log("Intersection of SetA and SetB:", intersection);
console.log("Difference of SetA and SetB:", difference);
