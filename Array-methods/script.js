//map:

const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(num => num * num);

console.log(squaredNumbers);

//Filter:

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 40 },
  { name: "Bag", price: 120 },
  { name: "Bottle", price: 30 }
];

const under50 = products.filter(product => product.price < 50);

console.log(under50);


//reduce:

const text = "javascript";

const letterCount = text.split("").reduce((acc, char) => {
  acc[char] = (acc[char] || 0) + 1;
  return acc;
}, {});

console.log(letterCount);


const rectangle = {
  length: 10,
  width: 5,

  area() {
    return this.length * this.width;
  },

  perimeter() {
    return 2 * (this.length + this.width);
  }
};

console.log(rectangle.area());      // 50
console.log(rectangle.perimeter()); // 30


const users = [
  { name: "Abi", age: 25 },
  { name: "Raj", age: 17 },
  { name: "Kumar", age: 30 },
  { name: "Sibi", age: 22 }
];

const result = users
  .filter(user => user.age >= 18)      
  .map(user => user.name)             
  .sort();                              

console.log(result);


//task:
//1.
function doTask(callback) {
  callback();
  console.log("Task Completed");
}

doTask(() => {
  console.log("Callback executed");
});

//2.
function checkAge(age, callback) {
  callback(age);
}

checkAge(20, function (age) {
  if (age >= 18) {
    console.log("Eligible to vote");
  } else {
    console.log("Not eligible");
  }
});


//4.let arr = [10, 20];

arr.push(30, 40, 50); 
arr.shift();         

console.log(arr);

//5.
let nums = [1, 2, 3, 4];

nums.pop();      
nums.push(99);   

console.log(nums);

//6.

let data = [10, 20, 30, 40, 50];

data.splice(2, 2); 

console.log(data);


//7.

const prices = [100, 200, 300];
const GST = 0.18;

const gstPrices = prices.map(price => price + price * GST);

console.log(gstPrices);

//8.

const salaries = [20000, 30000, 25000];

const totalSalary = salaries.reduce((sum, salary) => sum + salary, 0);

console.log(totalSalary);

