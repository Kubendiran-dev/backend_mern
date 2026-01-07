// fn index and call:

function greet(){
    console.log("vanakkam chennai");
}

greet();
greet();

// parameters and aruguments:

function add(a,b){ //a,b is a parameter
    console.log(a+b);
}

add(10,30); // 10,30 is a arguments
add(80,20);

function user(name){
    console.log("user is " +  name);
}

user("kubea"); // fn call 

// return fn :

function sum(a,b){
    return a+b;
}
let res = sum(15,25);
console.log(res);


function cal(a,b){
    return a+b;
}
let output = cal(99,11);
console.log(output);

function fn(a,b){
    return a+b
}
console.log(fn(10,2));

// arrow fn :

const arrow= (a,b) => a + b;
console.log(arrow(55,65));


// for loop :

for(let i=0; i<5; i++){
    console.log(i);
}

for(let i=2; i<=10; i+=2){
    console.log(i);
}

for(let x=5; x>=1; x--){
    console.log(x);
}    

let addi = 0;
for(let i=1; i<=10; i++){
    addi += i;
}
console.log(addi);

for(let i=1; i<=10; i++){
    console.log(7*i);
}

let a = 0;
for(let i=1; i<=10; i++){
   if(i%2!==0){
    a++
   }
}
console.log(a);

let array = [10,20,30];
for(let i=0; i<array.length; i++){
    console.log(array[i]);
}


// for of :

let arr = [10,20,30];

for(let value of arr){
    console.log(value);
}

//for each :

// with arrow fn:
arr.forEach((value,index)=>{
    console.log(index,value);
})

// with normal fn:
arr.forEach(function(value,index){
    console.log(index,value);
})

let arrays = [10,20,30];
let sums = 0;

arrays.forEach((arrays)=>{
    sums+=arrays
})
console.log(sums);

let users = ["kubea", "abi", "srinath"];

users.forEach((user)=>{
    console.log("hello " + user);
})


// map fn :

// short version:

/*
let nums = [1,2,3,4];

let doubled= nums.map(value=>value*2);

console.log(doubled);
*/

// long version :

let nums = [1,2,3,4];
 let doubled = nums.map((e)=>{
    return e*2;
 });

 console.log(doubled);
 
// filter :

let numbers = [11,12,13,14,15];

let evens = numbers.filter(n=>n%2===0);

console.log(evens);

// reduce :

let digits = [1,2,3,4];

let total = digits.reduce((acc,value)=>{
    return acc + value}, 0 
)
console.log(total);

// Original
function greet(name) {
  return "Hello, " + name;
}


console.log(greet("kubea"));

// 1. Normal arrow
const greet1 = (name) => {
  return "Hello, " + name;
};

console.log(greet1("rakshi"));

// 2. Implicit return
const greet2 = (name) => "Hello, " + name;

console.log(greet2("madhavi"));

// 3. Without parentheses
const greet3 = name => "Hello, " + name;

console.log(greet3("nagaraj"));


//callback

function wishes(name){
    console.log("happy "+ name);   
}

function festival(callback){
    callback("diwali")
}

festival(wishes);