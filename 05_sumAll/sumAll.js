const sumAll = function(firstNum, lastNum) {

    if ((!Number.isInteger(firstNum)) || (!Number.isInteger(lastNum))) return "ERROR";

    let sum = 0;

    if (firstNum > lastNum) {
        var smallNumber = lastNum;
        var largeNumber = firstNum;
    } else {
        var smallNumber = firstNum;
        var largeNumber = lastNum;
    }

    if (smallNumber < 0 || largeNumber < 0) return "ERROR";

    for (i = smallNumber; i <= largeNumber; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
