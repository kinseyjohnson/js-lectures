// For of Loop

/*
    For of Loop iterates over property values. 
    Better suited for arrays and strings when values are needed.
    * Gets values out of an array

    Syntax:

    for (iterate of interable) {
        bloakc of code to execute on each iterate run
    }

*/

let classmates = ["Kayce", "Aex", "Jessica", "Jacob", "Freya"]

for(student of classmates) {
    console.log(student)
}

let myText = "This is my sample text."

for (letters of myText) {
    console.log(letters)
}

// object not iterable 
let person = {
    name: "Paul",
    age: 25
}
/* // object not iterable (instead use the below)
for (i of person) {
    console.log(i)
}
*/

for (i of Object.entries(person)) {
    console.log(i)
}
//or
for(let [k, v] of Object.entries(person)) {
    console.log(`${k}: ${v}`)
}