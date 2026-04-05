let val = 5;
const timer = setInterval(()=>{
    console.log(val);
    val--;
    if(val<0){
        console.log("Time's up!");
        clearInterval(timer);
    }
}, 1000)