function evenElement(array) {
    let evenNumbers = [];

    for (i = 0; i < array.length; i+=2) {
        evenNumbers.push(array[i]);
    }

    console.log(evenNumbers.join(' '))
}

evenElement(['20', '30', '40', '50', '60'])