let a = 10;
let b = 0;
let c = 2;
async function divide(a,b) {
    return new Promise(
        (resolve,reject)=>{
                if(b===0){
                reject("Can't divide by zero");
            }
            else{
                resolve(`Result: ${a/b}`);
            }
        }
    ).then(
        (result)=>{
            console.log(result);
        }
    ).catch(
        (err)=>{
            console.log(err);
        }
    )
}
divide(a,c);
divide(a,b);