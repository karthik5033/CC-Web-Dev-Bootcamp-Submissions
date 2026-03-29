const p1= new Promise((resolve)=>
    setTimeout(()=>{
        resolve("User loaded");
    },1000));

const p2= new Promise((resolve)=>
    setTimeout(()=>{
        resolve("Orders loaded");
    },2000));    

const p3= new Promise((resolve)=>
    setTimeout(()=>{
        resolve("Products loaded");
    },3000));    


async function runAll(){
   let a=await p1;
   console.log(a);
   let b = await p2;
   console.log(b);
   let c = await p3;
   console.log(c);
   console.log("All done!");
   }

   runAll();