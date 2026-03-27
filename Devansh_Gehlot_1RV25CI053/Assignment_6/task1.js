let myPromise=new Promise((resolve,reject) => {
    let success=true;
    setTimeout(()=>{
        if (success)
            resolve("operation successful!");
        else
            reject("operation failed!");
    },2000);
})
async function runOperation() {
    try{
        const result=await myPromise
        console.log(result)
    }catch(e){
        console.log(e)
    }  
}
runOperation()