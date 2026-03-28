

function divide(a, b) {
    if (b == 0) {
        throw "Cannot divide by zero!";
    }
    return a / b;
}

// try catch catches the error so program doesnt crash
try {
    var result = divide(10, 2);
    console.log("Result: " + result);
} catch (error) {
    console.log("Error: " + error);
}

try {
    var result2 = divide(10, 0);
    console.log("Result: " + result2);
} catch (error) {
    console.log("Error: " + error);
}