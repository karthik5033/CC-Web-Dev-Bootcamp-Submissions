const dividePromise = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("Cannot divide by zero!");
    } else {
      resolve(a / b);
    }
  });
};

async function safeDivide(a, b) {
  try {
    const result = await dividePromise(a, b);
    console.log(`Result: ${result}`);
  } catch (error) {
    // If the promise rejects, we land here
    console.error(`Error: ${error}`);
  }
}

safeDivide(10, 2); 
safeDivide(10, 0); 