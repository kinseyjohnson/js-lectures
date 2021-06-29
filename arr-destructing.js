// Array Destructing & Spread Operator

// Spread Operator
    // - Spread operator pulls out all elements of an array and gives you a stand alone list of them
    // - Denoted by ...
    // - Must be inserted into a new array [...]
    // - Spread operator unpacks the values from one array or object into another
    // - Add values to original array without affecting its copy
    // - Copy notfication does not affect the orginal 

    let fullName = ["Kinsey, Johnson"]


    // This causes fullName array to be nested inside of the tempArr array
    // let tempArr = [fullName]

    // console.log(tempArr)

let tempArr = [...fullName]
console.log(tempArr);

// We can yse multiple spread operators to unpack multiple arrays into a new array. 

let birthPlace = ["Mt.Vernon", "Indiana"]

let nameBirth = [...fullName, ...birthPlace]
console.log(nameBirth);

// ... & Numbers

console.log(Math.min(1, 5, -3)) // you get -3, because it's the min number

let prices = [10.99, 2.99, 5.83, 27.99, 6.58]
//This fails when console logged because an array is NaN (not a number)
// fix by using spread operator:
console.log(Math.min(...prices))

// ... & Objects

let persons = [{name: "Kinsey", age: 25}, {name: "Ann", age: 20}]
console.log(persons)

let copiedPersons = [...persons]
console.log(copiedPersons)
persons.push({name:"Freya", age: 21})

// Any changes we make to the persons or copiedPersons when modified, access the reference value in the memory. For that reason, any changes made to wither persons or copiedPersons will be reflected in it's counterpart. 

console.log(persons)
console.log("------------------")
console.log(persons, copiedPersons);

//How do we avoid changing orginal and copied array?
//Make sure to return new objects with their own memory space.

let newPersons = persons.map(person => ({
    name: person.name,
    age: person.age
}))
newPersons.push({name: "Kayce", age: 21})
newPersons[0].name = "Henry"
console.log("============");
console.log(newPersons)

/*
    JavaScript has 5 primitive data types:
     -boolean
     -null
     -string
     -number
     -undefined
    These datatypes are assigned to a value 

    Three data types passsed by reference:
    -array
    -function
    -object
    Non-pimitive data types contain a reference to a value. The reference points to the objects location in memory. Variables don't contain a value.
*/

let x = 10; // Stored in memory: variable is x and the value is 10 
let y = "abc"; // Stored in memory: variable y and value "abc"

let a = x
let b = y 

console.log(x, y, a, b)

let arr = [] //create an array in memory. Arr recieves the address location of that array somewhere in memory. 

arr.push(1)

/*
    Variable        Value               Address                  Object
    arr              <#001>              #001                      []
    arr             <#001>                 #001                     [1]
*/

let reference = [1];
let refCopy = reference

/*
    Variable        Value               Address                  Object
    reference       <#001>              #001                      [1]
    refCopy          <#001>               
*/

reference.push(2)
console.log(reference, refCopy)


let myObj = {
    name: "Kinsey",
    age: 25,
    lives: "Indy"
}

console.log(myObj.name)

let newObj = myObj

newObj.name = "John"
console.log(newObj.name)

/*
    Variable        Value               Address                  Object
    myObj.name      <#001>              #001                      "paul" ==> "john"
   newObj.name      <#001>                                         
*/

// How to clone objects in JS

let ourObject = {
    name: "Anne",
    age: 22,
}

//Utilize an object constructor

let copiedObject = new Object(ourObject)
console.log(copiedObject)
//ourObject.name = "Paul"
console.log(copiedObject)

//Or

let copiedUsingSpread = {...ourObject}
console.log(copiedUsingSpread);
copiedUsingSpread.name = "Testing"
console.log(copiedUsingSpread)
console.log(ourObject)


// Array Destructuring
/*
 Array Destructuring allows you to unpack values from arrays or properties from objects ---> into distinct variables
    -Similar syntax as array literal
    -Left hand side of assignment operator 
    -used to unpack array/object into distinct variables

*/

let cities = ["Boston", "New York", "Chicago", "LA"]

let unpackCities = [...cities]
console.log(unpackCities)

// let boston = cities[0]
// console.log(boston)

/* 
JS unpacks the values from cities array and assigns each value its own variable based on their original position in an array
*/

let [boston, newYork, chicago, la] = cities
console.log(boston)
console.log(newYork)
console.log(chicago)
console.log(la)

//Rest Syntax

/*
    Rest looks just like spread syntax. Spread expands an array. Rest collects multiple elements and condenses them into one. 
*/

let cars = ["Porsche", "BMW", "Maseratie", "Aston Martin", {transmission: "manual", year: 2012, whereIsDriven: "rwd"}]

let [porsche, bmw, ...otherInfo] = cars
console.log(bmw)
// otherInfo becomes an array of the rest of the elements of cars.
console.log(otherInfo)

//How to skip values using rest operator
//Rest operator must be the last element defined

let [brand, , , , ...features] = cars
console.log(brand, features)

// Challenge
/*
    Create an array called statesVisited wih a list of states you’ve been to.

    Create an instance of that array called statesCountries and unpack all of the array values of statesVisited inside it. Now add additional countries to which you have been (if none, add ones that you intend on visiting).

    Now unpack each individual state into its own variable, and unpack all of the countries into its own ‘countries’ variable.

*/

let statesVisited = ["Pennsylvania", "New York", "California", "Utah", "Colorado"];
let statesCountries = [...statesVisited, "Spain", "Italy", "France"]
//console.log(statesCountries);

statesCountries.push("Mexico")
//console.log(statesCountries)

//unpacking states
let [pennsylvania, newYork, california, utah, colorado, ...countries] = statesCountries

console.log(pennsylvania, newYork, california, utah, colorado, countries)

