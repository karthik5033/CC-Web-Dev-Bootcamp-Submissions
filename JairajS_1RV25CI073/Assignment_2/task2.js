var count = 0;

var myInterval = setInterval(() => {
    console.log("Tick...");
    count = count + 1;

    
    if (count == 5) {
        clearInterval(myInterval);
        console.log("Stopped!");
    }
}, 1000);