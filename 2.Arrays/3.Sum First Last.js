function sumFirstLast (array) {
    let first = array[0];
    let last = array[array.length - 1];


    let result = Number(first) + Number(last);

    return result;
}

sumFirstLast(['20', '30', '40'])