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

async function runOperation() {
    try{
    let result = await myPromise;
    console.log("Result:" ,result);
    }
    catch(error){
    console.log(error.message);    
}
}

runOperation();




