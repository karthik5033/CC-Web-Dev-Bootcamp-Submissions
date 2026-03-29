let i = 5;

let timer = setInterval(newYear,1000);

function newYear(){
    if (i == -1){
        console.log("Time's up!");
        clearInterval(timer);
    }
    else{
        console.log(i);
        i--;
    }
}