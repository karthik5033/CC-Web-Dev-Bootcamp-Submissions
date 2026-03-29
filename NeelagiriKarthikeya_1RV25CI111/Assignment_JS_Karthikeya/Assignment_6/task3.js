


async function safeDivide(a,b){
    try{
    const p1 = new Promise((resolve,reject)=>{
        if(b!=0){
            resolve(a/b);
        }
        else{ 
            reject(new Error("Cannot divide by zero!"));
        }
     });
        let c = await p1;
        console.log("Result: "+c)
    }
    catch(error){
        console.log(error.message);
    }
}

safeDivide(20,4);