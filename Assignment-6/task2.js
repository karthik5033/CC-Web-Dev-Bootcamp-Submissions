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
            resolve("Orders Loaded");
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

async function runAll() {
    let p11 = await p1;
    console.log(p11);
    let p22 = await p2;
    console.log(p22);
    let p33 = await p3;
    console.log(p33);
    console.log("All Done!");
}

runAll();