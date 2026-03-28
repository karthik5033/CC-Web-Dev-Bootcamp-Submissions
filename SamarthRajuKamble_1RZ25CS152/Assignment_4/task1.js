const myProm = () => {
    return new Promise((resolve, reject) => {
        let suc = false;
        setTimeout(() => {
            if(suc) 
            {
                resolve("Successful");
                console.log("Wftugyu");
            }
            else
                reject("Unsuccessful");
        }, 2000);
    })
};

myProm()
.then((r) =>
{
    console.log("Work is " + r);
})

.catch((r) =>
{
    console.log("Work is unfortnately " + r);
})