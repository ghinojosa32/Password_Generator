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
// generate event listen
generateEl.addEventListener("click", () => {
    var length = +lengthEl.Value;
    var hasLower = lowercaseEl.checked;
    var hasUpper = uppercaseEl.checked;
    var hasNumber = numbersEl.checked;
    var hasSymbol = symbolsEL.checked;
    
   resultEl.innerText = generatePassword(
       hasLower, 
       hasUpper, 
       hasNumber, 
       hasSymbol
  );
});

// generate password function 
function generatePassword(lower, upper, symbol, length) {
  
    let generatePassword = "";
    var typesCount = lower + upper + numer + symbol;
    console.log("typesCount: ", typesCount);
    var typesArr =[{ lower },{ upper },{ number},{ symbol }].filter
    (items => Object.values(item)[0]
    );
    console.log("typesArr: ", typesArr);
    if(typesCount ===0) {
        return "";
    }
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

