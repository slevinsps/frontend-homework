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
	
    return x !== 0 ? nodTwoNumbers(y % x, x) : y;
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
    return numbers.reduce( (res, item) => res = nodTwoNumbers(res, item), x1);
}
