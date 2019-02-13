const numbers = require("./numbers");
const bogoSort = require("./bogoSort");
const selectionSort = require("./selectionSort");

const testValues = numbers.tenThousandNumbers;
var sorted = selectionSort.sort(testValues);
