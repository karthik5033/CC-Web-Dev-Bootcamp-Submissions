let myPromise = new Promise((resolve, reject) => {
  let success = true;

  setTimeout(() => {
    if (success) resolve("Operation Successful!");
    else reject("Operation Failed!");
  }, 2000);
});

myPromise
  .then(res => console.log(res))
  .catch(err => console.log(err));