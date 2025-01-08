const findTheOldest = function(people) {
    let oldestAge = [0, null];
    for (i = 0; i < people.length; i++) {
        if ("yearOfDeath" in people[i]) {
            currentAge = people[i].yearOfDeath - people[i].yearOfBirth;
        } else {
            currentAge = 2024 - people[i].yearOfBirth
        }
        
        if (currentAge > oldestAge[0]) {
            oldestAge = [currentAge, i];
        }
    }
    
    // Get the person
    let oldest = people[oldestAge[1]]
    return oldest;
};


// Do not edit below this line
module.exports = findTheOldest;
