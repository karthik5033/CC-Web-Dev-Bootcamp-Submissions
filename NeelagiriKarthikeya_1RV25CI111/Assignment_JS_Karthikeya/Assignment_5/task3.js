var p = true;
const p1 = new Promise((resolve)=>{
     if(p==true){
        resolve("User loaded");
     }
});

const p2 = new Promise((resolve,reject)=>{
    if(p==true){
        reject("Server error");
    }
});

const p3 = new Promise((resolve)=>{
    if(p==true){
        resolve("Products loaded");
    }
});

Promise.allSettled([p1,p2,p3])
.then((result)=>{
    result.forEach((i)=>{
        if(i.status==='fulfilled')
            console.log(i.status + " - "+i.value);
        else if(i.status ==='rejected')
            console.log(i.status + " - "+i.reason);
    })
})

