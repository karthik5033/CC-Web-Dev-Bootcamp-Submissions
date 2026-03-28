function cAge(age) {
    if(age > 18)
        console.log("Access granted, do what ever you want :D");
    else if(age > 0)
        throw new Error("Access declined, You are tooo young for this buddy");
    else
        throw new Error("Invalid input, You are not at all alive XD");
}

try{
    cAge(19);       // Input
}
catch(e)
{
    console.log(e.message);
}