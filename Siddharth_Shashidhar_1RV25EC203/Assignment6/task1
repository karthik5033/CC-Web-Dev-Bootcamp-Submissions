const myPromise = new Promise((resolve, reject) => {
  let success = true; 

  setTimeout(() => {
    if (success) {
      resolve("Result:Operation Successful!");
    } else {
      reject("Operation Failed!");
    }
  }, 2000);
});

async function runOperation() {
  try {
    
    const result = await myPromise; 
    
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    
  }
}
runOperation();