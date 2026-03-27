const p1= new Promise((resolve => setTimeout(() => resolve("User loaded"), 1000)));
const p2= new Promise((resolve => setTimeout(() => resolve("Orders loaded"), 2000)));
const p3= new Promise((resolve => setTimeout(() => resolve("products loaded"), 3000)));

Promise.race([p1,p2,p3])
.then((value) => {
    console.log("Winner: ", value);
})
.catch((error)=>{
    console.error("promise failed", error);
});
