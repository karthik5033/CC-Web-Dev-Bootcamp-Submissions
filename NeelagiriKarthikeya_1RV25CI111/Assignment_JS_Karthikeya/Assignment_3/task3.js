function checkAge(age){
    try{
        if(age<18 && age >=0){
            throw new Error("Too young! Must be 18 or above");
        }
        else if(age<0){
            throw new Error("Age must be a positive number!");
        }
        else if (age>18){
            console.log("Access granted!");
        }
    }
    catch(error){
        console.log(error.message);
    }
}
checkAge(25);
checkAge(15);
checkAge(-1);
