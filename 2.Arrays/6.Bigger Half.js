function biggerHalf(arr) {
    arr.sort((a, b) => a - b)

    const result = [];

    for (let i = Math.floor(arr.length / 2); i < arr.length; i++) {
        result.push(arr[i]);

    }
    return result;
}

console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]))