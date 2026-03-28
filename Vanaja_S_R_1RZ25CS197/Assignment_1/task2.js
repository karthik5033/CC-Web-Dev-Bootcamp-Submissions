const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const greet = (name) => "Hello " + name + ", Let's do a simple additon of two numbers ";
const add = (a, b) => a + b;
rl.question("Enter your name: ", function(name) {
  console.log(greet(name));
  rl.question("Enter first number: ", function(num1) {
    rl.question("Enter second number: ", function(num2) {
      const sum = add(Number(num1), Number(num2));
      console.log("Sum: " + sum);
      rl.close();
    });
  });
});
