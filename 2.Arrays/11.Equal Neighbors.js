function neighbours (arr) {

let counter = 0

    for (let rowIndex = 0; rowIndex < arr.length - 1; rowIndex++) {
        for (let colIndex = 0; colIndex < arr[rowIndex].length - 1; colIndex++) {
            
            if (arr[rowIndex][colIndex] === arr[rowIndex][colIndex +1]) {
                counter++;
            }
            if (arr[rowIndex][colIndex] === arr[rowIndex + 1][colIndex]){
                counter++;
            }
        }
    }

 

        console.log(counter)

}