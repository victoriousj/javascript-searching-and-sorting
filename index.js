const numbers = require("./numbers");
const bogoSort = require("./bogoSort");
const mergeSort = require("./mergeSort");
const quickSort = require("./quickSort");
const selectionSort = require("./selectionSort");

const testValues = numbers.fiveNumbers;
console.log(testValues);
var sorted = mergeSort.sort(testValues);
console.log(sorted);
