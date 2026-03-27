let count = 0;

// Runs every 1000ms (1 second)
const intervalId = setInterval(() => {
    console.log("Tick...");
    count++;

    if (count === 5) {
        clearInterval(intervalId);
        console.log("Stopped!");
    }
}, 1000);