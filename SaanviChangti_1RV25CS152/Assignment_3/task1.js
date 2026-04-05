function divide(a, b){
    try{
        if(b==0)
            throw new Error("Cannot divive by zero!");
        return a/b;
    }
    catch(error){
        console.log(error);
    }

}

divide(10,0);
