function odd (arr) {

    let oddarray = []

    for (let i = 1; i < arr.length; i+=2) {
        oddarray.push(arr[i] * 2);
    }

    return oddarray.reverse();
}