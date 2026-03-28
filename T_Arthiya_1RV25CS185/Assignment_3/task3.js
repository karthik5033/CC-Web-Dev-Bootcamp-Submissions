function checkAge(age){
    if(age < 0){
        throw new Error("Error: Age must be a positive number!");
    }
    else if(age < 18){
        throw new Error("Error: Too young! Must be 18 or above.");
    }
    else{
        return ("Access granted!");
    }

}
try{
    console.log(checkAge(25));
}
catch (error){
    console.log(error.message);
}
try{
    console.log(checkAge(15));
}
catch (error){
    console.log(error.message);
}
try{
    console.log(checkAge(-1));
}
catch (error){
    console.log(error.message);
}