const utils = require("./utils");

const indexOfMin = arr => {
  let minIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) minIndex = i;
  }

  return minIndex;
};

const selectionSort = arr => {
  let sortedArr = [];
  while (arr.length > 0) {
    var indexToMove = indexOfMin(arr);
    sortedArr.push(arr.splice(indexToMove, 1)[0]);
  }

  return sortedArr;
};

const quickSort = arr => {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  let lessThanArr = [];
  let greaterThanArr = [];
  for (let i = 1; i < arr.length; i++) {
    arr[i] <= pivot ? lessThanArr.push(arr[i]) : greaterThanArr.push(arr[i]);
  }

  return [...quickSort(lessThanArr), pivot, ...quickSort(greaterThanArr)];
};

const mergeSort = arr => {
  if (arr.length <= 1) return arr;

  const middleIndex = Math.floor(arr.length / 2);
  const upperArr = mergeSort(arr.slice(middleIndex));
  const lowerArr = mergeSort(arr.slice(0, middleIndex));
  let leftIndex = 0;
  let rightIndex = 0;
  let sortedValues = [];

  while (leftIndex < lowerArr.length && rightIndex < upperArr.length) {
    lowerArr[leftIndex] < upperArr[rightIndex]
      ? sortedValues.push(lowerArr[leftIndex++])
      : sortedValues.push(upperArr[rightIndex++]);
  }

  return [
    ...sortedValues,
    ...lowerArr.slice(leftIndex),
    ...upperArr.slice(rightIndex)
  ];
};

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

const bubbleSort = arr => {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      if (arr[j - 1] > arr[j]) {
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
};

const cocktailSort = arr => {
  let swapped;
  do {
    for (let i = 0; i < arr.length - 2; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;

    swapped = false;

    for (let i = arr.length - 2; i > 0; i--) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
};

module.exports = {
  bogoSort,
  quickSort,
  mergeSort,
  bubbleSort,
  cocktailSort,
  selectionSort
};
