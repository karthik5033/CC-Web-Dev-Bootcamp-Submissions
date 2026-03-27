function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero!");
    }
    return a / b;
}
try {
    const result = divide(10, 0);   // change to (10, 0) to test error
    console.log("Result:", result);
} catch (error) {
    console.log("Error:", error.message);
}