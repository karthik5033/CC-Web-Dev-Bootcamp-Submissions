const MyPromise = new Promise((resolve,reject) =>{
    let success=true;
    setTimeout(() => {
            if (success){
        resolve("Operation Successful!");

    }
    else {
        reject("Operation Failed")
    }
    }, 2000);

})

MyPromise.then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log(message)
})