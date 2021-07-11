require("./ArrayPrototypes");
module.exports = (function () {
    /**
     * Converts FormData Object Into JS Object
     * @returns {Object}
     */
    FormData.prototype.toObject = function () {
        const keyCode = Symbol("END-LOOP-CONVERSATION");
        const mapper = (x, keyName) => {
            if (x.length == 1 && x[0].length == 1) {
                if (keyName) {
                    var obj = {};
                    obj[x[0][0]] = keyCode;
                    return obj;
                }
                return x[0][0];
            }
            let y = x.groupBy(x => x[0]);
            Object.keys(y).forEach(k => {
                if (y[k].length == 1 && y[k][0].length == 1) y[k] = keyCode;
                else y[k] = mapper(y[k].map(z => z.slice(1, z.length)), k)
            });
            return y;
        }
        const arrayChecker = (x) => {
            if (x == keyCode) return x;
            var keys = Object.keys(x);
            var isArr = false;
            if (keys.every(y => !isNaN(y) && Number.isInteger(parseInt(y))) && keys.some(y => y == 0)) {
                var missing = [];
                for (var i = 1; i < keys.length; i++) {
                    if (keys[i] - keys[i - 1] != 1) {
                        var x = keys[i] - keys[i - 1];
                        var j = 1;
                        while (j < x) {
                            missing.push(keys[i - 1] + j);
                            j++;
                        }
                    }
                }
                isArr = missing.length <= 0;
            }
            if (isArr) {
                x = keys.sort().map(y => x[y]);
                x.forEach((y, i) => {
                    x[i] = arrayChecker(y);
                });
                return x;
            } else {
                keys.forEach(y => {
                    x[y] = arrayChecker(x[y]);
                });
                return x;
            }
        }
        const obj = {};
        this.forEach(function (value, key) { obj[key] = value; });
        const mappedObj = mapper(Object.keys(obj).map(e => e.split(/(?:\[)|(?:\]\[)|(?:\])/).filter(x => x != "" && x != null && "undefined" !== typeof x)).sort((x, y) => x[0] > y[0]));
        const finalObj = arrayChecker(mappedObj);
        const reverseMapper = (data, parallel, parentKey) => {
            if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File) && !(data instanceof Blob) && !(typeof TimeSpan === 'function' && data instanceof TimeSpan)) {
                Object.keys(data).forEach(key => {
                    parallel[key] = reverseMapper(data[key], parallel[key], parentKey ? `${parentKey}[${key}]` : key);
                });
                return parallel;
            } else {
                parallel = obj[parentKey];
                return parallel;
            }
        }
        return reverseMapper(mappedObj, finalObj);
    }

    /**
     * Converts FormData Object Into JSON
     * @returns {String}
     */
    FormData.prototype.toJson = function(){
        return JSON.stringify(this.toObject());
    }
})();