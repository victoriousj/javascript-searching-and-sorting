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

module.exports = {
  sort: mergeSort
};
