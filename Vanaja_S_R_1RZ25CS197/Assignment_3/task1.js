const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}
rl.question("Enter first number a: ", function(a) {
  rl.question("Enter second number b: ", function(b) {
    try {
      const result = divide(Number(a), Number(b));
      console.log("Result:", result);
    } catch (error) {
      console.log("Error:", error.message);
    }
    rl.close();
  });
});