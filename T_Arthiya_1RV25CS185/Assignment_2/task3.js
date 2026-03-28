let n=5;
const time = setInterval(()=>{
    console.log(n);
    n--;
    if (n<0){
        clearInterval(time);
        console.log("Times's up!");
    }
},1000);