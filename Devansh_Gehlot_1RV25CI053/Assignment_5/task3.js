const p1=new Promise((resolve)=>setTimeout(()=>{
    resolve("User Loaded")
},1000))
const p2=new Promise((resolve,reject)=>setTimeout(()=>{
    reject("Server Error")
},2000))
const p3=new Promise((resolve)=>setTimeout(()=>{
    resolve("Products Loaded")
},3000))
Promise.allSettled([p1,p2,p3]).then((results)=>{
    results.forEach((result)=>{
        if(result.status==="fulfilled"){
            console.log(result.status," - ",result.value)
        }
        else{
            console.log(result.status," - ",result.reason)
        }
    })
})