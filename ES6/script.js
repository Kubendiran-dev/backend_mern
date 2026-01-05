//task-1
//var
var x = 10;
x = 20;      // reassign 

var x = 30;  // redeclare 
console.log(x); 

//let
let y = 10;
y = 20;      // reassign 

//const
const z = 10;

// z = 20; Error
// const z = 30;  Error

const arr = [1, 2];
arr.push(3);     // allowed
// arr = [4,5];  not allowed
console.log(arr);


const obj = { name: "Kubea" };
obj.name = "Ramya"; //  allowed
console.log(obj);


// //task-2

function add(a, b) {
  return a + b;
}//normal


console.log(add(5,5));


const added = (a, b) => a + b;//arrow fn
console.log(added(5,15));

const square = x => x * x;//one parameter

console.log(square(8,8));


 const user = () => ({ name: "Kubea", age: 22 });//Return object
console.log(user());


 const nums = [1,2,3];
const doubled = nums.map(n => n * 2);//arrow with map
console.log(doubled);


//task-3
//Template Literals
const name = "Kubea";
const age = 22;
console.log(`Name: ${name}, Age: ${age}`);

//default parameter

function greet(name="user"){
console.log(name);
}

greet();
greet("kubea");

//spread operator

let object = {
    Uname:"rakshi",
    Uage:21,
    degree: "bsc"
};

let {Uname,Uage,degree} = object;

console.log(Uname);
console.log(Uage);
console.log(degree);



//array spread

let a = [1,2];
let b = [3,4];

let join = [...a,...b];

console.log(join);

//object spread

let obj1= {a:1};
let obj2= {b:2};

let collab = {...obj1,...obj2};

console.log(collab);


//logical
//2:
const array = [1,0,3,0,5,0,2];
const result = [...array.filter(n=>n!==0), ...array.filter(n=>n===0)];
//spread + filter
console.log(result);


//3:

function isRotation(a,b){
  return a.length === b.length && (a+a).includes(b);
}

console.log(isRotation("abcd", "cdab"));

//TERNARY
const n = 10
const res= n % 2 === 0 ? "Even" : "Odd";
console.log(res);

//chaining method

let value = [20,10];

let chain = value.filter((n=>n%2===0))
.map((n=>n*10))
.sort((a,b)=>a-b);

console.log(chain);

