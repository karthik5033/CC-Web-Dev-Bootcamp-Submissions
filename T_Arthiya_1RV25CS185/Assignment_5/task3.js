const p1 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("User loaded")
    },1000);
});
const p2 = new Promise((resolve,reject)=>{
    reject("Server error")
});
const p3 = new Promise((resolve)=>{
    setTimeout(() => {
        resolve("Products loaded")
    }, 3000)
});
Promise.allSettled([p1,p2,p3])
.then(result => {
    result.forEach(result => {
        if(result.status === "fulfilled"){
            console.log(`fullfilled - ${result.value}`);
        }
        else{
            console.log(`rejected - ${result.reason}`);
        }
    });
});