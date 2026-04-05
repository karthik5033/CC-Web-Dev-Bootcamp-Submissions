let count =0;
const timer = setInterval(()=>{
    console.log("Tick...");
    count++;
    if(count==5){
        clearInterval(timer);
        console.log("Stopped!");
    }
}, 1000);