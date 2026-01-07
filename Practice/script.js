//reduce
let students = [
    {name:"kubea",grade:"a"},
    {name:"ramya",grade:"b"},
    {name:"rakshi",grade:"a"}
]

let result = students.reduce((grp,stu)=>{
    let key = stu.grade;

    if(!grp[key]){
        grp[key]=[]
    }

    grp[key].push(students)
    return grp
},{})

console.log(result);



let nums = [1,2,3,4,5,6];

let cal= nums.reduce((val,index)=>{
    let key = index % 2 === 0 ? "even" : "odd"
    if(!val[key]) val[key]=[];
    val[key].push(nums);
    return val
},{})

console.log(cal);

//find 

let num = [4,8,12,16];

let find = num.find((n=>n>10));
console.log(find);

//FindIndex

let index = num.findIndex((n=>n>10));
console.log(index);

//Every

let no = [2,4,6,8];

let every = no.every(n=>n%2===0);

console.log(every);


//Sort

let number = [10,5,8]

let sort = number.sort((a,b)=>a-b);

console.log(sort);

//chaining method

let value = [20,10];

let chain = value.filter((n=>n%2===0))
.map((n=>n*10))
.sort((a,b)=>a-b);

console.log(chain);

//default parameters

function greet(name="user"){
console.log(name);
}

greet();
greet("kubea");

//destructuring

let obj = {
    Uname:"rakshi",
    age:21,
    degree: "bsc"
};

let {Uname,age,degree} = obj;

console.log(Uname);
console.log(age);
console.log(degree);

//spread operator

//array spread

let a = [1,2];
let b = [3,4];

let join = [...a,...b];

console.log(join);

//object spread

let obj1= {a:1};
let obj2= {b:2};

let add = {...obj1,...obj2};

console.log(add);

//template literals

let c = 100;
let d =  200;

console.log(`sum is ${c+d}`);


