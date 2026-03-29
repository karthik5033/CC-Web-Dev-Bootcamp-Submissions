let i = 0;

const a = setInterval(() => {
  console.log("Tick...");
  i=i+1;
  if (i === 5) {
    clearInterval(a);
    console.log("Stopped!");
  }
}, 1000);