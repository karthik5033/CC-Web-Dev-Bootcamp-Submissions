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

myProm().then((r) =>
{
    console.log("Result is " + r);
    return r.toUpperCase();
})
.then((r) => {
    console.log("Uppercased: " + r);
    return r;
})
.then((r) => {
    console.log("Final: " + r);
})
.catch((e) =>
{
    console.log("Work is unfortnately " + e);
})