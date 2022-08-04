const fibonacci = function(input) {
    let n = parseInt(input)
    if (n<0) return "OOPS"

    if (n>10){
        return Math.floor(((1.618034**n) - ( (1-1.618034)**n)) / Math.sqrt(5))
    }

    let fibArr = [0,1,1]
    if (n<3) return fibArr[n]

    fibArr[n] = fibonacci(n-1) + fibonacci(n-2)
    return fibArr[n] 
};

// Do not edit below this line
module.exports = fibonacci;
