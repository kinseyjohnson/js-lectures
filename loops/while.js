// While Loops 

/*

    While statement creates a loop so long as the condition we've specified returns true

    Syntax:

    while (condition) {
        code statement
    }
    
    To stop a while loop from executing, the condition must at one point return false
    */

    /*
    let count = 0; 

    while(count <= 100) {
        console.log(count)
        count += 1
    }
*/
    //Challenge

    // Fizz Buzz + Loops
    //Create a loop which will iterate over numbers from 100-500
    // For multiples of three, print "Fizz"
    // For multiples of five, print "Buzz"
    // For multiples of three and five, print "Fiz Buzz"
    // If not multiples of three and five, print the number itself.

    for (i = 100; i <= 500; i++) {
        if (i % 15 == 0) console.log(`Fizz Buzz`);
        else if (i % 3 == 0) console.log(`Fizz`);
        else if (i % 5 == 0) console.log(`Buzz`);
        else console.log(i);
    }