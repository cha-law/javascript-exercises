const getTheTitles = function(array) {
    returnArray = [];
    array.forEach(function(object) {
        returnArray.push(object.title)
    });
    return returnArray;
};

// Do not edit below this line
module.exports = getTheTitles;
