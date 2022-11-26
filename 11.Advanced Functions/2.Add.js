function solution (n) {
    let counter = n;
    

    function increment (number) {
        result = counter + number;

        return result
    }



    return increment;

}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
