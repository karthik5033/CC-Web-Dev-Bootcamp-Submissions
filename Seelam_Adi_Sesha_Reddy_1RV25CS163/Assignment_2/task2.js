let count=0;
let Id = setInterval(()=>
{   count++;
    console.log ("Tick...");
    if (count==5)
    {clearInterval(Id);
        console.log("Stopped!");
    }
}
,1000
);