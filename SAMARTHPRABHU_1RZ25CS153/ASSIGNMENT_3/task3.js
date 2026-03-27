function checkAge(age) {
  if (age <= 0) throw "Age must be a positive number!";
  if (age < 18) throw "Too young! Must be 18 or above.";
  console.log("Access granted!");
}

for (const age of [25, 15, -1]) {
  try {
    checkAge(age);
  } 
  catch (err) {
    console.log("Error:", err);
  }
}