let count=0;
const intervalid=setInterval(()=>{
    console.log("tick...");
    count+=1;
    if(count===5){
        clearInterval(intervalid);
        console.log("stopped");
    }
},1000);
