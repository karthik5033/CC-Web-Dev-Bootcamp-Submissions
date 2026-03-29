let success = true;

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (success) {
      resolve("Operation Successful!");
    } else {
      reject("Operation Failed!");
    }
  }, 2000);
});

async function runOperation() {
  try {
    const result = await myPromise;  // wait for the promise to resolve
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

runOperation();