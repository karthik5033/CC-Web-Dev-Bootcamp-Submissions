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
    console.log(result);
})
.catch(error=>{
    console.error(error);
});