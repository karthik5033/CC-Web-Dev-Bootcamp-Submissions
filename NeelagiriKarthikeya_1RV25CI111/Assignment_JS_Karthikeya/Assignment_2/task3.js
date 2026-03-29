var count=5;

const a=setInterval(()=>{
    console.log(count);
    if(count==0){
        console.log("Time's up!");
        clearInterval(a);
    }
    count--;
},1000);