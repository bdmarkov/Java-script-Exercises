(function str() {


    String.prototype.ensureStart = function(s) {
        if (this.startsWith(s)) {
            return this.toString();
        }
        else {
            return s + this.toString();
        }
    };

    String.prototype.ensureEnd = function(s) {
        if (this.endsWith(s)) {
            return this.toString();
        }
        else {
            return this.toString() + s;
        }
    };

    String.prototype.isEmpty = function() {
        return this.length === 0;
    };
    String.prototype.truncate = function(n) {
        if (n <= 3) {
            return ".".repeat(n);
        }
        if (this.toString().length <= n) {
            return this.toString();
        } else {
            let lastIndex = this.substring(0, n-2).lastIndexOf(" ");

            if(lastIndex !== -1) {
                return this.substring(0, lastIndex) + "...";

            }else {
                return this.substring(0, n-3) + "...";
            }
        }
    };
    String.format = function (string, ...params) {
        let str = string;

        params.forEach((p, i) => {
            str = str.replace(`{${i}}`, p);
        });

        return str;
    };
})()