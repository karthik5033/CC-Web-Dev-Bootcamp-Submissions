let i = 0;
let interval = setInterval(()=>{
        console.log("Tick... - task2.js:3");
        i++;
        if(i>=5){
            clearInterval(interval);
            console.log("Stopped! - task2.js:7");
        }
},1000);
