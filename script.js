// assignment code
var generateBtn = document.querySelector("#generate");
var password = 0;
var lowerLetter = ["a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z"];
var upperLetter = ["A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z"];
var numbers = ["0, 1, 2, 3, 4, 5, 6, 7, 8, 9"];
var specialChar = ["!", '"',"#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", ";", ":", "[", "]", "{", "}", '|', "?", "<", ">", ",", ".", "~"];

// writing the password to the password input
function writepassword() {
    if (passlength <8 || passlength > 128 || isNaN(passlength) ){
        alert("please choose a number between 8 and 128!");
        writepassword();
        return;
    }
    var lowercase = confirm("do you want lowercase letters in your password?");
    var upperCase = confirm("do you want upper case letters in your password?");
    var numberConfirm = confirm("do you want numbers in your password?");
    var special = confirm('do you want special characters in your password? ex: "@, $, #, %"');

// create if statement to determine what happens when you click cetain settings for the password 

if (lowercase === true && upperCase === false && numberConfirm === false && special === false){
    generatePassword(lowerLetter);
} else if (lowercase === false && upperCase === true && numberConfirm === false && special === false){
     generatePassword(upperLetter);
} else if (lowercase === false && upperCase === false && numberConfirm === false && special === true){
    generatePassword(specialChar);
} else if (lowercase === false && upperCase === false && numberConfirm === true && special === false){
    generatePassword(numbers);
} else if (lowercase === true && upperCase === true && numberConfirm === false && special === false){
    var combo1 = lowerLetter.concat(upperLetter);
    generatePassword(combo1);
} else if (lowercase === true && upperCase === false && numberConfirm === false && special === true){
    var combo2 = lowerLetter.concat(specialChar);
    generatePassword(combo2);
} else if (lowercase === true && upperCase === false && numberConfirm === true && special === false){
var combo3 = lowerLetter.concat(numbers);
generatePassword(combo3);
} else if (lowercase === true && upperCase === true && numberConfirm === false && special === true){
var combo4 = lowerLetter.concat(upperLetter, specialChar);
generatePassword(combo4)
} else if (lowercase === true && upperCase === true && numberConfirm === true && special === false){
var combo5 = lowerLetter.concat(upperLetter, numbers);
generatePassword(combo5);
} else if (lowercase === true && upperCase === false && numberConfirm === true && special === true){
var combo6 = lowerLetter.concat(numbers, specialChar);
generatePassword(combo6);
} else if (lowercase === true && upperCase === true && numberConfirm === true && special === true){
var combo7 = lowerLetter.concat(upperLetter, numbers, specialChar);
generatePassword(combo7);
} else if (lowercase === false && upperCase === true && numberConfirm === true && special === false){
var combo8 = upperLetters.concat(numbers);
generatePassword(combo8);
} else if (lowercase === false && upperCase === true && numberConfirm === false && special === true){
var combo9 = upperLetter.concat(specialChar);
generatePassword(combo9);
} else if (lowercase === false && upperCase === true && numberConfirm === true && special === true){
var combo10 = upperLetter.concat(numbers, specialChar);
generatePassword(combo10);
} else if (lowercase === false && upperCase === false && numberConfirm === true && special === true){
var combo11 = numbers.concat(specialChar);
generatePassword(combo11);
}

// creating a function for the password 

function generatePassword(combination) {
    var generatePassword = [];
     for(i = 0; i < passlength; i++){
         var randomChar = combination[Math.floor(Math.random() * combination.length)];
         generatePassword.push(randomChar);
     }
     password = generatePassword.join("");
}
var passwordText = document.querySelector("#password");
}


// generate button with event listener 
generateBtn.addEventListener("click", writepassword);
