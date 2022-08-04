const findTheOldest = function(people) {
    return people.reduce( (previousPerson, currentPerson) => {

        if (!Object.hasOwn(previousPerson,'yearOfDeath')) previousPerson.yearOfDeath = (new Date()).getFullYear()
        if (!Object.hasOwn(currentPerson,'yearOfDeath')) currentPerson.yearOfDeath = (new Date()).getFullYear()
    
        previousAge = previousPerson.yearOfDeath - previousPerson.yearOfBirth
        currentAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth
        
        if (currentAge > previousAge) {
            return currentPerson 
        } else return previousPerson
    })

};

// Do not edit below this line
module.exports = findTheOldest;