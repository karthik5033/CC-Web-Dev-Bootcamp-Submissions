async function safeDivide(a,b){
    try{
        const p = await new Promise((resolve, reject)=>{
            if(b==0){
                reject("Error: Cannot divide by zero!");
            }
            else{
                resolve(a/b)
            }
        });
        console.log(`Result: ${p}`);
    }
    catch(error){
        console.log(error);
    }
}
safeDivide(10,2)
safeDivide(10,0)