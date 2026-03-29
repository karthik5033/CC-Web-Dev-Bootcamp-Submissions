let myPromise=new Promise((resolve,reject)=>{
    let success=false;
    setTimeout(()=>{
       if(success==true)
         resolve("Operation Successful!");
       else{
        reject("Operation Failed!");
       }
    },2000);
});

myPromise
.then((result)=>{
   console.log(result);
})
.catch((resolve)=>{
   console.log(resolve);
})