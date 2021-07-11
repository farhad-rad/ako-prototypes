/**
 * Distincs Base Array
 * @param {Function} func 
 * @returns {Array}
 */
Array.prototype.distinct = function (func) {
    if (typeof func != "function") func = x => x;
    return this.filter((x, i) => this.map(func).indexOf(func(x)) === i);
};

/**
 * Shuffle Order Base Array
 * @returns {Array}
 */
Array.prototype.shuffle = function () {
    return this.sort(() => .5 - Math.random());
}

/**
 * Takes One Of Elements In Base Array By Random
 * @returns {* | null}
 */
Array.prototype.pickRandom = function () {
    return this.length > 0 ? this[Math.randomInRange(0, this.length - 1)] : null;
};

/**
 * Randomly Takes One Or More Elements From Base Array
 * @param {Number} count How Many Elements Should Be Taken?
 * @returns {Array}
 */
Array.prototype.takeRandom = function (count) {
    count = 'number' != typeof count ? 1 : count > this.length ? this.length : count;
    if (count === this.length) return this;
    const result = [];
    const takeOne = () => {
        var random;
        while ('undefined' === typeof random || result.some(x => x.key == random)) random = Math.floor(Math.random() * this.length);
        result.push({ key: random, entity: this[random] });
    }
    while (result.length < count) takeOne();
    return result.sort(x => x.key).map(x => x.entity);
};

/**
 * Clears All Null And Undefined Values (Keeping Boolean False Values)
 * @returns {Array}
 */
Array.prototype.clean = function () {
    return this.filter(x => x != "" && x != null && "undefined" !== typeof x)
}

/**
 * 
 * @param {Function|null} func 
 * @returns {Object}
 */
Array.prototype.groupBy = function (func) {
    if ("function" != typeof func) func = x => x;
    return this.reduce((result, x) => {
        // Group initialization
        if (!result[func(x)]) {
            result[func(x)] = [];
        }

        // Grouping
        result[func(x)].push(x);

        return result;
    }, {});
};