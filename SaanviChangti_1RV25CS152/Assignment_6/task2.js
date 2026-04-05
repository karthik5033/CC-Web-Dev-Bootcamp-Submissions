let p1 =  new Promise((resolve)=>setTimeout(()=>resolve("User loaded"), 1000));
let p2 =  new Promise((resolve)=>setTimeout(()=>resolve("Orders loaded"), 2000));
let p3 =  new Promise((resolve)=>setTimeout(()=>resolve("Products loaded"), 3000));

async function runAll(){
    await p1.then((result)=>console.log(result));
    await p2.then((result)=>console.log(result));
    await p3.then((result)=>console.log(result));
    console.log("All done!");
}

runAll();