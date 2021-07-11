/*!
 * 
 * ako-prototypes -  1.0.0
 * Ako Team July 2021
 * Farhad Rad <farhad.rad.official@gmail.com>
 * Omid Reza Zarei <umidzarei@gmail.com>
 * https://github.com/farhad-rad/ako-prototypes#readme
 * Under MIT license 
 * 
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["AkoPrototypes"] = factory();
	else
		root["AkoPrototypes"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(6);
__webpack_require__(2);
__webpack_require__(8);
__webpack_require__(1);
__webpack_require__(3);
__webpack_require__(7);
__webpack_require__(4);
__webpack_require__(5);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Distincs Base Array
 * @param {Function} func 
 * @returns {Array}
 */
Array.prototype.distinct = function (func) {
    var _this = this;

    if (typeof func != "function") func = function func(x) {
        return x;
    };
    return this.filter(function (x, i) {
        return _this.map(func).indexOf(func(x)) === i;
    });
};

/**
 * Shuffle Order Base Array
 * @returns {Array}
 */
Array.prototype.shuffle = function () {
    return this.sort(function () {
        return .5 - Math.random();
    });
};

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
    var _this2 = this;

    count = 'number' != typeof count ? 1 : count > this.length ? this.length : count;
    if (count === this.length) return this;
    var result = [];
    var takeOne = function takeOne() {
        var random;
        while ('undefined' === typeof random || result.some(function (x) {
            return x.key == random;
        })) {
            random = Math.floor(Math.random() * _this2.length);
        }result.push({ key: random, entity: _this2[random] });
    };
    while (result.length < count) {
        takeOne();
    }return result.sort(function (x) {
        return x.key;
    }).map(function (x) {
        return x.entity;
    });
};

/**
 * Clears All Null And Undefined Values (Keeping Boolean False Values)
 * @returns {Array}
 */
Array.prototype.clean = function () {
    return this.filter(function (x) {
        return x != "" && x != null && "undefined" !== typeof x;
    });
};

/**
 * 
 * @param {Function|null} func 
 * @returns {Object}
 */
Array.prototype.groupBy = function (func) {
    if ("function" != typeof func) func = function func(x) {
        return x;
    };
    return this.reduce(function (result, x) {
        // Group initialization
        if (!result[func(x)]) {
            result[func(x)] = [];
        }

        // Grouping
        result[func(x)].push(x);

        return result;
    }, {});
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Reverse Base Boolean Value
 * @returns {Boolean}
 */
Boolean.prototype.reverse = function () {
  return !this;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Checks Whether Base Date Is In Range Of Start And End
 * @param {Date} start 
 * @param {Date} end 
 * @returns {Boolean}
 */
Date.prototype.isInRange = function (start, end) {
    if (!(start instanceof Date)) throw new TypeError('Start Must Be Instance Of Date Object');
    if (!(end instanceof Date)) throw new TypeError('End Must Be Instance Of Date Object');
    return this.getTime() >= start.getTime() && this.getTime() <= end.getTime() || this.getTime() >= end.getTime() && this.getTime() <= start.getTime();
};

/**
 * Adds Milliseconds To Base Date
 * @param {Number} milliseconds 
 * @returns {Date}
 */
Date.prototype.addMilliseconds = function (milliseconds) {
    if (typeof milliseconds != "number") throw new TypeError('Milliseconds Must Be Integer');
    return new Date(this.valueOf() + parseInt(milliseconds));
};

/**
 * Adds Seconds To Base Date
 * @param {Number} seconds 
 * @returns {Date}
 */
Date.prototype.addSeconds = function (seconds) {
    if (typeof seconds != "number") throw new TypeError('Seconds Must Be Integer');
    return new Date(this.valueOf() + 1000 * parseInt(seconds));
};

/**
 * Adds Minutes To Base Date
 * @param {Number} minutes 
 * @returns {Date}
 */
Date.prototype.addMinutes = function (minutes) {
    if (typeof minutes != "number") throw new TypeError('Minutes Must Be Integer');
    return new Date(this.valueOf() + 1000 * 60 * parseInt(minutes));
};

/**
 * Adds Hours To Base Date
 * @param {Number} hours 
 * @returns {Date}
 */
Date.prototype.addHours = function (hours) {
    if (typeof hours != "number") throw new TypeError('Hours Must Be Integer');
    return new Date(this.valueOf() + 1000 * 60 * 60 * parseInt(hours));
};

/**
 * Adds Days To Base Date
 * @param {Number} days 
 * @returns {Date}
 */
Date.prototype.addDays = function (days) {
    if (typeof days != "number") throw new TypeError('Days Must Be Integer');
    return new Date(this.valueOf() + 1000 * 60 * 60 * 24 * parseInt(days));
};

/**
 * Adds Months To Base Date
 * @param {Number} months 
 * @returns {Date}
 */
Date.prototype.addMonths = function (months) {
    if (typeof months != "number") throw new TypeError('Months Must Be Integer');
    this.setMonth(this.getMonth() + parseInt(months));
    return this;
};

/**
 * Adds Years To Base Date
 * @param {Number} years 
 * @returns {Date}
 */
Date.prototype.addYears = function (years) {
    if (typeof years != "number") throw new TypeError('Years Must Be Integer');
    this.setFullYear(this.getFullYear() + parseInt(years));
    return this;
};

Object.defineProperty(Date.prototype, 'totalMilliseconds', {
    /**
     * Calculates Total Milliseconds From Base Date Up Until Now
     * @returns {Number}
     */
    get: function get() {
        return Math.floor(new Date() - this);
    }
});

Object.defineProperty(Date.prototype, 'totalSeconds', {
    /**
     * Calculates Total Seconds From Base Date Up Until Now
     * @returns {Number}
     */
    get: function get() {
        return Math.floor(this.totalMilliseconds / 1000);
    }
});

Object.defineProperty(Date.prototype, 'totalMinutes', {
    /**
     * Calculates Total Minutes From Base Date Up Until Now
     * @returns {Number}
     */
    get: function get() {
        return Math.floor(this.totalMilliseconds / (1000 * 60));
    }
});

Object.defineProperty(Date.prototype, 'totalHours', {
    /**
     * Calculates Total Hours From Base Date Up Until Now
     * @returns {Number}
     */
    get: function get() {
        return Math.floor(this.totalMilliseconds / (1000 * 60 * 60));
    }
});

Object.defineProperty(Date.prototype, 'totalDays', {
    /**
     * Calculates Total Days From Base Date Up Until Now
     * @returns {Number}
     */
    get: function get() {
        return Math.floor(this.totalMilliseconds / (1000 * 60 * 60 * 24));
    }
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Converts FormData Object Into JS Object
 * @returns {Object}
 */
FormData.prototype.toObject = function () {
    var keyCode = Symbol("END-LOOP-CONVERSATION");
    var mapper = function mapper(x, keyName) {
        if (x.length == 1 && x[0].length == 1) {
            if (keyName) {
                var obj = {};
                obj[x[0][0]] = keyCode;
                return obj;
            }
            return x[0][0];
        }
        var y = x.groupBy(function (x) {
            return x[0];
        });
        Object.keys(y).forEach(function (k) {
            if (y[k].length == 1 && y[k][0].length == 1) y[k] = keyCode;else y[k] = mapper(y[k].map(function (z) {
                return z.slice(1, z.length);
            }), k);
        });
        return y;
    };
    var arrayChecker = function arrayChecker(x) {
        if (x == keyCode) return x;
        var keys = Object.keys(x);
        var isArr = false;
        if (keys.every(function (y) {
            return !isNaN(y) && Number.isInteger(parseInt(y));
        }) && keys.some(function (y) {
            return y == 0;
        })) {
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
            x = keys.sort().map(function (y) {
                return x[y];
            });
            x.forEach(function (y, i) {
                x[i] = arrayChecker(y);
            });
            return x;
        } else {
            keys.forEach(function (y) {
                x[y] = arrayChecker(x[y]);
            });
            return x;
        }
    };
    var obj = {};
    this.forEach(function (value, key) {
        obj[key] = value;
    });
    var mappedObj = mapper(Object.keys(obj).map(function (e) {
        return e.split(/(?:\[)|(?:\]\[)|(?:\])/).filter(function (x) {
            return x != "" && x != null && "undefined" !== typeof x;
        });
    }).sort(function (x, y) {
        return x[0] > y[0];
    }));
    var finalObj = arrayChecker(mappedObj);
    var reverseMapper = function reverseMapper(data, parallel, parentKey) {
        if (data && (typeof data === "undefined" ? "undefined" : _typeof(data)) === 'object' && !(data instanceof Date) && !(data instanceof File) && !(data instanceof Blob) && !(typeof TimeSpan === 'function' && data instanceof TimeSpan)) {
            Object.keys(data).forEach(function (key) {
                parallel[key] = reverseMapper(data[key], parallel[key], parentKey ? parentKey + "[" + key + "]" : key);
            });
            return parallel;
        } else {
            parallel = obj[parentKey];
            return parallel;
        }
    };
    return reverseMapper(mappedObj, finalObj);
};

/**
 * Converts FormData Object Into JSON
 * @returns {String}
 */
FormData.prototype.toJson = function () {
    return JSON.stringify(this.toObject());
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Calculates A Random Number Between Two Numbers
 * @param {Number} startRange Default Is Zero
 * @param {Number} endRange  Default Is One
 * @returns {Number}
 */
Math.randomInRange = function (startRange, endRange) {
    if (typeof endRange != "number") {
        return 0;
    }
    if (typeof startRange != "number") {
        startRange = 1;
    }
    startRange = parseInt(startRange);
    endRange = parseInt(endRange);

    if (endRange < startRange) {
        var temp = endRange;
        endRange = startRange;
        startRange = temp;
    }

    if (endRange == startRange) {
        return startRange;
    }

    return Math.floor(Math.random() * (endRange - startRange + 1)) + startRange;
};

/**
 * Creates A Random Boolean
 * @returns {Boolean}
 */
Math.randomBoolean = function () {
    return Math.random() >= 0.5;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Add Leading Zero To Start And End(Decimals) Of Base Number
 * @param {Number} digits 
 * @param {Number?} decimals 
 * @returns {String}
 */
Number.prototype.fixDigits = function (digits, decimals) {
    var str = "" + this,
        digitLength = str.split(".")[0].length,
        i;

    if (typeof digits === "number" && digitLength < digits) {
        for (i = 1; i <= digits - digitLength; i++) {
            str = "0" + str;
        }
    }

    if (typeof str.split(".")[1] != "undefined") {
        var decimalLength = str.split(".")[1].length;
        if (typeof decimals === "number" && decimalLength < decimals) {
            for (i = 1; i <= decimals - decimalLength; i++) {
                str = str + "0";
            }
        }
    }

    return str;
};

/**
 * Checks Whether Base Number Is In Range Of Start And End
 * @param {Number} start 
 * @param {Number} end 
 * @returns {Boolean}
 */
Number.prototype.isInRange = function (start, end) {
    if (typeof start != "number") throw new TypeError('Start Must Be Instance Of Number');
    if (typeof end != "number") throw new TypeError('End Must Be Instance Of Number');
    return this >= start && this <= end || this >= end && this <= start;
};

/**
 * Calculates Floor Without Math Object
 * @returns {Number}
 */
Number.prototype.floor = function () {
    return Math.floor(this);
};

/**
 * Calculates Ceil Without Math Object
 * @returns {Number}
 */
Number.prototype.ceil = function () {
    return Math.ceil(this);
};

/**
 * Calculates Round Without Math Object
 * @returns {Number}
 */
Number.prototype.round = function () {
    return Math.round(this);
};

/**
 * Calculates Sign Without Math Object
 * @returns {Number}
 */
Number.prototype.sign = function () {
    return Math.sign(this);
};

/**
 * Calculates SQRT Without Math Object
 * @returns {Number}
 */
Number.prototype.sqrt = function () {
    return Math.sqrt(this);
};

/**
 * Calculates CBRT Without Math Object
 * @returns {Number}
 */
Number.prototype.cbrt = function () {
    return Math.cbrt(this);
};

/**
 * Calculates ABS Without Math Object
 * @returns {Number}
 */
Number.prototype.abs = function () {
    return Math.abs(this);
};

/**
 * Calculates ABS And Round Without Math Object
 * @returns {Number}
 */
Number.prototype.absRound = function () {
    return this < 0 ? Math.ceil(this) : Math.floor(this);
};

/**
 * Calculates ABS And Floor Without Math Object
 * @returns {Number}
 */
Number.prototype.absFloor = function () {
    return this < 0 ? Math.ceil(number) || 0 : Math.floor(this);
};

/**
 * Calculates Trunc Without Math Object
 * @returns {Number}
 */
Number.prototype.trunc = function () {
    return Math.trunc(this);
};

/**
 * Calculates Base Number Powered By Exponent
 * @param {Number} exponent 
 * @returns {Number}
 */
Number.prototype.pow = function (exponent) {
    return Math.pow(this, exponent);
};

/**
 * Calculates Base Powered By Base Number
 * @param {Number} base 
 * @returns {Number}
 */
Number.prototype.powBase = function (base) {
    return Math.pow(base, this);
};

Object.defineProperty(Number.prototype, 'isInteger', {
    /**
     * Checks If Base Number Is An Integer
     * @returns {Boolean}
     */
    get: function get() {
        return Number.isInteger(this);
    }
});

Object.defineProperty(Number.prototype, 'isPrime', {
    /**
     * Checks If Base Number Is A Primitive Number
     * @returns {Boolean}
     */
    get: function get() {
        var _this = this;

        return this.isInteger && this > 1 && Array(Math.floor(Math.sqrt(this)) - 1).fill(0).map(function (_, i) {
            return i + 2;
        }).every(function (i) {
            return _this % i !== 0;
        });
    }
});

Object.defineProperty(Number.prototype, 'isEven', {
    /**
     * Checks If Base Number Is Even
     * @returns {Boolean}
     */
    get: function get() {
        return this.isInteger && this % 2 === 0;
    }
});

Object.defineProperty(Number.prototype, 'isOdd', {
    /**
     * Checks If Base Number Is Odd
     * @returns {Boolean}
     */
    get: function get() {
        return this.isInteger && this % 2 === 1;
    }
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(Object.prototype, 'toFormData', {
    /**
     * Creates An Instance Of FormData From Base Object 
     * @returns {FormData}
     */
    value: function value() {
        var formData = new FormData();
        var binder = function binder(data, parentKey) {
            if (data && (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object' && !(data instanceof Date) && !(data instanceof File) && !(data instanceof Blob)) {
                Object.keys(data).forEach(function (key) {
                    binder(data[key], parentKey ? parentKey + '[' + key + ']' : key);
                });
            } else {
                var value = data == null ? '' : data instanceof Date ? data.toISOString() : data;
                formData.append(parentKey, value);
            }
        };
        binder(this);
        return formData;
    },
    enumerable: false
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates Regex Object After Escaping Special Characters By Adding \ In Base String
 * *** Note: Does Not Escape BackSlashes(\)
 * @param {String} flag
 * @returns {Regex}
 */
String.prototype.toRegexQuote = function (flag) {
    return new RegExp(this.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"), flag);
};

/**
 * Replaces All Matching Pattern In Base String With Replacement
 * @param {RegExp | String} pattern 
 * @param {String} replacement 
 * @returns 
 */
String.prototype.replaceAll = function (pattern, replacement) {
    var str = this;
    if (typeof pattern === "undefined" || typeof replacement === "undefined") {
        return str;
    }
    var regex = new RegExp(pattern instanceof RegExp ? pattern : pattern.toRegexQuote(), "g");
    return str.replace(regex, replacement);
};

/**
 * Trims All Extra Spaces From Base String
 * @returns {String}
 */
String.prototype.trimToEmpty = function () {
    var str = this;
    str = str.replace(/\s\s+/g, " ");
    str = str.replace(/^\s/, "");
    str = str.replace(/\s$/, "");
    return str;
};

/**
 * Trims All Extra Spaces From Base String And Return Null If Nothing Remains
 * @returns {String|null}
 */
String.prototype.trimToNull = function () {
    var str = this;
    str = str.replace(/\s\s+/g, " ");
    str = str.replace(/^\s/, "");
    str = str.replace(/\s$/, "");
    return str === "" ? null : str;
};

/**
 * Replace All Persian Numbers In Base String With English Ones
 * @returns {String}
 */
String.prototype.toEnglishNumeric = function () {
    return this.replace(/۰/g, "0").replace(/۱/g, "1").replace(/۲/g, "2").replace(/۳/g, "3").replace(/۴/g, "4").replace(/۵/g, "5").replace(/۶/g, "6").replace(/۷/g, "7").replace(/۸/g, "8").replace(/۹/g, "9");
};

/**
 * Replace All English Numbers In Base String With Persian Ones
 * @returns {String}
 */
String.prototype.toPersianNumeric = function () {
    return this.replace(/0/g, "۰").replace(/1/g, "۱").replace(/2/g, "۲").replace(/3/g, "۳").replace(/4/g, "۴").replace(/5/g, "۵").replace(/6/g, "۶").replace(/7/g, "۷").replace(/8/g, "۸").replace(/9/g, "۹");
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);
});