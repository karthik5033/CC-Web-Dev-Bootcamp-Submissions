let count = 0;
const intId = setInterval(() => {
    console.log("Ticking.....");
    count++;

    if (count >= 5) {
        clearInterval(intId);
        console.log("Stopped Ticking..... Finallyyyy!!!!");
    }

}, 1000);