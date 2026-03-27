let num = 5;

const countdown = setInterval(() => {
    console.log(num);
    num--;

    if (num < 0) {
        clearInterval(countdown);
        console.log("Time's up!");
    }
}, 1000);