let myPromise = new Promise((resolve,reject)=>{
    let success = true;
    setTimeout(()=>{
    if(success)
        resolve("Operation Successful!")
    
    else
        reject("Operation Failed!")
    })
},2000)

myPromise.
then((result)=>{console.log(result)})
.catch((error)=>{console.log(error)})

let myPromise1 = new Promise((resolve,reject)=>{
    let success = false;
    setTimeout(()=>{
    if(success)
        resolve("Operation Successful!")
    
    else
        reject("Operation Failed!")
    })
},2000)

myPromise1.
then((result)=>{console.log(result)})
.catch((error)=>{console.log(error)})
