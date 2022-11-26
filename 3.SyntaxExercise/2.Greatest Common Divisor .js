function greatDivisor(a, b){
    if (b) {
        return greatDivisor(b, a % b);

    } else {
        console.log(a);
    }
}

greatDivisor(15, 5)