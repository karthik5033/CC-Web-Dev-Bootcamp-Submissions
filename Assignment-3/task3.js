const checkAge = (age)=>{
    if(age>18){
        console.log("Access Granted!");
    }
    try{
        if(age<=0){
        throw new Error("Age must be a positive number!")
    }
    if(age<18){
        throw new Error("Too young! Must be 18 or above.")
    }
}
catch(error){
    console.log("Error:",error.message);
}
}

checkAge(25)
checkAge(15)
checkAge(-1)
