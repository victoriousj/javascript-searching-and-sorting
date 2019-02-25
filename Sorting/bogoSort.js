const utils = require("../utils");

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
};

// Shuffles array until it's sorted.
const bogoSort = arr => {
  let iterations = 1;
  shuffle(arr);
  while (!utils.isSorted(arr)) {
    arr = shuffle(arr);
    console.log(iterations++, arr);
  }
  return arr;
};

// Bogo Sort
module.exports = {
  sort: bogoSort
};
