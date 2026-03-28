const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function greet(name) {
  return "Hello " + name + ", Good Morning, Have a nice day!!";
}
rl.question("Enter your name: ", function(name) {
  console.log(greet(name));
  rl.close();
});