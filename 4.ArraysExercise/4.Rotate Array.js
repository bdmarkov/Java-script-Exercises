function rotate (arr, num) {
    for (let i = 0; i < num; i++) {
        arr.unshift(arr.pop());
    }
    console.log(arr.join(" "));
}