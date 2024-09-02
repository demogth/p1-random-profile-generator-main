const fs = require('fs');
const { getRandomNumber, isArgvEmpty } = require('./utils.js');
const { getNames } = require('./getNames.js');

let quantity = process.argv[2];

function writeFileWithNames() {
    if (isArgvEmpty(quantity)) {
        quantity = getRandomNumber(20);
    }

    const names = getNames(quantity);
    const namesReadyToWrite = names.join('\n')

    if (!fs.existsSync('./result')) {
        fs.mkdirSync('./result')
    } 
    fs.writeFileSync(`./result/${quantity}-names.txt`, namesReadyToWrite)
}

module.exports = { writeFileWithNames }