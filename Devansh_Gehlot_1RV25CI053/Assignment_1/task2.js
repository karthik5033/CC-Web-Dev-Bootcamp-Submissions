const greet=(name,callback)=>{
    console.log("Hello "+name+"!");
    callback();
}
const sum=(a,b)=>{
    console.log("Sum:",a+b);
}
greet("Devansh",()=>sum(2,3));