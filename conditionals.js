//Conditionals

/*

Conditionals are: 
    - JS conditionals allow us to make decisions and carry out actions according to those decisions. 
        -Traditional if; else; and else if statements.
        -We can use the ternary operator
        -or a switch statement
    -Conditionals execute a piece of code if a condition is true by default

*/

let myNumber = 25;
// console.log(Boolean(myNumber))

/*
if (myNumber == true) {
    console.log("There's something inmyNumber variable")
}
*/
/*

if (conditional) {
    fire off this block of code if above condition is true
}

*/

// If Else

if (myNumber) {
    console.log(`My number is ${myNumber}`)
} else {
    console.log(`The condition appears to be false.`)
}

// Else if & chaining multiple statments
/*
let temp = 120;

if (temp > 100) {
    console.log("global warming, yo!")
} else {
    console.log("It's fine")
}
*/
// or 

/*
let temp = 60;

if (temp > 100) {
    console.log("global warming, yo!")
} else if (temp > 80) {
    console.log("Nice summer day")
} else if (temp >= 60) {
    console.log("Sring or fall?")
} else if (temp < 60) {
    console.log("What's next snow plows")
} else {
    console.log("Bruv, you alright? this is a weather app!")
}
*/

// Testing Multiple COnditions

let myName = "Danielle";
let age = 20;

if (myName == "Paul" && age == 25) {
    console.log(`Paul is lying to you. He's not ${age}`)
} else if (myName == "Danielle" && age >= 21) {
    console.log(`She's your instructor, but I don't know her age. I assume she's over 21 because she had wine last night.`)
} else {
    console.log(`I'm lonely please send help.`)
}

// Ternaries

/*

Ternaries are:
 -A conditoonal statement which takes three operands:
  -a conditon followed by a quesrion mark ?
  -a truthy expression followed by a colon :
  -falsey expression
-Shortcut to the if statement

*/

let lightSwitch = true;

// condition ? block of code if true : block of code if false 

/* if else statement:
if (lightSwitch) {
    console.log(`Lights are on`)
} else {
    console.log(`Lights are off`)
}
*/

//ternary

lightSwitch ? console.log(`Lights are on`) : console.log(`Lights are off`)
/*
temp = 90; 

temp >= 100 ? console.log(`Am I in Florida?`)
: temp >= 80 ? console.log(`Fine summer day`)
: temp >= 60 ? console.log(`Spring or Fall?`)
: temp >= 40 ? console.log(`What's next? Snow plows?`)
: console.log(`I asked for the temperature, not your life story!`)
*/

//Switch Statements

/* 
    Switches evalute expressions matching their expression value to a case clause. Switch then executes that case statemtn until it is "broken"

*/

console.log(`------------`)

temp = 100

switch(true) {
    case temp >= 100:
    case mySwitch : // allows you to nest multiple "if" switches together to check their condition
        console.log(`Am in Florida?`)
        break // break prevents fall through into another "if" switch
    case temp >= 80: 
        console.log(`Fine summer day`)
        break
    default: 
        console.log(`llll`)
        break
}

// console.log(new Date().getDay())

switch(new Date().getDay()) {
    case 0: 
        console.log(`Sunday`)
        break
    case 1:
        console.log(`Monday`)
        break
    case 2:
        console.log(`Tuesday`)
        break
    case 3:
        console.log(`Wednesday`)
        break
    case 4:
        console.log(`Thursday`)
        break
    case 5: 
        console.log('Friday')
        break
    case 6: 
        console.log(`Saturday`)
        break
}

// Challenge

// Create a variable with any number between 0-100.
// For multiples of three, print "Fizz"
// For multiples of five, print "Buzz"
// For multiples of three and five, print "Fiz Buzz"
// If not multiples of three and five, print the number itself. 


/*
let i=1;
for (i < 101; i++) {
    if (i % 15 == 0) console.log(`Fizz Buzz`);
    else if (i % 3 == 0) console.log(`Fizz`);
    else if (i % 5 == 0) console.log(`Buzz`);
    else console.log(i);
}
*/

//Without For loop

let testNum = 3

testNum % 15 === 0 ? console.log(`Fizz Buzz`)
: testNum % 5 === 0 ? console.log(`Buzz`)
: testNum % 3 === 0 ? console.log('Fizz')
: console.log(testNum);