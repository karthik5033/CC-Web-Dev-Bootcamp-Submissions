function checkAge(age) {
    if (age<0){
        console.log("Error: Age must be a positive number!");

    }
    else if (age<18){
        console.log("Error: Too young! Must be 18 or above.");
    }
    else {
        console.log("Access granted!")
    }
}

checkAge(25)