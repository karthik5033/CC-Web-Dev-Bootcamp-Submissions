let success = true;
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (success) resolve("Operation Successful!");
        else reject("Operation Failed!");
    }, 2000);
});

myPromise.then(res => console.log(res)).catch(err => console.log(err));