// For Loop

/* 

* A way to perform mundane repeatable tasks quickly. Loops iterate (go over) an interable (soemthing that can be gone over, such as counting from 0-100)

Syntax: 

for (start parameter, stop praram, step parap) {
    code applied to each step of the iteration
}

*/

/*
for (let i = 0; i <= 100; i++) {
    //let i = 0 is not needed; can use i = 0 
    // i++ is the same as i = i + 1
    console.log(i)
}

for (let i = 100; i >= 0; i--) {
    console.log(i)
}
*/

console.log(`---------`)

let myName = "Kinsey Johnson"

console.log(myName.length)
console.log(myName[3])

for (symbols = 0; symbols < myName.length; symbols++) {
    console.log(myName[symbols])
}


