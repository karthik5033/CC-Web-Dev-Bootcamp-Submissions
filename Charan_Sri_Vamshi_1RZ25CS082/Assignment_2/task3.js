let time = 5;

const countdown = setInterval(() => {
    console.log(time);
    time--;

    if (time < 0) {
        clearInterval(countdown);
        console.log("Time's up!");
    }
}, 1000);