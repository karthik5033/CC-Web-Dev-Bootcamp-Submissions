async function runOperation() {
    try {
        const result = await myPromise; // reuse promise from Assig 4
        console.log("Result:", result);
    } catch (err) {
        console.log("Error:", err);
    }
}
runOperation();