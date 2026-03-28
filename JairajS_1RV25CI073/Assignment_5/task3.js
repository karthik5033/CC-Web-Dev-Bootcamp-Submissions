// Promise.allSettled waits for all but doesnt stop if one fails
// it tells you if each one worked or failed

var p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("User loaded");
    }, 1000);
});

var p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Server error");
    }, 2000);
});

var p3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Products loaded");
    }, 3000);
});

Promise.allSettled([p1, p2, p3])
    .then((results) => {
        results.forEach((result) => {
            if (result.status == "fulfilled") {
                console.log("fulfilled - " + result.value);
            } else {
                console.log("rejected  - " + result.reason);
            }
        });
    });