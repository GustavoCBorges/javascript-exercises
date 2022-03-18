const sumAll = function(a,b) {
    let sum = 0
    if (b > a) {
        for (i = a; i <= b; i++) {
            sum += i
        }
    } else if (a > b) {
        for (i = b; i <= a; i++) {
            sum += i
        }
    }

    if (sum < 0 || typeof a != 'number' || typeof b != 'number') {
        return 'ERROR'
    } else {
        return sum
    }
};

// Do not edit below this line
module.exports = sumAll;
