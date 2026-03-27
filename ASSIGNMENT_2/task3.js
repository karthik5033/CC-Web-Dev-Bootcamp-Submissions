let time = 5;
const countdown = setInterval(() => {
    console.log(time);
    if (time === 0) {
        console.log("Time's up!");
        clearInterval(countdown);
    }
    time--;
}, 1000);