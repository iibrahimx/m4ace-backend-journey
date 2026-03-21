// Object Fundamentals

const user = {
  firstName: "Ibrahim",
  lastName: "Ibrahim",
  age: 20,
  hobbies: ["coding", "reading"],
  address: {
    city: "Kaduna",
    country: "Nigeria",
  },

  // defining function to get full name
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  // defining function to increase age by 1
  incrementAge() {
    this.age += 1;
    return this.age;
  },

  // defining function to add to array of hobbies
  addHobby(hobby) {
    this.hobbies.push(hobby);
    return this.hobbies;
  },

  // defining function to get full address
  getAddress() {
    return `${this.address.city}, ${this.address.country}`;
  },
};

// Testing the functions defined within user object
console.log("Full Name:", user.getFullName());
console.log("Age after increment:", user.incrementAge());
console.log("Hobbies after adding:", user.addHobby("meditating"));
console.log("Address:", user.getAddress());
