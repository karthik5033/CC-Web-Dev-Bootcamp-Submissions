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

prom.then((res)=>{
    console.log("Got result:",res);
    return res.toUpperCase();
})
.then((upper)=>{
    console.log("Uppercased:", upper);
    return "Done: "+ upper;
})
.then((finalMsg)=>{
    console.log("Final: ", finalMsg);
});