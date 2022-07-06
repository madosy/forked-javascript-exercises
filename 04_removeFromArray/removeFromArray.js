const removeFromArray = function(inputArray, ...itemsForRemoval) {
    for (const itemRemoved of itemsForRemoval) {
        let word = itemRemoved;
        inputArray.forEach(spliceBadItem)

        function spliceBadItem (arrItem, index, arr) {
            if (arrItem === itemRemoved) {
                arr.splice(index,1)
            }
        }
    }
    return inputArray
}

// Do not edit below this line
module.exports = removeFromArray;
