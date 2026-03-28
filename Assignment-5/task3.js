const p1 = new Promise(
    (resolve,reject)=>{
        setTimeout(()=>{
            resolve("User Loaded");
        },1000)
    }
)
const p2 = new Promise(
    (resolve,reject)=>{
        setTimeout(()=>{
            reject("Servers error");
        },2000)
    }
)
const p3 = new Promise(
    (resolve,reject)=>{
        setTimeout(()=>{
            resolve("Products Loaded");
        },3000)
    }
)

Promise.allSettled([p1,p2,p3]).then(
    (results)=>{
        results.forEach((result)=>{
            const status = result.status;
            const output = status === "fulfilled" ? result.value : result.reason;
            console.log(result.status , output);
        })
    }
)