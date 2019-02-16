const mergeSort = arr => {
  if (arr.length <= 1) return arr;

  const middleIndex = Math.floor(arr.length / 2);
  const lowerHalfArr = mergeSort(arr.slice(0, middleIndex));
  const upperHalfArr = mergeSort(arr.slice(middleIndex));

  let leftIndex = 0;
  let rightIndex = 0;
  let sortedValues = [];

  while (leftIndex < lowerHalfArr.length && rightIndex < upperHalfArr.length) {
    if (lowerHalfArr[leftIndex] < upperHalfArr[rightIndex]) {
      sortedValues.push(lowerHalfArr[leftIndex++]);
    } else {
      sortedValues.push(upperHalfArr[rightIndex++]);
    }
  }

  return [
    ...sortedValues,
    ...lowerHalfArr.slice(leftIndex),
    ...upperHalfArr.slice(rightIndex)
  ];
};

module.exports = {
  sort: mergeSort
};
