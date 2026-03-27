function checkAge(age){
    if (age<0){
        throw new Error("Age must be a positive number!");
    }
    if (age<18){
        throw new Error("too young must be 18 or above!");
    }
    console.log("Access granted!");

}

try{
    checkAge(25);
}
catch(error){
    console.error(error.message);
}

try{
    checkAge(15);
}
catch(error){
    console.error(error.message);
}

try{
    checkAge(-1);
}
catch(error){
    console.error(error.message);
}