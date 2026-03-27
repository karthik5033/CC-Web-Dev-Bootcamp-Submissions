const tick=setInterval(()=>{
    console.log("Tick...");
},1000)
setTimeout(()=>{
    clearInterval(tick);
    console.log("Stopped!");
},6000)