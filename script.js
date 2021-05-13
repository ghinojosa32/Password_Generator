//dom elements
var resultEl = document.getElementById("result");
var lengthEl = document.getElementById("length");
var uppercaseEl = document.getElementById("uppercase");
var  lowercaseEl = document.getElementById("lowercase");
var  numbersEl = document.getElementById("numbers");
var generateEl = document.getElementById("generate");
var clipboardEl = document.getElementById("clipboard");


var randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

generateEl.addEventListener("click", () => {
    var length = +lengthEl.Value;
    var hasLower = lowercaseEl.checked;
    var hasUpper = uppercaseEl.checked;
    var hasNumber = numbersEl.checked;
    var hasSymbol = symbolsEL.checked;
    
    console.log(hasLower, hasUpper, hasNumber, hasSymbol);
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

