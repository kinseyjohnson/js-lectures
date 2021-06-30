// Async Await 
/*
    Introduced in ES8. Async allows us to avoid chaining pomises (.then())
    Allows us to write async code in a synchronous manner. 
    Same as regualr functions except for one key difference:
        - Async function always returns a promise

    */

//     async function myFx() {
//         // Fx declaration
//         return "Hello World"
//     }

//     // Async function always returns a promise 
// console.log(myFx())

// //To resolve our promise, we utilize .then()
// myFx().then(console.log)

// // Alternate representation returning a promise without async
// function promiseFx() {
//     return Promise.resolve("Hello World")
// }

// promiseFx().then(console.log)

//     const myFx = async () => {
//         // Fx expression (arrow)
//     }

    // Await 
    /*
        Await is used only inside of an async function.
        It waits for the promise to resolve or reject 
    */

let spaceXURL = "https://api.spacexdata.com/v3/history"

        // fetch(spaceXURL())
        //     .then(response => response.json())
        //     .then(data => console.log(data))

async function fetchData() {
    const response = await fetch(spaceXURL)
    const data = await response.json()
    console.log(data)
}

fetchData()