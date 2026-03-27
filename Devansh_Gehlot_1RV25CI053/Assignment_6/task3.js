const divide=(a,b)=>{
    return new Promise((resolve, reject) => { 
        if(b===0){
            reject("Cannot divide by 0!")
        }else{
            resolve(a/b)
        }
    })
}
async function safeDivide(a,b) {
    try{
    const div= await divide(a,b)
    console.log(div)
    }catch(err){
        console.log("Error: ",err)
    }   
}
safeDivide(10,2)
safeDivide(5,0)