// Bogo Sort
const shuffle = arr => {
    const swapIndex = arr.length;
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

const isSorted = arr => arr.every((v,i,a) => !i || a[i-1] <= v);