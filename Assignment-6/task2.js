async function runAll() {
const p1 = await new Promise(resolve=>setTimeout(()=>{resolve("Users Loaded")},1000));
const p2 = await new Promise(resolve=>setTimeout(()=>{resolve("Orders Loaded")},2000));
const p3 = await new Promise(resolve=>setTimeout(()=>{resolve("Products Loaded")},3000));

Promise.all([p1,p2,p3]).
then(result=>{
    console.log(result[0]);
    console.log(result[1]);
    console.log(result[2]);
    console.log("All done!!")


})

}

runAll();