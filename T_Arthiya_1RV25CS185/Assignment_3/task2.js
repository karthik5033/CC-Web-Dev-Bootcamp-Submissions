try{
    JSON.parse("not a number");
}
catch (error){
    console.log("Invaid JSON!");
}
finally{
    console.log("Parsing attempt done.");
}