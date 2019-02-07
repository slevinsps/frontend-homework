'use strict';

function isInt(n){
    return Number(n) === n && n % 1 === 0;
}

function nodTwoNumbers(x, y) {
	if (!isInt(x) || !isInt(y)) {
		return;
	}
	let res = 1;
	if (x != 0) {
		res = nodTwoNumbers(y % x, x);
	} else { 
		res = y;
	}
	return res;
}

function euclid(x1, ...numbers) {
	if (!isInt(x1)) {
		return;
	}
	
	let res = x1;
	let length = numbers.length;
	let checkType = true;
	for (let i = 0; i < length; i++) {
		if (!isInt(numbers[i])) {
			checkType = false;
			break;
		}
		res = nodTwoNumbers(res, numbers[i]);
	}
	if (!checkType)
		return;
	return res;
}
