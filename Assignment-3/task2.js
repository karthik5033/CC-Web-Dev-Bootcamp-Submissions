const jsonstring = "not a number";

try{
    console.log(JSON.parse(jsonstring));
}

catch(error){
    console.log("Invalid JSON");
}
finally{
    console.log("Parsing attempt done!");
}