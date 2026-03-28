// task8.js

const readline = require("readline");

// Create interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask user for a and b values
rl.question("Enter value for a: ", function(aInput) {
  rl.question("Enter value for b: ", function(bInput) {
    const a = Number(aInput);
    const b = Number(bInput);

    // Async function safeDivide
    async function safeDivide(a, b) {
      try {
        const result = await new Promise((resolve, reject) => {
          if (b === 0) {
            reject("Cannot divide by zero!");
          } else {
            resolve(a / b);
          }
        });
        console.log("Result:", result);
      } catch (error) {
        console.log("Error:", error);
      } finally {
        rl.close();
      }
    }

    // Call the function
    safeDivide(a, b);
  });
});
