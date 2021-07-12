/**
 * Checks Whether Base Date Is In Range Of Start And End
 * @param {Date} start 
 * @param {Date} end 
 * @returns {Boolean}
 */
Date.prototype.isInRange = function (start, end) {
    if (!(start instanceof Date)) throw new TypeError('Start Must Be Instance Of Date');
    if (!(end instanceof Date)) throw new TypeError('End Must Be Instance Of Date');
    return (this.getTime() >= start.getTime() && this.getTime() <= end.getTime()) || (this.getTime() >= end.getTime() && this.getTime() <= start.getTime());
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
    this.setFullYear(this.getFullYear() + parseInt(years))
    return this;
};

Object.defineProperty(Date.prototype, 'totalMilliseconds', {
    /**
     * Calculates Total Milliseconds From Base Date Up Until Now
     * @returns {Number}
     */
    get: function () {
        return Math.floor(new Date() - this);
    }
});

Object.defineProperty(Date.prototype, 'totalSeconds', {
    /**
     * Calculates Total Seconds From Base Date Up Until Now
     * @returns {Number}
     */
    get: function () {
        return Math.floor(this.totalMilliseconds / 1000);
    }
});

Object.defineProperty(Date.prototype, 'totalMinutes', {
    /**
     * Calculates Total Minutes From Base Date Up Until Now
     * @returns {Number}
     */
    get: function () {
        return Math.floor(this.totalMilliseconds / (1000 * 60));
    }
});

Object.defineProperty(Date.prototype, 'totalHours', {
    /**
     * Calculates Total Hours From Base Date Up Until Now
     * @returns {Number}
     */
    get: function () {
        return Math.floor(this.totalMilliseconds / (1000 * 60 * 60));
    }
});

Object.defineProperty(Date.prototype, 'totalDays', {
    /**
     * Calculates Total Days From Base Date Up Until Now
     * @returns {Number}
     */
    get: function () {
        return Math.floor(this.totalMilliseconds / (1000 * 60 * 60 * 24));
    }
});