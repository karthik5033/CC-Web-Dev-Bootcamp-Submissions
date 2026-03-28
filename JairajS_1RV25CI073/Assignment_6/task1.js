
var success = true;

var myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (success == true) {
            resolve("Operation Successful!");
        } else {
            reject("Operation Failed!");
        }
    }, 2000);
});

async function runOperation() {
    try {
        var result = await myPromise;
        console.log("Result: " + result);
    } catch (error) {
        console.log("Error: " + error);
    }
}

runOperation();