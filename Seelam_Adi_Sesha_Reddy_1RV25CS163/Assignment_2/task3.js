let time=5;
let timer=setInterval(()=>{
    console.log(time);
    time--;
    if(time<0)
    {clearInterval(timer);
        console.log("Time Up!");
    }

},1000)