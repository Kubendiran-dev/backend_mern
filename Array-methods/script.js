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



