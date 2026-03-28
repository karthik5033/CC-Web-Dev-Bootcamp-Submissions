const divide = (a, b) => {
    return new Promise((resolve, reject) => {
        if(b===0)
            reject("Cannot devide by 0");
        else
            resolve(a/b);
    })
}

async function Div(a, b)
{
    try{
        const res = await divide(a,b);
        console.log("a divided by b gives: " + res);
    }
    catch(e)
    {
        console.log(e);
    }
}
Div(9, 2);