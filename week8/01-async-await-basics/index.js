console.log("=== ASYNC/AWAIT SIMPLE PRACTICE ===");

// helper function
function orderFood(food, time, shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(food + " failed");
      } else {
        resolve(food + " is ready");
      }
    }, time);
  });
}

// ========================================
// 1. Promise-based version
// ========================================
function runWithPromises() {
  console.log("\n1. Promise version:");

  orderFood("Burger", 1000)
    .then((res) => {
      console.log(res);
      return orderFood("Fries", 1000);
    })
    .then((res) => {
      console.log(res);
      return orderFood("Drink", 1000);
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log("Error:", err);
    });
}

runWithPromises();

// ========================================
// 2. Async/Await version
// ========================================
async function runWithAsyncAwait() {
  console.log("\n2. Async/Await version:");

  try {
    const burger = await orderFood("Burger", 1000);
    console.log(burger);

    const fries = await orderFood("Fries", 1000);
    console.log(fries);

    const drink = await orderFood("Drink", 1000);
    console.log(drink);
  } catch (err) {
    console.log("Error:", err);
  }
}

runWithAsyncAwait();

// ========================================
// 3. Error handling with try/catch
// ========================================
async function runWithErrorHandling() {
  console.log("\n3. Error handling:");

  try {
    const food1 = await orderFood("Pizza", 1000);
    console.log(food1);

    // this one fails
    const food2 = await orderFood("Ice Cream", 1000, true);
    console.log(food2);
  } catch (err) {
    console.log("Caught error:", err);
  }
}

runWithErrorHandling();

// ========================================
// 4. Sequential execution
// ========================================
async function runSequentialTasks() {
  console.log("\n4. Sequential:");

  const a = await orderFood("Rice", 1000);
  console.log(a);

  const b = await orderFood("Chicken", 1000);
  console.log(b);

  const c = await orderFood("Juice", 1000);
  console.log(c);
}

runSequentialTasks();

// ========================================
// 5. Parallel execution
// ========================================
async function runParallelTasks() {
  console.log("\n5. Parallel:");

  const results = await Promise.all([
    orderFood("Tea", 1000),
    orderFood("Bread", 1000),
    orderFood("Egg", 1000),
  ]);

  results.forEach((item) => console.log(item));
}

runParallelTasks();
