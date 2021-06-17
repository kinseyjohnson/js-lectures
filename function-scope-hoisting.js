// Functions
/* 

Function is a block of code that can take in parameters (door), perfrom an action, and return the result of that action.
There are two types of functions:
    - function declaration
    -function expression
        - arrow functions

Functions have a default return statement of undefined unless otherwise specified. 
*/

// Function Declaration 

/* Delcarations are hoisted. This is their template:

    function functionName(parameter) {
        block of code to be run
        return statement (not needed)
    }
*/



function funDeclaration() {
    console.log("This is a function declaration")
}

// Function will not run until it is called. Call it by:
// Parentheses immediately invoke (call) the function
// Functions can have 0-infitie amount of parameters.
// Parameters act as doors to let arguments inside of the function

funDeclaration()

function greetUser(name) {
    return `Hello ${name}`
}
let userName1 = "Kinsey"
let userName2 = "Marshall"
let userName3 = "Jessica"

console.log(greetUser(userName1))
console.log(greetUser(userName2))
console.log(greetUser(userName3))

// Function Expression 

/*
    Function expression utilizes a variable as a placeholder.
    Function expression is not hoisted.

*/
//                   parameters
let myDog = function(name, breed) {
    console.log(`${name} is a ${breed}`)
}

console.log(myDog("Bently", "Olde English Bulldog"))

// Arrow Function
/*
    Introduced in ES6
    More concise way of writing functions
    Arrow functions are created using function expression ONLY 
*/
// Concise body function 
// Can only have one parameter if it's not enclosed by ()

let greeting = () => console.log(`Hello friend`)

greeting()

// Block Body Arrow Function

let sendEmail = (email, name) => {
   return `Hello ${name}:

    We have been trying to reach you about your car's extended warranty.

    Is this email the correct email for you? ${email}

    Sincerly,

    Annoying people.`
}

console.log(sendEmail("kinseyjohnson18@gmail.com", "Kinsey"));

// Immediately Invoked Function Execution 
/*
    Function Declarations that have no name and are immediately invoked.
*/

(function () {
console.log("IIFE")
})();

// Function return statements 
// Must always return only one value

function returnFun(x, y) {
    // return x, y returns 5 because return must only have one value
    return [x, y]
}

console.log(returnFun(2, 5))

// Challenge
// Create a function declaration named tipCalculator which takes the pre-tax bill, sales tax and tip percentage and returns the tip amount. 

/*
MY WORK -- THis is WRONG
function tipCalculator () {
    return `Your total is ${number}`
    let billTotal = 98
    let salesTax = 2
    let tip = 20
}
    console.log(tipCalculator(billTotal))
    console.log(tipCalculator(salesTax))
    console.log(tipCalculator(tip))
*/

function tipCalculator(bill, salesTax, tipPercent) {
    let taxAmt = bill * (salesTax/100)
    let totalBill = bill + taxAmt 
    let totalTip = totalBill + (tipPercent/100)
    let billTotal = totalTip + totalBill
    return `Your bill total is ${billTotal} of which the top is ${totalTip}`
}

console.log(tipCalculator(100, 7, 20))

/*
    Create a function of your choice (Declaration or Expression) named capitalizeName which takes one parameter. It then capitalizes the first letter of the name and returns the full name to you.

*/

/* THIS IS MY WORK AND ITS WRONG
function capitalizeName (name) {
    let first = "k"
    let upperCase = "first.toUpperCase()"
}
console.log(myName)
*/

function capName(name) {
    let lowerName = name.toLowerCase()
    let fLetter = lowerName[0].toUpperCase()
    return fLetter + lowerName.slice([1])
}

console.log(capName("kinsey"))

// or

function capitalizeName(name) {
    return name[0].toUpperCase() + name.slice([1]).toLowerCase()
}
console.log(capitalizeName("kinsey"))

//Extra Spicy Challenge
// Create a function which reverses a string using recursion.
/* MY WORK
function returnFun (x, y) {
    x = "Kinsey"
    y = "Johnson"
    return [x, y]
}
*/

function revStr(str) {
    return (str === "") ? "" : revStr(str.substr(1)) + str.charAt(0);
}

console.log(revStr("Paul"))

//or

function revStr(str) {
    if (str === "")
        return
    else
        return revStr(str.substr(1) + str.charAt(0))
}

revStr("Paul")

// Extra credit showing where to use fx expression vs function declaration
 let arr = ["Paul", "Jessica", "Marshaw", "Alex", "Foluso", "Dakota"]

 arr.map(value => console.log(value))
 // the above is a function expression -- more preformant and more elegant

 arr.map(function(value) {console.log(value)})
 // the above is a function declaration -- looks like a brick hit and slow 