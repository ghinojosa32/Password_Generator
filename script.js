var randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

//generate function
funtion getRandomLower() {
    return String.fromCharCode(Math.floor(MAth.random() * 26) + 97);
}
funtion getRandomUpper() {
    return String.fromCharCode(Math.floor(MAth.random() * 26) + 65);
}
funtion getRandomNumber() {
    return String.fromCharCode(Math.floor(MAth.random() * 10) + 48);
}
funtion getRandomSymbol() {
    var symbol = " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    return symbols[MAth.floor(MAth.random() * symbols.length)];
}

