// checkAge throws different errors based on the age
// 25 should work, 15 is too young, -1 is invalid

function checkAge(age) {
    if (age <= 0) {
        throw "Age must be a positive number!";
    }
    if (age < 18) {
        throw "Too young! Must be 18 or above.";
    }
    console.log("Access granted!");
}

try {
    checkAge(25);
} catch (error) {
    console.log("Error: " + error);
}

try {
    checkAge(15);
} catch (error) {
    console.log("Error: " + error);
}

try {
    checkAge(-1);
} catch (error) {
    console.log("Error: " + error);
}