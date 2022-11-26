class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.inenrLength = length;
    }

    


    increase(num) {
        this.inenrLength += num;

    }

    decrease(num) {
        if (this.inenrLength - num < 0) {
            this.inenrLength = 0;
        } else {
            this.inenrLength -= num;
        }
    }

    toString() {
        if(this.inenrLength < this.innerString.length) {
            return this.innerString.substring(0, this.inenrLength) + '...'
        } else {
            return this.innerString
        }
    }
}

let test = new Stringer("Test", 0);
console.log(test.toString()); // Test



test.increase(1);
console.log(test.toString()); // ...


test.increase(1);
console.log(test.toString()); // ...



test.increase(1);
console.log(test.toString()); // ...



test.increase(1);
console.log(test.toString()); // ...
