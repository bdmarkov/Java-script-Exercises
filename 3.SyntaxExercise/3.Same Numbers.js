function sameNumbers(number) {
    let input = String(number);
    let result = true;
    let sum = 0;

    let firstDigit = input[0]
    for (let i = 0; i < input.length; i++) {
        let currentDigit = +input[i];
        sum += currentDigit;
        if (firstDigit != currentDigit) {
            result = false;
        }
    }
    console.log(result)
    console.log(sum)
}

sameNumbers(12345)