let i = 0;
let interval = setInterval(()=>{
        console.log("Tick...");
        i++;
        if(i>=5){
            clearInterval(interval);
            console.log("Stopped!");
        }
},1000);
