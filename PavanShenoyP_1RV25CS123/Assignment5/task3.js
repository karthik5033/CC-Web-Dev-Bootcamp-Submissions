
const p1 = new Promise((resolve) => {
  setTimeout(() => resolve("User loaded"), 1000);
});

const p2 = new Promise((_, reject) => {
  setTimeout(() => reject("Server error"), 1500);
});

const p3 = new Promise((resolve) => {
  setTimeout(() => resolve("Products loaded"), 2000);
});

Promise.allSettled([p1, p2, p3])
  .then((results) => {
    results.forEach((result) => {
      const status = result.status;
      const detail = status === "fulfilled" ? result.value : result.reason;
      console.log(`${status} - ${detail}`);
    });
  });