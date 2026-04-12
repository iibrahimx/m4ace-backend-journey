// ASYNCHRONOUS JAVASCRIPT - CALLBACKS

console.log("=== CALLBACKS PRACTICE ===");

// ========================================
// Task 1: Simulating asynchronous operations with callbacks
// ========================================
function fetchUserData(callback) {
  setTimeout(() => {
    callback("User data loaded successfully");
  }, 1000);
}

fetchUserData((message) => {
  console.log("Task 1. Async callback result:", message);
});

// ========================================
// Task 2: Demonstrating callback hell with nested callbacks using restaurant analogy
// ========================================

// Phase 1: Order food
function orderFood(callback) {
  setTimeout(() => {
    console.log("Food ordered 🍔");
    callback(null, "Burger");
  }, 1000);
}

// Phase 2: Eat food
function eatFood(food, callback) {
  setTimeout(() => {
    console.log(`Eating ${food}... 🍽️`);
    callback(null, "Finished eating!");
  }, 1000);
}

// Phase 3: Order dessert
function payBill(callback) {
  setTimeout(() => {
    console.log("Paying Bill... 💵");
    callback(null, "Bills paid!");
  }, 1000);
}

// Chaining them
orderFood((err, food) => {
  if (err) {
    console.log("Error ordering food");
  } else {
    eatFood(food, (err, result) => {
      if (err) {
        console.log("Error eating food");
      } else {
        payBill((err, bill) => {
          if (err) {
            console.log(
              "Error paying bill. You will wash plates like a mad man!",
            );
          } else {
            console.log("All done 🎉");
          }
        });
      }
    });
  }
});

// ========================================
// Task 3: Error-first callback pattern
// ========================================
function divideNumbers(a, b, callback) {
  setTimeout(() => {
    if (b === 0) {
      callback("Division by zero is not allowed", null);
    } else {
      callback(null, a / b);
    }
  }, 1000);
}

divideNumbers(10, 2, (err, result) => {
  if (err) {
    console.log("3. Error-first callback result:", err);
  } else {
    console.log("3. Error-first callback result:", result);
  }
});

divideNumbers(10, 0, (err, result) => {
  if (err) {
    console.log("3. Error-first callback error:", err);
  } else {
    console.log("3. Error-first callback error:", result);
  }
});

// ========================================
// Task 4: Simple event emitter
// ========================================
// Simple event system
const events = {};

// Register (listen)
function on(eventName, callback) {
  events[eventName] = callback;
}

// Trigger (send event)
function emit(eventName, data) {
  if (events[eventName]) {
    events[eventName](data);
  }
}

on("greet", (name) => {
  console.log(`Hello ${name} 👋`);
});

emit("greet", "Ibrahim");
