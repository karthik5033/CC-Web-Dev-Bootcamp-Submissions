const myPromise = new Promise((resolve, reject)=>{
    let success = true;
    setTimeout(()=>{
    if(success){
        resolve("Operation sucessful!");
    }
    else{
        reject("Operation failed!");
    }
},2000);
});
myPromise
.then(result=>{
    console.log(`Step 1 - Got result: ${result}`);
    return result.toUpperCase();
})
.then(result=>{
    console.log(`Step 2 - Uppercased: ${result}`);
    return ("Done: " + result);
})
.then(result=>{
    console.log(`Step 3 - Final: ${result}`);
})
.catch(error=>{
    console.error(error);
});