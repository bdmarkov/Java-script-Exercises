function solve(arr, start, end) {
    let sum = 0
    if (Array.isArray(arr) == false) {
        return NaN;
    }
    if (start < 0) {
        start = 0;
    }
    if (end > arr.length - 1) {
        end = arr.legth - 1;
    }

    for (let i = start; i <= end; i++) {
        sum += Number(arr[i]);
    }
    return sum;
}


solve([10, 20, 30, 40, 50, 60], 3, 300)