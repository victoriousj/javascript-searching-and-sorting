const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return null;
};

const binarySearch = (arr, target) => {
  let first = 0;
  let last = arr.length - 1;

  while (first <= last) {
    let midway = Math.floor((first + last) / 2);
    if (arr[midway] === target) return midway;
    else if (arr[midway] < target) first = midway + 1;
    else last = midway - 1;
  }
  return -1;
};

module.exports = {
  linearSearch,
  binarySearch
};
