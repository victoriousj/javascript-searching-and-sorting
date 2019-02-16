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

module.exports = {
  sort: quickSort
};
