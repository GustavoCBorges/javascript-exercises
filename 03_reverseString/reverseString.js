const reverseString = function(string) {
    const splittedString = string.split("");
    let reversedString = '';
    for (i = splittedString.length-1; i >= 0; i--){
        reversedString += splittedString[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
