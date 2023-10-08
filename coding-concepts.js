// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)
console.log("----------")

// a) Your answer:
// *** 10 -> counts spaces as well.
// b) Verify and explain:
// ** answer verified -> The built-in method "length" counts everything inside the quotations (unless specified otherwise).

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])
console.log("----------")

// a) Your answer:
// *** "o"
// b) Verify and explain:
// *** answer verified -> The bracket notation with the number 4 is asking for the element at 4th index. Indexes start at 0, therefore 0 would be "H" on the varible "greeting" making the 4th index of variable the character "o".

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])
console.log("----------")


// a) Your answer: 
// *** "Ruby"
// b) Verify and explain:
// *** answer verified -> The variable "index" holds the value of 1. Therefore, languages[index] is === to languages[1]. And since arrays and strings are indexed based (counting starts at 0), index 1 in the variable "languages" array is "Ruby".

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: 
// *** TypeError message
// b) Verify and explain:
// *** The "toUpperCase" built-in method is only avaiable to the string data type. The variable "weekendDays" in an array data type, therefore the method "toUpperCase" is not avaiable to this variable.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: 
// *** "number"
// b) Verify and explain: 
// *** The built-in method "typeof" will return the data type of the element. When the built-in method ".length" is appended to an element it returns a number, hence a number data type. Therefore, when the "typeof" method is combined with an element using the ".length" method, it will return the data type of "number".
