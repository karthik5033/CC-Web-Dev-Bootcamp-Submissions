const myPromise = new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
        if (success) {
            resolve("Operation successful!");
        }
        else{
            reject("Operation failed!");
        }},2000);
});

myPromise.then((s1)=>{
    console.log("Step 1 - Got result:", s1);
    return s1.toUpperCase();
})
.then((s2)=>{
    console.log("Step 2 - Uppercased:", s2);
    return s2
})
.then((s3)=>{
    console.log("Step 3 - Final: Done:",s3);
})
.catch((error)=>{
    console.error("Error occured: ",error);   
});