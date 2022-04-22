// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching (drivers, string) {
    
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch (drivers, string) {
    
    return drivers.filter(driver => driver[0] === string[0]);
}

function matchName (array, string) {
    
    return array.filter(driver => driver.name === string);
}