let success=true;
let prom = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        if(success==true){
            resolve("Operation Successful!");
        }
        else{
            reject("Operation Failed!");
        }
        }, 2000);
    });

prom
    .then((res) =>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    });