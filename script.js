// assignment code
var generateBtn = document.querySelector("#generate");
var password = 0;
var lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacter = ["!", '"',"#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", ";", ":", "[", "]", "{", "}", "|", "?", "<", ">", ",", ".", "~"];

// writing the password to the password input
function writepassword() {
    passLength = parseInt(prompt("Password length between 8 - 128"), 8);
    console.log(passLength);
    if ( passLength < 8 || passLength > 128 || isNaN(passLength) ){
        alert("please pick a number between 8 - 128");
        writepassword();
        return;
    }
    var lowercase = confirm("Would you like Lowercase letters in your password?");
    var upperCase = confirm("Would you like Upper case letters in your password?");
    var numberConfirmation = confirm("would you like Numbers in your password?");
    var special = confirm('would you like Special Characters in your password? ex: "@, $, #, %"');

// create if statement to determine what happens when you click cetain settings for the password 
// each if statement will take in a boolean of either lowercase, uppercase, numberconfirm and special


if (lowercase === true && upperCase === true && numberConfirmation === true && special === true){
   var combanation1 = upperLetter.concat(lowerLetter, numbers, specialCharacter)
    generatePassword(combanation1);
} else if (lowercase === true && upperCase === true && numberConfirmation === true && special === false){
    var combination2 = upperLetter.concat(lowerLetter, numbers)
    generatePassword(combination2);
} else if (lowercase === true && upperCase === true && numberConfirmation === false && special === false){
    var combination3 = upperLetter.concat(lowerLetter)
    generatePassword(combination3);
} else if (lowercase === true && upperCase === false && numberConfirmation === false && special === false){
    generatePassword(lowerLetter);
} else if (lowercase === false && upperCase === true && numberConfirmation === false && special === false){
    generatePassword(upperLetter);
} else if (lowercase === false && upperCase === true && numberConfirmation === true && special === false){
    var combination4 = upperCase.concat(numbers);
    generatePassword(combination4);
} else if (lowercase === false && upperCase === true && numberConfirmation === true && special === true){
var combination5 = upperLetter.concat(numbers, specialCharacter);
generatePassword(combination5);
} else if (lowercase === false && upperCase === false && numberConfirmation === true && special === false){
generatePassword(numberConfirmation)
} else if (lowercase === false && upperCase === false && numberConfirmation === true && special === true){
var combinatipon6 = numberConfirmation.concat(specialCharacter);
generatePassword(combinatipon6);
} else if (lowercase === false && upperCase === false && numberConfirmation === false && special === true){
generatePassword(specialCharacter);
} else if (lowercase === true && upperCase === false && numberConfirmation === false && special === true){
var combination7 = lowerLetter.concat(specialCharacter);
generatePassword(combination7);
} else if (lowercase === false && upperCase === true && numberConfirmation === false && special === true){
var combination8 = upperLetters.concat(specialCharacter);
generatePassword(combination8);
} else if (lowercase === false && upperCase === true && numberConfirmation === true && special === false){
var combination9 = upperLetter.concat(numberConfirmation);
generatePassword(combination9);
} else if (lowercase === true && upperCase === false && numberConfirmation === true && special === false){
var combination10 = lowerLetter.concat(numberConfirmation);
generatePassword(combination10);
} else if (lowercase === false && upperCase === false && numberConfirmation === false && special === false){
alert("please pick one of the following");
writepassword();
return;
};

// creating a function for the password 
/**
 *  generatePassword will take in a combination from the above if statements
 *  then will create the password with the specified length and combinations
 * 
 */
function generatePassword(combination) {
    var generatePassword = [];
     for (i = 0; i < passLength; i++){
         var randomCharacter = combination[Math.floor(Math.random() * combination.length)];
         generatePassword.push(randomCharacter);
     }
     password = generatePassword.join("");  //join will add all the parts of the password to the password string
}
var passwordText = document.querySelector("#password");
passwordText1.value = password;     //this is used to paste the code to text area 
}


// generate button with event listener 
generateBtn.addEventListener("click", writepassword);
