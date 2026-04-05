let prom = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        let success=true;
        if(success==true){
            resolve("Operation Successful!");
        }
        else{
            reject("Operation Failed!");
        }
        }, 2000);
    });

async function runOperation(){
    try{
        const result = await prom;
        console.log("Result:",result);
    }
    catch(error){
        console.log(error);
    }
}

runOperation();