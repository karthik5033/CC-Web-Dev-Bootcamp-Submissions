const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Enter numbers separated by spaces: ", function(input) {
  const numbers = input.split(" ").map(Number);
  const doubled = numbers.map(num => num * 2);
  console.log(doubled);
  rl.close();
});
