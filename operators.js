// operators

/*

Assignment, Arthimetic & Comparison
    -Assignment assigns value to a declaration
        -denoted by =
    -Arithmetic operators perform simple math
        -Addition +
        -Subtraction - 
        -Division /
        -Multiplication *
        -Exponent **
        -Modulus %
        -Math. objects to help with other operations 
    -Comparison operators compare values 
        -Equality and Strict Equality == & ===
        -Inequality and Strict Inequality ==/ & ===/ (=!)
        -Greater than or less than > < 
        -Greater or equal than or less than equal than >= <=
        -AND && and OR //

*/

let age = 25;

// Modulus - previous remainder of Euclidean division

console.log(25 % 5);

// Math Object - allows access to more advanced mathematical computations

console.log(Math.max(5, 2, 17, 22, 97))

// Equality vs strict Equality Operators 

/* 

Equality & Strict Equality Opertors 
    - Return truthy or falsey value depending on a given condition
    -Equality performs type coercion on one of the values it's being compared to. For ex: 5== "5" converts the string into an integer.
    -Strict equality checks if the value and its type are the same 

*/

console.log(5 == 5) // returns true

console.log(5 === 5) //returns true

console.log(5 === "5")// returns false because we're checking for value and value type

let x = 5;
let y = "5";

console.log(typeof x, typeof y) // same value, different data type

// Inequality and Stric Inequality

console.log(5 != 7) // returns true (5 is not equal to 7)
console.log(5!=5) //returns false (both values are the same)
console.log(5!="5") //returns false (type coercion makes str(5) an int (5))
console.log(5!=="5") //returns true (different data types)

// AND && Comparison 
// Returns true if two values are the same
console.log(true && true)
console.log(Boolean(25 && 25))
// Returns false if either of the values are not the same
console.log(true && false)
console.log(Boolean(25 && 0))

// OR || Comparison
// Returns true if either of the values are true
console.log("-----------------")
console.log(true || false)
console.log(true || true)
console.log(false || false)

// Strict Inequality & Booleans !=
// Flips resulting boolean
let flippedBool = !true
console.log(flippedBool)
console.log("-----------------")




// Challenge How to get date in javascript
let date = new Date
let year = date.getFullYear()
let month = date.getMonth()
month += 1 //month = month + 1 or month = 5 + 1 
let day = date.getDay()

console.log(date.toDateString())

console.log(`Today is ${day} day of ${month} of ${year}`)

// Null vs Undefined vs Not a Number

/* 
    Null - empty calue; a container or space for somehing to fill it in the future.
    Undefined - default value of a declaration. Does not act as any empty container. 
    Not a number (NaN) - determines if a vlaue is not a number 


    */

console.log(isNaN(123)) // returns false (is a number)
console.log(isNaN(0/0)) // returns true (can't divide by zero; NaN)
console.log(isNaN(NaN)) // returns true
console.log(isNaN(Math.sqrt(-1))) // returns true because imaginary (i) number is NaN

// Challenge 
/*
Silver
    Create three variables: name (str), age (int), and a city and state where you live (str). Use template literal to console log it. 

Gold
    Create a new variable called result which holds a concatednated version of your prior variables. Find a method that will console log the length of your new variable.

Platinum 
    utilize a method that will make all your text capitalized and check if you live in indianapolis

*/

// Silver Challenge
let myName = "kinsey";
let myAge = 25;
let cityState = "indianapolis, in";

console.log(`Hello, my name is ${myName}. I am ${age} years old. I live in ${cityState}.`)

//Gold
/*
let concat_full = myName.concat(` `, `is my name, I'm ${myAge} years old. I live in ${cityState}.`, )
console.log(concat_full)
*/

//or 
/*
let concat_full = myName + " " + myAge + " " + cityState
console.log(concat_full)

let concatFullLength = concat_full.length
console.log(concat_full.length)
*/

// Platinum 
 let result = myName + " " + myAge + " " + cityState

 console.log(result)
let concatFullLength = result.length
console.log(concatFullLength)

result.includes("Indianapolis, IN")
result.toUpperCase()
