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
.then(result1=>{
    console.log("Result: ",result1);
    return result1
})
.then(result2=>{
    console.log("Uppercase: ",result2.toUpperCase());
    return "Done: "+result2.toUpperCase()
})
.then(result3=>{
    console.log("Final: "+result3);
    return result3
})
.catch(error=>{
    console.log(error);
})