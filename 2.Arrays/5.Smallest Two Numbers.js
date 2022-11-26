function smallest(arr) {
    arr.sort((a, b) => a - b)

    let twoNumbers = arr.splice(0, 2);
    console.log(twoNumbers.join(' '));
}

smallest([30, 15, 50, 5])