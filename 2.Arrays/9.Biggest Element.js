function biggest (arr) {
    let maxNumber = -1000000;

    for (let i = 0; i < arr.length; i++) {
        const row = arr[i];
        for (let j = 0; j < row.length; j++ ) {

            if (maxNumber < arr[i][j]) {
                maxNumber = arr[i][j]
            }
        }

    }
    return maxNumber;
}

biggest([[20, 50, 10],
    [8, 33, 145]]
   )