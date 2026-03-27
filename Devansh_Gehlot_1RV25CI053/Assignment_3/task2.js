let str="not a number"
try{
    JSON.parse(str);
}
catch(error){
    console.log("Invalid JSON!")
}
finally{
    console.log("Parsing Attempt Done.")
}