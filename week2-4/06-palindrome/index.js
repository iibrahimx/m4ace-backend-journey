// Function Challenge - isPalindrome

function isPalindrome(word) {
  // confirm if word is a string
  if (typeof word !== "string") return false;

  // convert word to lowercase
  const cleanedWord = word.toLowerCase();

  // reverse the cleaned word
  const reversedWord = cleanedWord.split("").reverse().join("");

  return cleanedWord === reversedWord;
}

console.log(`Is "M4ACE" a palindrome?: ${isPalindrome("M4ACE")}`);
console.log(`Is "racecar" a palindrome?: ${isPalindrome("racecar")}`);
console.log(`Is "hello" a palindrome?: ${isPalindrome("hello")}`);
console.log(`Is "Level" a palindrome?: ${isPalindrome("Level")}`);
console.log(`Is "evil" a palindrome?: ${isPalindrome("evil")}`);
console.log(`Is "gong" a palindrome?: ${isPalindrome("gong")}`);
console.log(`Is "pawpaw" a palindrome?: ${isPalindrome("pawpaw")}`);
console.log(`Is "hannah" a palindrome?: ${isPalindrome("hannah")}`);
