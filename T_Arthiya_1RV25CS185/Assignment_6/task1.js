async function runOperation(){
    try{
        const myPromise = await new Promise((resolve, reject)=>{
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
        console.log(`Result: ${myPromise}`);
    }
    catch(error){
        console.log(error);
    }
}
runOperation();