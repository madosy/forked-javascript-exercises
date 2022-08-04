const add = function(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total
};

const subtract = function(firstNum, ...otherNum) {
  let total = firstNum;
  for (const num of otherNum) {
    total -= num;
  }
  return total
};

const sum = function(arr) {
  return arr.reduce((previousVal, currentVal) => previousVal + currentVal, 0)
};

const multiply = function(arr) {
  return arr.reduce((previousVal, currentVal) => previousVal * currentVal, 1)
};

const power = function(numA, numB) {
  return numA ** numB
};

const factorial = function(num) {
  if (num === 0) return 1
  return num * factorial(num - 1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
