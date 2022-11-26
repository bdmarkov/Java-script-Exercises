function solve(arr, num) {
    let newarr = [];
    for (let i = 0; i < arr.length; i+=num){
        newarr.push(arr[i])
    }
    return newarr;
}