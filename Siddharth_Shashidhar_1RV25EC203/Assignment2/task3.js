let timer=5;
const intervalid=setInterval(()=>{
    console.log(timer);
    if(timer===0){
        clearInterval(intervalid);
        console.log("time up, goodbye");
    }
    timer-=1;
},1000);
