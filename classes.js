// Classes
/*

Classes are:
    -templates for creating objects. Thye encapsulate data with code. JS is a heavily prototype-based OOP language.
    -considered special functions and therefore can be defined as:
        -class expression
        -class declaration
        -
*/

// Class Declaration
// Class name should always be capitalized 
// Function declarations are hoisted. Class Declarations are not 

class Teacher {
    // constructor - a class method for creation and initialization of a class object.
    constructor(name, subject, tenure, isPolygot) {
        this.name = name;
        this.subject = subject;
        this.tenure = tenure;
        this.isPolygot = isPolygot;
    }
}

// Instantiating a Class

let pNiemczyk = new Teacher("Paul", "Coding", 1, true)

console.log(pNiemczyk)

// Creating objects for every teacher is laborious.
// Class make us an easy template ro reuse over and over again. 

// let teacher = {
//     name: "Paul",
//     subject: "coding",
//     tenure: 1,
//     isPolygot: true
// }

// console.log(teacher.name)

// Class Expression

let House = class {
    constructor(address, bedrooms, bathrooms) {
        this.address = address;
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
    }
}
//Creating an Instance of Class Expression (so we don't change the orginal--our template.(above))
 let parkAve401 = new House("401 N Park Ave", 2, 2)
 console.log(parkAve401)

 // Class Methods

/*
    Method is a funciton that lives inside of a class that can be reused on any class instances.
*/

class Car {
    constructor(make, model, year, transmission) {
    
    this.make = make;
    this.model = model;
    this.year = year; 
    this.transmission = transmission;
    }

    //Method
    greetDriver() {
        console.log(`Welcome to your ${this.year} ${this.make} ${this.model}`)
    }

    age(currentYear) {
        let result = currentYear - this.year
        return `Your car is ${result} years old.`
    }
}

let prosche = new Car("Porsche", "911", 2018, "manual")



console.log(prosche.greetDriver())
console.log(prosche.age(2021))

function saySomething () {
    console.log("Something")
}
saySomething()

//Challenge
// Create a class object called Avengers. It will have properties of name, superpower, age, isDead, keyMovie. 
// Create an instance of that object with the superhero name and its properties
//Create a method that console logs the name and keyMovie together
 

class Avengers {
    constructor(name, superpower, age, isDead, keyMovie) {
        this.name = name;
        this.superpower = superpower;
        this.age = age;
        this.isDead = isDead;
        this.keyMovie = keyMovie;
    }

    nameMovie() {
        console.log(`${this.name} stars in ${this.keyMovie}`);
        return `${this.name} stars in ${this.keyMovie}`
    }
//SPICEY-- create a method that takes name of the superhero and checks it against two arrays. one with team cap and one with team tony and returns which team the superhero was a part of during the civil war
    whichTeam() {
        let teamCap = ["Captain America", "Bucky", "Bucky", "Wanda", "Hawkeye", "Ant Man"]
        let teamStark = ["Tony Stark", "Vision", "War Machine", "Black Panther", "Black Widow"]
        if (teamCap.includes(this.name)) {
            return `${this.name} is team Captain`
        } else if (teamStark.includes(this.name)) {
            return `${this.name} is team Stark`
        } else {
            return `${this.name} is not in our database`
        }
    }
}
let captainAmerica = new Avengers("Captain America", "Super-strength", 93, true, "The First Avenger");
console.log(captainAmerica.whichTeam())


//Inheritance
// Extends 
/* extends creates a class as a child of another class
Syntax:
    class childClass extends parentClass {
        constructor(params of parent and child) {
            super(params of parent)
            this.childProperty = childProperty
        }
    }
*/

class Options extends Car {
    constructor(make, model, year, transmission, isLeather, isComfortAccess, wheelsPowered) {
        //Super inherits constructors of the parent class
    super(make, model, year, transmission) 
    this.isLeather = isLeather
    this.isComfortAccess = isComfortAccess
    this.wheelsPowered = wheelsPowered
    }
    
    isCPO(currentYear) {
        let result = currentYear - this.year
        return result >= 6 ? `Your ${this.model} is out of warranty` : `Your warranty still stands`
    }
}

let bmw = new Options("BMW", "M5", 2016, "DCT", true, true, "RWD")
console.log(bmw)

console.log(bmw.age(2021))
console.log(bmw.isCPO(2021))

Date.getFullYear()

// Challenge
// extend the house class with one called sale. Sale should have properties of appraisalValue (int), listPrice (int), agent (str), and isListed (boolean)

//create a method which calculates the differencebetween appreaisalValue and the listPrice. Add a conditional that will check if the difference is more than 20 percent higher than appraisal. If it is, say it's not worth it. If it isn't, say it's a good value.

// The returns should also include the difference between the two values.

let House = class {
    constructor(address, bedrooms, bathrooms) {
        this.address = address;
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
    }
}
class Sale extends House {
    constructor(address, bedrooms, bathrooms, appraisalValue, listPrice, agent, isListed){
        super(address, bedrooms, bathrooms)
        this.appraisalValue = appraisalValue
        this.listPrice = listPrice
        this.agent = agent
        this.isListed = isListed
    }

    valueDifference() {
        if (this.appraisalValue <= this.listPrice) {
        let difference = this.listPrice - this.appraisalValue
        let percentage = this.listPrice/this.appraisalValue
        if (percentage >= 0.2) {
            return `The difference is ${difference} and it's twenty percent higher than appraisal.`
        } else if (percentage < 0.2) {
            return `The difference is ${difference} and it's within range.`
        }
    } else {
        return `You idiot! Are you seriously listing your house for less than it's worth? Get a new quote!`
    }
}
}

let myHouse = new Sale("401 N Park Ave", 2, 2, 350000, 100000, "Kinsey", true)
console.log(myHouse.valueDifference())





//  let parkAve401 = new House("401 N Park Ave", 2, 2)
//  console.log(parkAve401)