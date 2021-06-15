// Data Types

/*
There are six primitive data types in JS
    -string
    -number
    -boolean
    -null
    -undefined
*/

// string

let myString = "this is a string"
//Can use ' ', " ", or ` ` to encompass your string. Just be consistent/

console.log(myString)

// String Concatination

let san = "San";
let diego = "Diego"

console.log(san + " " + diego)

// concatination attached
let concat_full = san.concat(diego)

console.log(concat_full)

let longString = "This is a long string \n and I would like it on multiple lines"

console.log(longString)

// Strings can be accessed by their index, using [] notation

console.log(longString[3])

// Template literal or Template string


/*
    -Utilizes back ticks ` ` to allow us to contain placeholders.
    -Syntax for it is `string and a ${value}`
*/

let firstName= "Paul"
console.log(`Hello, my name is ${firstName}`)

// numbers

let integer = 90;
console.log(integer)

let float = 5.6
console.log(float)

let degrees = 90;
console.log(degrees)

let rounded = 0.2 + 0.1
console.log(rounded) // Returns 0.3000000000004

let strNumber = "125"
let strConvertedNumber = Number(strNumber)
console.log(strConvertedNumber)

// Literals
// Hardcoded values


let literalString = "Literal String";
console.log (literalString)

// Can be created using constructors,
let constrLiteralStr = String("Literal string")
console.log(constrLiteralStr)

// Booleans

/*
Booleans are:
    True or false values
        -Booleans have six primitive falsey values.
            -0
            -emty string " "
            -false
            -Undefined 
            -Null (not a number)
            -Any other value in JS is considered truthy
    Represented by lowercase letters

    */

    let trueValue = true
    console.log(trueValue)
    let falseValue = false
    console.log(falseValue)

    console.log(Boolean(1))

    let truthy = Boolean(5)
    console.log(truthy)

