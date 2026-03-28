let success = true;

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (success) resolve("Operation Successful!");
    else reject("Operation Failed!");
  }, 2000);
});

async function runOperation() {
  try {
    const result = await myPromise;
    console.log("Result:", result);
  } catch (err) {
    console.log("Error:", err);
  }
}

runOperation();