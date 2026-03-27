function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero!");
    }
    return a / b;
}

try {
    console.log("Result:", divide(10, 2));
    console.log("Result:", divide(10, 0)); // test error
} catch (error) {
    console.log("Error:", error.message);
}