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

myPromise
.then((result1)=>{
   console.log("Got result: "+result1);
   return result1.toUpperCase();
})
.then((result2)=>{
   console.log("Uppercased: "+result2);
   return("Uppercased: "+ result2);
})
.then((return3)=>{
   console.log("Final: Done: "+return3);
})
.catch((resolve)=>{
   console.log(resolve);
})

