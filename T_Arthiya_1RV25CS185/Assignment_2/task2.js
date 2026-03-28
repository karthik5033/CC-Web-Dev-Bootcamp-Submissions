let n=0;
const interval= setInterval(()=>{
    console.log("Tick...");
    n++;
    if (n==5){
        clearInterval(interval);
        console.log("Stopped!");
    }
},1000);