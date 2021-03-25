// Assignment Code
var generateBtn = document.querySelector("#generate");
var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

function generatePassword() {
    
  window.alert("Your password must be between 8 and 128 characters.");
  var passLength = window.prompt("How many characters would you like your password to be?");

  if (passLength >= 8 && passLength <= 128) {
    window.alert("You have selected " + passLength + " characters.");
  }  else {
     return "Please try again";
  }

   var newPass = [];

  window.alert("You can select different character types to include in your password.");
  var answer = window.confirm("Would you like to use lowercase letters in your password?");

  if (answer) {
    for (i = 0; i < lowerChar.length; i++) {
      newPass.push(lowerChar[i]);
    }
    console.log(newPass);
    window.alert("Lowercase letters have been added!");
  } else {
    window.alert("You have chosen to NOT use lowercase letters.");
  }

  answer = window.confirm("Would you like to use uppercase letters in your password?");

  if (answer) {
    for (i = 0; i < upperChar.length; i++) {
      newPass.push(upperChar[i]);
    }
    console.log(newPass);
    window.alert("Uppercase letters have been added!");
  } else {
    window.alert("You have chosen to NOT use uppercase letters.");
  }

  answer = window.confirm("Would you like to use numbers in your password?");

  if (answer) {
    for (i = 0; i < numChar.length; i++) {
      newPass.push(numChar[i]);
    }
    console.log(newPass);
    window.alert("Numbers have been added!");
  } else {
    window.alert("You have chosen to NOT use numbers.");
  }

  answer = window.confirm("Would you like to use special characters in your password?");

  if (answer) {
    for (i = 0; i < specChar.length; i++) {
      newPass.push(specChar[i]);
    }
    console.log(newPass);
    window.alert("Special characters have been added!");
  } else if (newPass.length < 1) {
    window.alert("You must choose at least one character option. Please try again!");
    generatePassword();
  } else {
    window.alert("You have chosen to NOT use special characters.");
  }

  var passString = "";

  for (i = 0; i < passLength; i++) {
    var passIndex = Math.floor(Math.random() * newPass.length);
    passString = passString + newPass[passIndex];
    console.log(passString);
  }

  return passString.toString();

}

// Executes writePassword function when "Generate Password" is clicked
generateBtn.addEventListener("click", writePassword);
