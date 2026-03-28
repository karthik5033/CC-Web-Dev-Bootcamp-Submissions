const myProm = () => {
    return new Promise((resolve, reject) => {
        let suc = true;
        setTimeout(() => {
            if(suc)
                resolve("Successful");
            else
                reject("Unsuccessful");
        }, 2000);
    })
};

async function Get()
{
    try {
        const res = await myProm();
        console.log("Result: " + res);
    }
    catch(e) {
        console.log("Work is unfortnately " + e);
    }
}

Get();