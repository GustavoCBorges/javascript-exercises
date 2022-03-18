const removeFromArray = function(array, ...remove) {
    const filteredArray = array.filter(test => !remove.includes(test))
    return filteredArray
};


// Do not edit below this line
module.exports = removeFromArray;
