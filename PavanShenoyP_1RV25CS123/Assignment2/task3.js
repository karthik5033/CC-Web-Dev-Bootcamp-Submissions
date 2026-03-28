let iter=5;

const interval=setInterval(() => {
    console.log(iter) 
   iter--;
   
    if (iter<0) {
        clearInterval(interval);
        console.log("Time's up");
    }
},1000);
