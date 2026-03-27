// same promise from Assignment 4
let success = true;

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (success) {
            resolve("Operation Successful!");
        } else {
            reject("Operation Failed!");
        }
    }, 2000);
});

// async function
async function runOperation() {
    try {
        const result = await myPromise;
        console.log("Result:", result);
    } catch (error) {
        console.log("Error:", error);
    }
}

// call function
runOperation();