const numbers = require("./numbers");
const bogoSort = require("./bogoSort");
const quickSort = require("./quickSort");
const selectionSort = require("./selectionSort");

const testValues = numbers.tenThousandNumbers;
console.log(testValues);
var sorted = quickSort.sort(testValues);
console.log(sorted);
