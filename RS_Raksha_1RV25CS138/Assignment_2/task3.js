let count = 5;

const interval = setInterval(() => {
    console.log(count);
    count--;

    if (count < 0) {
        clearInterval(interval);
        console.log("Time's up!");
    }
}, 1000);