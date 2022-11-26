function solve (arr) {
    let newarray = [];
    let biggest = arr[0];



    for (let i = 0; i < arr.length; i++) {
        current = arr[i];
        if (current >= biggest) {
            
            newarray.push(current)
            biggest = current;
        }
    }
    return newarray;
}