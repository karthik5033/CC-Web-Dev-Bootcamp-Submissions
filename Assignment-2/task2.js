let i=0;

const clock = setInterval(tick,1000);

function tick(){
    if(i == 5){
        console.log("Stopped");
        clearInterval(clock);
    } 
    else{
        console.log("Tick....");
        i++;
    }
}