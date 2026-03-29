let count =1;
var a =setInterval(() => {
    console.log("Tick...");
    if(count==5)
        clearInterval(a)
    count++;
}, 1000);