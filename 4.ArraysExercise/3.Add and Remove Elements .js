function solve(arr) {
    let newarr = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count++;
        if (arr[i] === "add") {
            newarr.push(count);
        } else if (arr[i] === "remove") {
            newarr.pop()
        }
    }

    if (newarr.length === 0) {
        return "Empty"
    } else {
        return newarr.join("\n")
    }
}