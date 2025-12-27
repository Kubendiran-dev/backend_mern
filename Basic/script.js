
var a = 10; // var is kind of variable, a is a decalartion which means name of variable & 10 is initialization value (=) is assignment operator  

console.log(a); // console.log is a printing statement & and it is also a kind of fn in js

a = 20; //this is called re-declaration & re-assign

console.log(a);

//variables :

var studentName = "Kubea"; // var is a global scope & fn scope 
console.log(studentName);

let average_score = 80; // let is a block scope 
console.log(average_score);

const fixed = { name : "kubea", DOB: "01/08/2004"} // const is used only for fixed values & const is a block scope 


// VARIABLES (var, let, const)
     
    var a = 10;
    let b = 20;
    const c = 30;

    console.log("var a:", a);
    console.log("let b:", b);
    console.log("const c:", c);

  
     // HOISTING
     
    console.log("Hoisting var:", x); // undefined
    var x = 100;


    // 3. SCOPE (Global, Function, Block)
     
    
    var globalVar = "I am Global";

    function testScope() {
      var functionVar = "I am Function Scope";
      console.log(functionVar);
      console.log(globalVar);
    }
    testScope();

    if (true) {
      let blockVar = "I am Block Scope";
      console.log(blockVar);
    }
    

    //PRIMITIVE DATA TYPES
    
    let num = 10;              // Number
    let str = "Hello";         // String
    let isTrue = true;         // Boolean
    let undef;                 // Undefined
    let empty = null;          // Null
    let big = 123456789n;      // BigInt
    

    console.log(num, typeof num);
    console.log(str, typeof str);
    console.log(isTrue, typeof isTrue);
    console.log(undef, typeof undef);
    console.log(empty, typeof empty);
    console.log(big, typeof big);
    

    //OPERATORS
   
    // Arithmetic
    console.log(10 + 5);
    console.log(10 - 5);
    console.log(10 * 5);
    console.log(10 / 5);
    console.log(10 % 3);

    // Assignment
    let n = 10;
    n += 5;
    console.log("Assignment:", n);

    // Comparison
    console.log(10 == "10");   // true
    console.log(10 === "10");  // false
    console.log(10 != 5);      // true

    // Logical
    console.log(true && false);
    console.log(true || false);
    console.log(!true);

    // Unary
    let count = 5;
    console.log(++count);
    console.log(--count);

    // Ternary
    let age = 18;
    let result = age >= 18 ? "Adult" : "Minor";
    console.log(result);

    //TRUTHY & FALSY VALUES
     
    // Falsy values
    console.log(Boolean(false));
    console.log(Boolean(0));
    console.log(Boolean(""));
    console.log(Boolean(null));
    console.log(Boolean(undefined));
    console.log(Boolean(NaN));

    // Truthy values
    console.log(Boolean(1));
    console.log(Boolean("Hello"));
    console.log(Boolean([]));
    console.log(Boolean({}));
    console.log(Boolean("0"));

    //TRUTHY/FALSY IN IF CONDITION
     
    let value = "";

    if (value) {
      console.log("This is Truthy");
    } else {
      console.log("This is Falsy");
    }
