let list = ['orange', 'banana', 'oreos'];
console.log(list[1]);


console.log(typeof students);
console.log(students instanceof Array); //testing for specific data type

console.log(students[2]);
console.log(students[0]);

/*
Challenge
********
-Dive into the nested array and pull the value 'Will'
-Print out "Hello Will!"
*/

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Will', 'Amira']];

console.log(students[6][1]);
let student = students[6][1];
console.log(`Hello ${student}!`);


let food = ['Pecan Pie', "Shrimp", "Quesadilla", 'Cheesecake', 'Hotdog'];

//for (foodItem of food) {
//    console.log(foodItem);
//}

//.push method -- appends something to the end of our array
food.push('Pizza'); // Appends 'Pizza' to the end of array
console.log('psuh:', food);

food.splice(1, 1, 'Bananas'); // Removes shrimp, adds bananas (position, how many to remove, what to add in it's place)
console.log('splice', food);

food.splice(2, 0, 'Sweet Potato Pie'); // Adds sweet potato pie in position 2, but does not remove anything 
console.log('splice 2:', food)

food.pop(); // Removes the last thing from our array. In this case, it removes 'pizza'
console.log(food);

food.shift(); // Removes first element of array
console.log(food);

food.unshift('Popcorn', 'Steak'); // adds one or more elements to the beginning of array
console.log(food);

// Iterating over Arrays 

let colors = ['red', 'orange', 'yellow', 'green', 'blue'];

//for (let i = 0; i < colors.length; i++) // .length tells you how long the array is 
//console.log(colors[i]);

colors.forEach(color => console.log(color));

colors.forEach((color, index) => {
    console.log(color);
    console.log(index);
})

/* Challenge 
-Create an array containing movies
-Use .forEach() to list each movie
-add another movie at the end 
-and replace one of your existing movies with another one 
*/
/* MY ORIGINAL WORK
let movies = ['Horror', 'Comedy', 'Romcom', 'Action'];
movies.forEach(movie => console.log(movie));
movies.push('Drama');
console.log(movies);
movies.splice(2, 1, 'Thriller');
console.log(movies);
*/

//Add the function to the end so it iterates over each movie after everything else
let movies = ['Horror', 'Comedy', 'Romcom', 'Action'];
movies.push('Drama');
console.log(movies);
movies.splice(2, 1, 'Thriller');
console.log(movies);
movies.forEach(movie => console.log(movie));

//Challenge
/* 
-First check if you are working with an array
-Using a method, flip the values within the array (what was index 4 is now 0, etc.)
-Using a method, print the values of the newly arranged array 
*/


let arr = [1, 2, 3, 4, 5];
//console.log(typeof arr);
/*
console.log(arr instanceof Array);

arr.reverse();
//console.log(arr);

arr.forEach(num => console.log(num));
*/
// OR 

if (arr instanceof Array) {
    let revArr = arr.reverse();
    revArr.forEach(num => console.log(num)); 
} else {
    console.log('not an array');
}