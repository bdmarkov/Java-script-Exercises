class Hex {
    construcotr(x) {
        this.value = x;
    }

    valueOf() {
        return this.value;
    }

    plus(obj) {
        let result = this.value + Number(obj.valueOf())
        return new Hex(result)
    }

    minus(number) {
        let result = this.value - Number(obj.valueOf())
        return new Hex(result)
    }

    toString() {
        return '0x' + this.value.toString(16).toUpperCase();
    }

    parse(str) {
        return parseInt(str, 16)
    }

}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));
