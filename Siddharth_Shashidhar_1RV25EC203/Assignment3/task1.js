const divide=(a,b)=>{
    if(b==0){
        throw new Error("cannot divide by zero");
    }
    return a/b;
}

try{
    console.log("Result: " + divide(10,2));
}catch(error){
    console.error("Error: " + error.message);
}

try{
    console.log("Result: " + divide(10,0));
}catch(error){
    console.error("Error: " + error.message);
}

