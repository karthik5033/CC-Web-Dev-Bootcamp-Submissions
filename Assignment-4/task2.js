let myPromise = new Promise((resolve,reject)=>{
    let success = false;
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
        console.log("Got result:", message);
        return message;
    }
).then((message)=>{
    console.log("Uppercased:", message.toUpperCase());
    let upper = message.toUpperCase();
        return upper;
}).then(
    (message)=>{
        console.log("Final: Done:", message);
    }
)
.catch(
    (error)=>{
        console.log(error);
    }
)