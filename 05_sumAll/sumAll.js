const sumAll = function(firstNum, lastNum) {
    if (firstNum < 0 || lastNum < 0) {
        return 'ERROR'
    } else if (typeof(firstNum) != 'number' || typeof(lastNum) != 'number') {
        return 'ERROR'
    } else {
        let totalInt = Math.abs(lastNum - firstNum) + 1;
        return totalInt * (firstNum + lastNum) / 2;
    }
};

// Do not edit below this line
module.exports = sumAll;
