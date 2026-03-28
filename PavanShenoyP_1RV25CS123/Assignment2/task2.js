let iter=0;

const interval=setInterval(() => {
   iter++;
   console.log("Tick...") 

    if (iter>=5) {
        clearInterval(interval);
        console.log("Stopped")
    }
},1000);





