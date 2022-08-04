const palindromes = function (myStr) {
    //convert all to lowercase
    let myArr = Array.from(myStr.toLowerCase());

    //remove items that are not alpha
    const onlyLetters = (str) => /^[a-zA-Z]+$/.test(str);
    let filteredArr = myArr.filter(onlyLetters)
    //check true until false

    arrLen = filteredArr.length;

    for (let i = 0; i < arrLen; i++) {
        firstItem = filteredArr[i];
        secondItem = filteredArr[arrLen-i-1];
        if (firstItem !== secondItem) {
            return false
        }
    } return true
    
    

};

// Do not edit below this line
module.exports = palindromes;
