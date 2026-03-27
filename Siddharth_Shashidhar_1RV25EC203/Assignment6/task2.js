const p1 = () => new Promise(resolve => setTimeout(() => resolve("User loaded"), 1000));
const p2 = () => new Promise(resolve => setTimeout(() => resolve("Orders loaded"), 2000));
const p3 = () => new Promise(resolve => setTimeout(() => resolve("Products loaded"), 3000));

async function runAll() {
  try {
    const user = await p1();
    console.log(user);

    const orders = await p2();
    console.log(orders);

    const products = await p3();
    console.log(products);

    console.log("All done");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

runAll();