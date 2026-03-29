const p1 = new Promise(resolve=>setTimeout(()=>{resolve("Users Loaded")},1000));
const p2 = new Promise(reject=>setTimeout(()=>{reject("Server error")},2000));
const p3 = new Promise(resolve=>setTimeout(()=>{resolve("Products Loaded")},3000));

Promise.allSettled([p1,p2,p3]).
then(result=>{
    console.log(result[0]);
    console.log(result[1]);
    console.log(result[2]);

})
