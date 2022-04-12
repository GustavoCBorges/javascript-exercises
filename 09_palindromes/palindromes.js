const palindromes = function (string) {
    let lower = string.toLowerCase().replace(/[^a-z]/g,"");
    function reverseString() {
        let splitString = lower.split("");
        let reverseArray = splitString.reverse();
        let reversedString = reverseArray.join("");
        return reversedString;
    };
    return lower == reverseString() ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
