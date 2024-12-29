const repeatString = function(stringRepeated, numRepeated) {
    let message = "";

    if (Math.sign(numRepeated) === -1) {
        return "ERROR"
    }
    
    for (i = 1; i < numRepeated+1; i++) {
        message = message.concat(stringRepeated)
    }
    return message;
};

// Do not edit below this line
module.exports = repeatString;
