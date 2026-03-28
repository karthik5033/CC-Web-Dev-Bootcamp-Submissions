function divide(a,b){
    if(b==0){
        throw new Error("Error: Cannot divide by zero!");
    }
    return (`Result: ${a / b}`);
}
try{
    console.log(divide(10,2));
}
catch (error){
    console.log(error.message);
}
try{
    console.log((divide(10,0)));
}
catch (error){
    console.log(error.message);
}