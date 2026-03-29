async function safeDivide(a, b) {
  const dividePromise = new Promise((resolve, reject) => {
    if (b === 0) {
      reject("Cannot divide by zero!");
    } else {
      resolve(a / b);
    }
  });

  try {
    const result = await dividePromise;
    console.log("Result:", result);
  } catch (error) {
    console.log("Error:", error);
  }
}

safeDivide(10,0);