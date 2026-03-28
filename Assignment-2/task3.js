let i = 5;
let interval = setInterval(()=>{
        console.log(i);
        i--;
        if(i<0){
            clearInterval(interval);
            console.log("Time's up!");
        }
},1000);
