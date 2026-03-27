function checkAge(age) {
    if (age <= 0) {
        throw new Error("Age must be a positive number!");
    }
    if (age < 18) {
        throw new Error("Too young! Must be 18 or above.");
    }
    console.log("Access granted!");
}
try {
    checkAge(25);
} catch (e) {
    console.log("Error:", e.message);
}
try {
    checkAge(15);
} catch (e) {
    console.log("Error:", e.message);
}
try {
    checkAge(-1);
} catch (e) {
    console.log("Error:", e.message);
}