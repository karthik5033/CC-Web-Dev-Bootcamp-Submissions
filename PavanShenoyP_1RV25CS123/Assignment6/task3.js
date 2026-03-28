function divide(a,b){
    return new Promise((resolve,reject)=>{
        if (b==0){
            reject('Cannot be divided by zero');
        }
        else {
            resolve(a/b);
        }
        
    });
    
}

async function safeDivide() {
    
    
    try {
        const result= await divide(10,0);
        console.log(result);
    } catch (error) {
        console.error(error);
        
    }    
}



safeDivide()