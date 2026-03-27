const p1= new Promise((resolve => setTimeout(() => resolve("User loaded"), 1000)));
const p2= new Promise((_,reject) => setTimeout(() => reject("server error"), 2000));
const p3= new Promise((resolve => setTimeout(() => resolve("products loaded"), 3000)));

Promise.allSettled([p1,p2,p3]).
then((values) => {
    values.forEach((value, index) => {
        if(value.status === "fulfilled"){
            console.log(`fulfilled - ${value.value}`);
    }
        else{
            console.error(`rejected - ${value.reason}`);

        }
    });
});