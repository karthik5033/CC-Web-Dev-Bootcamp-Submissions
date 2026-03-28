var number = 5;

var myTimer = setInterval(() => {
    console.log(number);
    number = number - 1;

    // when it reaches 0 I already printed 0 so now I stop
    if (number < 0) {
        clearInterval(myTimer);
        console.log("Time's up!");
    }
}, 1000);