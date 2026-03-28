

var p1 = new Promise((resolve) => {
    setTimeout(() => { resolve("User loaded"); }, 1000);
});

var p2 = new Promise((resolve) => {
    setTimeout(() => { resolve("Orders loaded"); }, 2000);
});

var p3 = new Promise((resolve) => {
    setTimeout(() => { resolve("Products loaded"); }, 3000);
});

async function runAll() {
    var result1 = await p1;
    console.log(result1);

    var result2 = await p2;
    console.log(result2);

    var result3 = await p3;
    console.log(result3);

    console.log("All done!");
}

runAll();