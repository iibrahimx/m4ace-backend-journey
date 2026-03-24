// =======================================
// ARROW FUNCTIONS & CONTEXT
// =======================================

// Normal traditional function
function addVariables(a, b) {
  return a + b;
}

// Arrow function equivalent
const addVariablesArrow = (a, b) => a + b;

// Arrow function with one parameter
const square = (num) => num * num;

// Arrow function with no parameter
const greet = () => "This is a function taking no parameters!";

// Arrow function with multiple lines
const multiplyAndDescribe = (a, b) => {
  const result = a * b;
  return `The product of ${a} and ${b} is ${result}`;
};

// Arrow function returning an object
const createUser = (name, age) => ({ name, age });

// Context example
const user = {
  name: "Ibrahim",
  traditionalGreeting: function () {
    return `Hello, my name is ${this.name}`;
  },
  arrowGreeting: (name) => {
    firstResponse = `Hello, my name is ${this?.name ?? "'Not defined in the global scope'"}`;
    // secondResponse = `Hello, my name is ${name}`;
    // thirdResponse = `Hello, my name is ${user.name}`;
    // return { firstResponse, secondResponse, thirdResponse };
    return firstResponse;
  },
};

console.log("addVariablesArrow:", addVariablesArrow(5, 3));
console.log("square:", square(4));
console.log("greet:", greet());
console.log("multiplyAndDescribe:", multiplyAndDescribe(3, 7));
console.log("createUser:", createUser("Idris", 22));
console.log("traditionalGreeting:", user.traditionalGreeting());
console.log("arrowGreeting:", user.arrowGreeting());
