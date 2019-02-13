var numbers = require("./numbers");

// Randomly shuffle the elements of the array that's passed in.
const shuffle = arr => {
  let swapIndex = arr.length;
  let temp, randomIndex;

  while (swapIndex !== 0) {
    randomIndex = Math.floor(Math.random() * swapIndex);

    swapIndex -= 1;

    temp = arr[swapIndex];
    arr[swapIndex] = arr[randomIndex];
    arr[randomIndex] = temp;
  }

  return arr;
}

// Determine if an array is properly sorted
const isSorted = arr => arr.every((v, i, a) => !i || a[i - 1] <= v);

// Shuffles array until it's sorted.
const bogoSort = arr => {
  let iterations = 1;
  shuffle(arr);
  while (!isSorted(arr)) {
    arr = shuffle(arr);
    console.log(iterations++, arr);
  }
  return arr;
}

// Bogo Sort
module.exports = {
  shuffle: shuffle,
  isSorted: isSorted,
  bogoSort: bogoSort
};

const testValues = numbers.eightNumbers;
var sorted = bogoSort(testValues);
