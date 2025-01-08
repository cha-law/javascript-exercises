const fibonacci = function(amount) {
    if (amount < 0) return "OOPS";
    let previousNum = 0; 
    let currentNum = 1;
    for (let i = amount; i > 0; i--) {
        newNum = previousNum + currentNum;
        previousNum = currentNum;
        currentNum = newNum; 
    }
    return previousNum;
};

// Do not edit below this line
module.exports = fibonacci;
