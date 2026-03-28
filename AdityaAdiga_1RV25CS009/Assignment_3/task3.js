function checkAge(age) {
  if (age <= 0) throw new Error("Age must be a positive number!");
  if (age < 18) throw new Error("Too young! Must be 18 or above.");
  console.log("Access granted!");
}

for (const age of [25, 15, -1]) {
  try {
    checkAge(age);
  } catch (e) {
    console.log("Error:", e.message);
  }
}