let t = 5;

const Countdown = setInterval(() => {
    console.log(t);
    t--;

    if(t<0)
    {
        clearInterval(Countdown);
        console.log("Your time is ovvverrrrrrrr XD");
    }
}, 1000);