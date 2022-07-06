const reverseString = function(text) {
    let finalString = '';
    for (let i=text.length-1; i >=0; i--){
        finalString = finalString.concat(text[i]);
    }
    return finalString

};

// Do not edit below this line
module.exports = reverseString;
