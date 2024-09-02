const randomProfile = require('random-profile-generator');

function getNames(quantity) {
    names = [];
    for (let i = 0; i < quantity; i++) {
        names.push(randomProfile.name())
    }
    return names
}

module.exports = { getNames }