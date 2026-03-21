// Destructuring & Spread/Rest Operature Practice

const user = {
  firstName: "Ibrahim",
  lastName: "Ibrahim",
  age: 20,
  address: {
    city: "Kaduna",
    country: "Nigeria",
  },
  hobbies: ["coding", "reading", "meditating", "playing games"],
};

// Object destructuring to get first name and age from user
const { firstName, age } = user;

// Renaming and assigning default value
const { lastName: surname, gender = "Not specified" } = user;

// Nested destructuring
const {
  address: { city, country },
} = user;

// Array destructuring
const [
  firstHobby,
  secondHobby,
  thirdHobby,
  fourthHobby,
  fifthHobby = "No hobby",
] = user.hobbies;

// Function parameter destructuring
function printUser({ firstName, lastName, age }) {
  console.log(`User: ${firstName} ${lastName}, Age: ${age}`);
}

// Spread operator
const newUser = { ...user, age: 25 };

// Rest operator
const { firstName: fName, ...rest } = user;

// Testing out the practice examples
console.log("First Name:", firstName);
console.log("Surname:", surname);
console.log("Gender:", gender);
console.log("City:", city);
console.log("Country:", country);
console.log("First Hobby:", firstHobby);
console.log("Third Hobby:", thirdHobby);

printUser(user);

console.log("Cloned User:", newUser);
console.log("Rest Object:", rest);
