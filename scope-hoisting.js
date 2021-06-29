// Scope & Hoisting

/*

    Scope determines how different blocks of codes can be accessed.
        Three types of scope:
            -Global (everything in main document)
            -Block or local
            -Function

*/
// Global Scope
/*
Our JS file, or Window object in terms of browser.
Accessible from every other scope
*/

let x; 
console.log(x)
function addOne() {
    x = 1
}
addOne()
console.log(x)

// Function Scope 
// Can br accessed inside the function only!

function carName() {
    let name = "Maserati"
    var model = "Ford"
    if (true) {
        // let will not let you console.log
        // rules for let applies to const as well
        // it is scoped to the enclosing block 
        // let year = 2013
        var year = 2013
        // var will let you console.log
        // scoped to enclosing function 
    }
    console.log(year)
    //console.log(name, model)
}
carName()


// Let/Const vs Var
/*
    Let is scoped to the immediate enclosing block of code
    let is NOT hoisted
    Var is hoisted and scoped to the immediate function block 
*/

{
    let blockScopeVariable = " Block scope"
    // ReferenceError scoped to this block
    var functionScopeVariable = "Function Scope var(iable)"
}

// In this instance, function scope is the same as global scope 
console.log(functionScopeVariable)

// Hoisting
/*
    JS is an interpreted language that is being read top to bottom and left to right. The parser reads the code goes over it twice.
    First to hoist or assign memory location to ALL VAR(iable) declarations as well as Function Declarations. During the second pass, the interpreter actually reads the initilization values and expression that we have assigned and executed code. 
*/

let y; 
console.log(y)
// 1. y gets declared and assigned a value of undefined
// 2. console log reds the undefined vlaue

// The code below results in an error because let does not get hoisted
// console.log(z)
// let z; 

// The code below works because var gets hoisted first, before console.log executes.
console.log(a)
var a;

// First console log returns undefined because cheese is hoisted
console.log(cheese)
var cheese = "Gouda"
// the second console log returns gouda because hoisted delcaration has been reassigned  the valie on line 84.
console.log(cheese)

// Hoisting & Function Declaration vs Function Expression


// This is a function delcaration.
//invoking the function before creating will work because function declaration is hoisted.
helloWorld()
function helloWorld() {
    console.log("Hello world from the Hoisting Side! - Adele")
}
// The below is the function invokation
//helloWorld() //invoking the function

// addNums(5, 5)
// The above invokating will not work on top because function expressions are NOT hoisted.
addNums (5, 5)
let addNums = function(x, y) {
    console.log(x + y)
}

// Works (10) because function is created, then invoked.
addNums(5, 5)


// Arrow functions as derivaives of fx expressions are also NOT hoisted.

