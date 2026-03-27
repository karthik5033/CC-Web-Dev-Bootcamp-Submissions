const divide=(a,b)=>{
    try{
        if(b===0){
            throw new Error("Error: Cannot divide by 0!");  
        }
        return console.log(a/b);
    }
    catch(e){
            console.log(e.message);
    }
}
divide(5,0);