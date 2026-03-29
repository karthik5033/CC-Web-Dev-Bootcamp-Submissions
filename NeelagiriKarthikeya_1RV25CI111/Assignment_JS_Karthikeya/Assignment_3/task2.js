function parse1(json1){
    if(Number.isFinite(json1)){
       throw new Error("Invalid JSON!");
    }
    else{
        const psed=json1.parse();
        return psed;
}    
  
}
var n =1;
try{
   parse1(n)
 }
catch(error){
    console.log(error.message);
}
finally{
    console.log("Parsing attempt done.");
}