function getRandomNumber(max) {
    const randomNum = Math.round(Math.random() * max);
    console.log(randomNum)
    return randomNum;
}

function isArgvEmpty(argv) {
    if (!argv) {
       return true
    }
    return false;
}

module.exports = { getRandomNumber, isArgvEmpty }