let myPromise=new Promise((resolve,reject) => {
    let success=true;
    setTimeout(()=>{
        if (success)
            resolve("operation successful!");
        else
            reject("operation failed!");
    },2000);
})
myPromise
.then(result=>console.log(result))
.catch(error=>console.log(error))  