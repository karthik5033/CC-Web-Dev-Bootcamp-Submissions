const p1 = new Promise((resolve) => {
  setTimeout(() => resolve("User loaded"), 1000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => resolve("Orders loaded"), 2000);
});

const p3 = new Promise((resolve) => {
  setTimeout(() => resolve("Products loaded"), 3000);
});


async function runAll(){
    const result1=await p1;
    console.log(result1)
    const result2=await p2;
    console.log(result2)
    const result3=await p3;
    console.log(result3)

    console.log("All done!")


}

runAll();