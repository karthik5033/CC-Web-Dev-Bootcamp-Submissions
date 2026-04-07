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
        console.log("Got result: - task2.js:15", message);
        return message;
    }
).then((message)=>{
    console.log("Uppercased: - task2.js:19", message.toUpperCase());
    let upper = message.toUpperCase();
        return upper;
}).then(
    (message)=>{
        console.log("Final: Done: - task2.js:24", message);
    }
)
.catch(
    (error)=>{
        console.log(error);
    }
)