(function arr() {

let arr = [1, 2, 3];

    Array.prototype.last = function() {
        return arr[arr.length - 1];
    }

    Array.prototype.skip = function(n) {
        let newarr = [];

        for (let index = n; index < arr.length; index++) {
            newarr.push(arr[index])
        }
        return newarr;

    };

    Array.prototype.take = function(n) {
        let newarr = [];

        for (let index = 0; index < n; index++) {
            newarr.push(arr[index])
        }
        return newarr;

    };

    Array.prototype.sum = function() {
        return arr.reduce((a,b) => a + b, 0)
    }

    Array.prototype.average = function() {
        return arr.reduce((a,b) => a + b, 0) / arr.length;
    }
})();