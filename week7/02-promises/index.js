// ASYNCHRONOUS JAVASCRIPT - PROMISES

console.log("=== PROMISES PRACTICE ===");

// ========================================
// Task 1: Creating promises from scratch
// ========================================
const simplePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;

    if (success) {
      resolve("Task 1. Promise resolved successfully");
    } else {
      reject("Task 1. Promise rejected");
    }
  }, 1000);
});

simplePromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

// ========================================
// Task 2: Converting callback-based function to promise-based
// ========================================
function divideNumbersPromise(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (b === 0) {
        reject("Division by zero is not allowed");
      } else {
        resolve(a / b);
      }
    }, 1000);
  });
}

divideNumbersPromise(20, 4)
  .then((result) => {
    console.log("Task 2. Promise-based division result:", result);
  })
  .catch((error) => {
    console.log("Task 2. Promise-based division error:", error);
  });

divideNumbersPromise(20, 0)
  .then((result) => {
    console.log("Task 2. Promise-based division result:", result);
  })
  .catch((error) => {
    console.log("Task 2. Promise-based division error:", error);
  });

// ========================================
// Task 3: Promise chaining with error handling
// ========================================
function getNumber() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(5);
    }, 1000);
  });
}

getNumber()
  .then((number) => {
    console.log("Task 3. Starting number:", number);
    return number * 2;
  })
  .then((result) => {
    console.log("Task 3. After multiplying by 2:", result);
    return result + 10;
  })
  .then((finalResult) => {
    console.log("Task 3. Final result after adding 10:", finalResult);
  })
  .catch((error) => {
    console.log("Task 3. Promise chain error:", error);
  });
