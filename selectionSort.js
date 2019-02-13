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
    console.log(`[${arr}] - [${sortedArr}]`);
    var indexToMove = indexOfMin(arr);
    sortedArr.push(arr.splice(indexToMove, 1)[0]);
  }

  return sortedArr;
};

module.exports = {
  sort: selectionSort
};
