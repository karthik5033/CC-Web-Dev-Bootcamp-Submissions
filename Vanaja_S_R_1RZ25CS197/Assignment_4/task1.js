const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Enter success value (true/false): ", function(input) {
  // Convert input string to boolean
  const success = input.toLowerCase() === "true";
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("Operation Successful!");
      } else {
        reject("Operation Failed!");
      }
    }, 2000);
  });
  myPromise
    .then(message => console.log(message))
    .catch(error => console.log(error))
    .finally(() => rl.close());
});
