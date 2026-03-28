// task6.js

const readline = require("readline");

// Create interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask user for success value
rl.question("Enter success value (true/false): ", function(input) {
  const success = input.toLowerCase() === "true";

  // Define the Promise
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("Operation Successful!");
      } else {
        reject("Operation Failed!");
      }
    }, 2000);
  });

  // Async function using await
  async function runOperation() {
    try {
      const result = await myPromise;
      console.log("Result:", result);
    } catch (error) {
      console.log("Error:", error);
    } finally {
      rl.close();
    }
  }

  runOperation();
});
