function stars(a) {
    let result = '';



    for (let i = 1; i <= a; i++){
        for (let j = 1; j <= a; j++){
            result += '* ';
        }
        result += '\n';
    }

    return result;
}

console.log(stars(2))