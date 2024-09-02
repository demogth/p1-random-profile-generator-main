const randomProfile = require('random-profile-generator');
const fs = require('fs');

const quantity = process.argv[2];

function getSomeNames() {
    names = [];
    for (let i = 0; i < quantity; i++) {
        names.push(randomProfile.name())
    }
    return names
}

function writeFileWithNames() {
    const names = getSomeNames(quantity);
    if (!fs.existsSync(''))
    fs.writeFileWithNames(`${quantity}-names.txt`)
}

console.log(writeFileWithNames())