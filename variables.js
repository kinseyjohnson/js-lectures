// Varaibles

/*

Variables are:
    -Primative data type which can hold any type of value (object).
    -Begin with a declaration and can have values assigned, but not necessary.
    -Delcarations are case sensative (ex: student is not the same as Student).
    -Preferrable variable naming convention is camelCase.
    -Variables may not begin with a number. Thye can begin with _ or $.
    -Default 
    
*/

let student; // Variable Declaration 
// New keyword introduced with ES6.
console.log(student) // Comes back undefinded becase we didn't assign student a value

student = "Jessica" // Assigned string value to variable student 

console.log(student)

// Declaration = value 
let homework = "Never" // Variable delclaration of homework with string value of "never"

console.log(homework)

var teacher; // Variable Declaration
// Old keyword. Causes lots of headaches with scope and hoisting. 

const classroom = "Web Dev"; // Variable Delclaration
// Declares a variable that may ne be reassigned. 
// Cannot be delclared with undefined. Must have value attached.

console.log(classroom)

// console.log(classroom = "Math") will not work 

//Numbers 

let myNum = 5;
let myFavNum = Number("5.0")
console.log(myFavNum)
