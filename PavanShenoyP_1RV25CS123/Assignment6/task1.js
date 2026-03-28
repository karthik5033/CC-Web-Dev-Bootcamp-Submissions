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

async function runOperation(){
    try {
        const p=await MyPromise;
        console.log(p);
    } catch (error) {
        console.error(error)
        
    }
}

runOperation();