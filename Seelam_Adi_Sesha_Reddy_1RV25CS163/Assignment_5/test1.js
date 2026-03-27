let p1 = new Promise(res => setTimeout(() => res("User loaded"), 1000));
let p2 = new Promise(res => setTimeout(() => res("Orders loaded"), 2000));
let p3 = new Promise(res => setTimeout(() => res("Products loaded"), 3000));

Promise.all([p1, p2, p3])
  .then(results => {
    results.forEach(r => console.log(r));
  });