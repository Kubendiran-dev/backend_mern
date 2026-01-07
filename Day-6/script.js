//1

function showMessage() {
  console.log("Hello after 2 seconds");
}

setTimeout(showMessage, 2000);


//3

function step1(callback) {
  setTimeout(() => {
    console.log("Step 1 completed");
    callback();
  }, 1000);
}

function step2(callback) {
  setTimeout(() => {
    console.log("Step 2 completed");
    callback();
  }, 1000);
}

step1(() => {
  step2(() => {
    console.log("All steps done");
  });
});


//5

function fetchData(callback) {
  setTimeout(() => {
    callback("API data received");
  }, 2000);
}

fetchData((data) => {
  console.log(data);
});


//2

function calculator(a, b, operation) {
  operation(a, b);
}

function add(x, y) {
  console.log("Sum:", x + y);
}

calculator(10, 5, add);


//6

const delayPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Resolved after 2 seconds");
  }, 2000);
});

delayPromise.then(console.log);

//7

const errorPromise = new Promise((resolve, reject) => {
  reject("Something went wrong");
});

errorPromise.catch(console.log);


//8

new Promise((resolve) => {
  resolve(5);
})
.then((num) => num * 2)
.then((result) => console.log(result));


//9

const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);

Promise.all([p1, p2])
.then((values) => console.log(values));


//10

function fetchDataPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
}

fetchDataPromise().then(console.log);

//11

async function getValue() {
  return 100;
}

getValue().then(console.log);


//12

async function errorExample() {
  try {
    throw new Error("Something broke");
  } catch (error) {
    console.log(error.message);
  }
}

errorExample();


//13

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runSequential() {
  await delay(1000);
  console.log("First");

  await delay(1000);
  console.log("Second");
}

runSequential();

//15

function fetchData() {
  return Promise.resolve("Fetched data");
}

async function showData() {
  const data = await fetchData();
  console.log(data);
}

showData();
