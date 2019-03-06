// Data
const names = require("./Data/names");
const numbers = require("./Data/numbers");

//Sorting Algorithms
const sort = require("./sorting");

// Searching Algorithms
const linearSearch = require("./Searching/linearSort");
const binarySearch = require("./Searching/binarySearch");

let arr = numbers.hundredNumbers;
console.log(arr);
arr = sort.cocktailSort(arr);
console.log(arr);
