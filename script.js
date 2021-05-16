// assignment code
var generateBtn = document.querySelector("#generate");
var password = 0;
var lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
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
    
