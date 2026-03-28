// combining async await with error handling

async function safeDivide(a, b) {
    var myPromise = new Promise((resolve, reject) => {
        if (b == 0) {
            reject("Cannot divide by zero!");
        } else {
            resolve(a / b);
        }
    });

    try {
        var result = await myPromise;
        console.log("Result: " + result);
    } catch (error) {
        console.log("Error: " + error);
    }
}

safeDivide(10, 2);
safeDivide(10, 0);