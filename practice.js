/*
let myArray
myArray = ["Kinsey", "Paul", "Jessica", "Devin"]
console.log(myArray)

function loopOver (x) {
    for (i of x) {
        console.log(i)
    }
}

loopOver(myArray)

*/

//Print numbers 1-10

/*
for (let i = 1; i <= 10; i++) {
    console.log(i)
}
*/

/*
let callback = (num) => {
    if (num % 2 == 0) {
      return `The number is even`
      console.log("The number is even");
    } else if (num % 2 ==! 0) {
        return `The number is odd`
        console.log("The number is odd");
    } else {
        return `What is this?`
        console.log("What is this?");
    }
    }
    
for (num = 0; num <= 10; num++) {
    console.log(callback(num));
}
*/ 

//Print odd numbers less than 100

// for (var i = 1; i < 100; i += 2) {
//     console.log(i);
// }

// function multiply(num1, num2) {
//     let result = num1 * num2;
//     return result
// }
// console.log(multiply(6, 7))

/*Create a function called greet
This function should accept 2 parameters (greeting, name)
The function should return a string with a greeting. For example if you give the function the arguments “Good morning” and “Paul” it will return the string “Good Morning Paul”
Console.log and call the function.
*/

// function greet(greeting, name) {
//     let greet = (greeting, name) => 'greeting' + 'name';
//     return greeting + name 
// }
// console.log(greet("hello", " paul"));


// Create a loop that counts from 0 to 100. 
// Inside of the loop create a conditional that tests if the number is divisible by 3, 5, or 3 & 5.
// If it is divisible by 3 print “Fizz”
// If it is divisible by 5 print “Buzz”
// If it is divisible by 3 & 5 print “FizzBuzz”
// If the number is not divisible by any of these, print the number itself.


// for (let i = 0; i <= 100; i++) {
//     if (i % 15 == 0) {
//     console.log("FizzBuzz");
// }   else if (i % 3 == 0) {
//     console.log("Fizz");
// }   else if (i % 5 == 0) {
//     console.log("Buzz");
// }   else {
//     console.log(i)
// }

// };

// Create a function that accepts the parameters (base, height).
// Inside of the function use the parameters to calculate the area of a rectangle (A = base*height)
// Console.log the result.

// function rectangle(base, height) {
//     let rectangle = area => 'base' * 'height';
//     return base * height
// }
// console.log(rectangle(5, 10));

// Create an object named Monsters.
// Create three keys in the object containing a monster name
// Each monster name key should contain an object including:
// traits: array containing at least 2 strings
// size: string
// description: string
// dangerous: boolean

let monsters = {
    Ghosts: {
        traits: ["Clear", "Scary"],
        size: "Big",
        description: "Scary",
        dangerous: true,
        defeatMethods: {
            exorcism: "use priest for best results",
            holyWater: "super soaker is best",
            salt: "will this work?"
        }
    },

    Zombies: {
        traits: ["Dead", "Killers"],
        size: "Tall",
        description: "People eaters",
        dangerous: true,
        defeatMethods: {
            gun: "double tap, always",
            chainsaw: "good luck with this one",
        }

    },
    Vampires: {
        traits: ["Fangs", "Blood"],
        size: "Large",
        description: "Friendly",
        dangerous: false,
        defeatMethods: {
            garlic: "you've heard about this one"
        }
    }
};

// function reactangle(base, height) {
// let rectangle = area => 'base' * 'height';
// return base * height
// }
// console.log(rectangle(5, 10))

function rectangle(base, height) {
    let rectangle = area => base * height;
    return base * height
}
console.log(rectangle(5, 10));

function funName(first, last) {
 let name = first +  last 
 return(name)
}
console.log(funName("kinsey", " johnson"))


// Write a function called findParameter() that accepts 2 parameters called: "length" and "width".
// The function should return an interpolated string of "True.  The perimeter is ___" if the perimeter is over 20.
// The function should return an interpolated string of "False.  The perimeter is ___" if the perimeter is under 20.  
// This function should be active.   

function findParameter(length, width) {
    let result = (length + width) * 2
    if (result > 20) {
         return `True, the function is ${result} and is over 20.`;
    } else if (result < 20) {
        return `False, the function is ${result} and is under 20`;
    }
}
console.log(findParameter(5, 6));

//Print numbers from 1 to 10

// for (let i = 1; i<= 10; i++) {
//     console.log(i);
// };

//Print the odd numbers less than 100
for (let i = 1; i <= 100; i += 2 ) {
    console.log(i);
}

//Create a function that will capitalize the first letter of each word in a text

function upperCase(name) {
    let name=
}

// Create a function called greet
// This function should accept 2 parameters (greeting, name)
// The function should return a string with a greeting. For example if you give the function the arguments “Good morning” and “Paul” it will return the string “Good Morning Paul”
// Console.log and call the function.

function greet(greeting, name) {
    return `${greeting} ${name}`
};
console.log(greet("Hello", "Kinsey"));

// Create a function that accepts the parameters (base, height).
// Inside of the function use the parameters to calculate the area of a rectangle (A = base*height)
// Console.log the result.


function rectangle(base, height) {
    area = base * height
    return(area)
}
console.log(rectangle(5, 7));