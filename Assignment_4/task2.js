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

myPromise
  .then(r => (console.log(r), r.toUpperCase()))
  .then(u => (console.log(u), "Done: " + u))
  .then(f => console.log(f))
  .catch(console.log);