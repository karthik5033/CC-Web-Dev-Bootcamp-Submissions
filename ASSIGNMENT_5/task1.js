let myPromise = new Promise((resolve,reject)=>{
    let success = true;
    setTimeout(()=>{
        if(success){
            resolve("Operation Successful!")
        }
        else{
            reject("Operation Failed!")
        }
    },2000)
})

myPromise.then(
    (message)=>{
        console.log(message);
    }
).catch(
    (error)=>{
        console.log(error);
    }
)