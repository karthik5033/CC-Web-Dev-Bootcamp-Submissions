const p1= new Promise((resolve => setTimeout(() => resolve("User loaded"), 1000)));
const p2= new Promise((resolve => setTimeout(() => resolve("Orders loaded"), 2000)));
const p3= new Promise((resolve => setTimeout(() => resolve("products loaded"), 3000)));

Promise.all([p1,p2,p3]).then((values) => {
    console.log(values[0]);
    console.log(values[1]);
    console.log(values[2]);
})
.catch((error) => {
    console.error("one promise failed ", error);
});
