// task2.js

// Import readline module
const readline = require("readline");

// Create interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask user for success value
rl.question("Enter success value (true/false): ", function(input) {
  const success = input.toLowerCase() === "true";

  // Create Promise
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("Operation Successful!");
      } else {
        reject("Operation Failed!");
      }
    }, 2000);
  });

  // Chain .then() blocks
  myPromise
    .then(result => {
      console.log("Step 1 - Got result:", result);
      return result.toUpperCase();
    })
    .then(upper => {
      console.log("Step 2 - Uppercased:", upper);
      return "Done: " + upper;
    })
    .then(finalMessage => {
      console.log("Step 3 - Final:", finalMessage);
    })
    .catch(error => {
      console.log("Error:", error);
    })
    .finally(() => rl.close());
});
