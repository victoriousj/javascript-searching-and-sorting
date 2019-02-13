// Determine if an array is properly sorted
const isSorted = arr => arr.every((v, i, a) => !i || a[i - 1] <= v);

module.exports = {
    isSorted: isSorted,
}