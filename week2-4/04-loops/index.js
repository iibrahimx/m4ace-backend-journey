// Loop Mastery

console.log("Multiplication Table using nested loops:");

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
  console.log("----------------");
}

console.log("\nMultiplication Table using while loop:");

let num = 1;

while (num <= 5) {
  let multiplier = 1;

  while (multiplier <= 10) {
    console.log(`${num} x ${multiplier} = ${num * multiplier}`);
    multiplier++;
  }

  console.log("----------------");
  num++;
}
