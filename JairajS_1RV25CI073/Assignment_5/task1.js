// Promise.all waits for ALL promises to finish
// they all run at the same time

var p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("User loaded");
    }, 1000);
});

var p2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Orders loaded");
    }, 2000);
});

var p3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Products loaded");
    }, 3000);
});

Promise.all([p1, p2, p3])
    .then((results) => {
        console.log(results[0]);
        console.log(results[1]);
        console.log(results[2]);
    });