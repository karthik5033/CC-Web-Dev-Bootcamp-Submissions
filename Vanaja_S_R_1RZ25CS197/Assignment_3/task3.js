const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function checkAge(age) {
  if (age <= 0) {
    throw new Error("Age must be a positive number!");
  } else if (age < 18) {
    throw new Error("Too young! Must be 18 or above.");
  } else {
    console.log("Access granted!");
  }
}
rl.question("Enter your age: ", function(ageInput) {
  try {
    checkAge(Number(ageInput));
  } catch (error) {
    console.log("Error:", error.message);
  } finally {
    rl.close();
  }
});

