let t=5;
const time=setInterval(()=>{
    console.log(t);
    t--;
    if(t===-1){
        clearInterval(time)
        console.log("Time's up!!!")
    }
},1000)