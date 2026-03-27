const age=(a)=>{
    try{
        if (a<=0){
            throw new Error("Error: Age must be a positive number.");
        }
        else if(a>0,a<18){
            throw new Error("Error: Too young! mmust be 18 or above");
        }
        else{
            console.log("Access Granted!");
        }
    }
    catch(e){
        console.log(e.message);
    }
}
age(25)
age(15)
age(-1)