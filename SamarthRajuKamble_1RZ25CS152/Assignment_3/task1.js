function Div(a, b)
{
    if(b!=0)
        return a/b;
    else    
        throw new Error("Cannot devide by 0");
}

try{
    let ans = Div(5,0);         // Input here
    console.log("After dividing: " + ans);
}
catch(e) {
    console.log(e.message);
}