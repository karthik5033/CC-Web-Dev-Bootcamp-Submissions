const pErr = Promise.reject("Server error");
Promise.allSettled([p1, pErr, p3]).then(results => {
    results.forEach(r => console.log(`${r.status} - ${r.value || r.reason}`));
});