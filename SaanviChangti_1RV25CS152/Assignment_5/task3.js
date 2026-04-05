//defining the promises
let p1 =  new Promise((resolve)=>setTimeout(()=>resolve("User loaded"), 1000));
let p2 =  new Promise((resolve,reject)=>setTimeout(()=>reject("Server error"), 2000))
let p3 =  new Promise((resolve)=>setTimeout(()=>resolve("Products loaded"), 3000));

//carrying out the task
Promise.allSettled([p1,p2,p3])
.then((results)=>results.forEach((result)=>{
    const data = result.value || result.reason;
    console.log(result.status,"-", data);
}));