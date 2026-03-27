const p1=new Promise((resolve)=>setTimeout(()=>{
    resolve("User Loaded")
},1000))
const p2=new Promise((resolve)=>setTimeout(()=>{
    resolve("Orders Loaded")
},2000))
const p3=new Promise((resolve)=>setTimeout(()=>{
    resolve("Products Loaded")
},3000))
 async function runAll() {
    try{
        const r1 = await p1
        console.log(r1)
        const r2 = await p2
        console.log(r2)
        const r3 = await p3
        console.log(r3)
        console.log("All Done!")
    }catch(e){
        console.log(e)
    }  
 }
 runAll()