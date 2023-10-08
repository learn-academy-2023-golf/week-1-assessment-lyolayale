// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a conditional statement that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
// const fruit1 = "cherry"
// const fruit2 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:


// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Pseudo code:
// *** Using built-in method "concat" to combine the 2 arrays and assigning that new array to a new variable.
const combinedArray = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns);
// ** Using built-in method "length" to calculate how many element are in the the concatted array and using the built-in "console.log" to print out statement to terminal.
console.log(combinedArray.length);
console.log("-----------");

// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "LEARN 2023"
// Expected output: "3202 NRAEL"

// Pseudo code:
// *** Using built-in method "split" to to change the variable "currentCohot" to an array, chaining the built-in method "reverse" to reverse the current array, and chaining the built-in method "join" to the array to convert the array back to a string data type -> all wrapped up the built-in "console.log" method.
console.log(currentCohort.split("").reverse().join(""));
console.log("-----------");




// --------------------3) Create the code that will log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: 13 5 -5 27

// Pseudo code:
// *** Using a iteration loop "for loop" to iterate over the array "stockExchange". Inside the "for loop" Using a conditional statement to check if each individual element in the array is a odd number. This is perform by using the modulo operator, to check if a number has a remainder when divided by 2 (using the indexes of the "stockExchange" array as the iterators). If the element is an odd number, use "console.log" method to print those element to the terminal screen.
for (let i = 0; i < stockExchange.length; i++) {
    if (stockExchange[i] % 2 !== 0) {
        console.log(stockExchange[i]);
    }
}
