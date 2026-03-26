async function safeDivide(a, b) {
  const result = await new Promise((resolve, reject) => {
    if (b === 0) reject("Cannot divide by zero!");
    else resolve(a / b);
  });
  return result;
}

async function run() {
  try {
    const r1 = await safeDivide(10, 2);
    console.log("Result: " + r1);
  } catch (e) {
    console.log("Error: " + e);
  }

  try {
    const r2 = await safeDivide(10, 0);
    console.log("Result: " + r2);
  } catch (e) {
    console.log("Error: " + e);
  }
}

run();