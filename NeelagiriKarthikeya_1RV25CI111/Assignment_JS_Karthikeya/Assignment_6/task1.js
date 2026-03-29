let myPromise=new Promise((resolve,reject)=>{
    let success=true;
    setTimeout(()=>{
       if(success==true)
         resolve("Operation Successful!");
       else{
        reject("Operation Failed!");
       }
    },2000);
});

async function runOperation(b,c){
    try{
    if(c==0){
        throw new Error("cannot div by 0");
    }
    let a = await myPromise;
    div=b/c;
    console.log("Result: "+a);
    return a;
    }
    catch(error){
       console.log(error);
    }
}

runOperation(2,5);



