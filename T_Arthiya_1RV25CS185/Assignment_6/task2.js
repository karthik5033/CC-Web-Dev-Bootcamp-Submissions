async function runAll(){
    try{
        const p1 = await new Promise((resolve)=>{
            setTimeout(()=>{
                resolve("User loaded")
            },1000);});
        const p2 = await new Promise((resolve)=>{
            setTimeout(() => {
                resolve("Orders loaded")
            }, 2000);});
            const p3 = await new Promise((resolve)=>{
                setTimeout(() => {
                    resolve("Products loaded")
                }, 3000)});
            console.log(p1)
            console.log(p2)
            console.log(p3)
            console.log("All done!")
        }      
    catch (error){
        console.log(error)
    }
    }
runAll()