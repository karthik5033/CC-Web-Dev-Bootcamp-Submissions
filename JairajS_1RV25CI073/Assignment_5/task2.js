// Promise.race gives you whichever promise finishes FIRST

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

Promise.race([p1, p2, p3])
    .then((winner) => {
        console.log("Winner: " + winner);
    });