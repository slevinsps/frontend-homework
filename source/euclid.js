'use strict';

var nodTwoNumbers = (x, y) => {
    if (x !== parseInt(x, 10) || y !== parseInt(y, 10)) {
        return;
    }
    let res = 1;
    res = x != 0 ? nodTwoNumbers(y % x, x) : y;
    return res;
}

var euclid = (x1, ...numbers) => {
    if (x1 !== parseInt(x1, 10)) {
        return;
    }    
    
    let res = x1;
    let length = numbers.length;
    let checkType = true;
    var NumberNotIntException = {};
    try {
        numbers.forEach(function(item) {
            if (item !== parseInt(item, 10)) {
                throw NumberNotIntException;
            }
            res = nodTwoNumbers(res, item);
        });
    } catch (e) {
        if (e === NumberNotIntException) {
            return;        
        }
    }
    return res;
}
