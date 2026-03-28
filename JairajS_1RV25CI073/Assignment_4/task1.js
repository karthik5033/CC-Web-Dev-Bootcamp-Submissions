

var success = true;

var myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (success == true) {
            resolve("Operation Successful!");
        } else {
            reject("Operation Failed!");
        }
    }, 2000);
});

myPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });