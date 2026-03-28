let a = 10;
let b = 2;
try{
    if(b==0){
        throw new Error("Can't divide by Zero");
    }
    else{
        console.log(a/b);
    }
}
catch(error){
    console.log("Error:",error.message);
}