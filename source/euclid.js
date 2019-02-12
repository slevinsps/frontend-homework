'use strict';

/**
 * NOD of two numbers
 * 
 * @param {number} x - first number
 * @param {number} y - second number 
 * @returns {(number|undefined)} NOD(x,y).
 */
const nodTwoNumbers = (x, y) => {
    if (x !== parseInt(x, 10) || y !== parseInt(y, 10)) {
        return;
    }
    let res = 1;
    res = x !== 0 ? nodTwoNumbers(y % x, x) : y;
    return res;
}


/**
 * NOD of any numbers
 * 
 * @param {number} x1 - first number
 * @param {Array} numbers - other numbers 
 * @returns {(number|undefined)} NOD of any numbers.
 */
const euclid = (x1, ...numbers) => {
    if (x1 !== parseInt(x1, 10)) {
        return;
    }    
    let res = x1;
    try {
        numbers.forEach( item => {
            if (item !== parseInt(item, 10)) {
                throw new SyntaxError("Type does not match");
            }
            res = nodTwoNumbers(res, item);
        });
    } catch (e) {
		console.log(e.message);
		return;
    }
    return res;
}
