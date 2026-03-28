const p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("User loaded");
    }, 1000);
});

const p2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Orders loaded");
    }, 2000);
});

const p3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Products loaded");
    }, 3000);
});

Promise.allSettled([p1, p2, p3])
    .then((res) => {
        res.forEach(res => {
            if (res.status === "fulfilled") {
                console.log(`fulfilled - ${res.value}`);
            } else {
                console.log(`rejected  - ${res.reason}`);
            }
        });
    });