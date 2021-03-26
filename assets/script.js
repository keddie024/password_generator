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
    
  // The user is asked to input the number of characters for thei password.
  window.alert("Your password must be between 8 and 128 characters.");
  var passLength = window.prompt("How many characters would you like your password to be?");

  // Checks to see if the password length matches the criteria.
  if (passLength >= 8 && passLength <= 128) {
    window.alert("You have selected " + passLength + " characters.");
  }  else {
     return "Please try again";
  }

   var newPass = [];

  // The user is asked if they want lowercase characters.
  window.alert("You can select different character types to include in your password.");
  var answer = window.confirm("Would you like to use lowercase letters in your password?");

  // Adds characters to the pool if selected.
  if (answer) {
    for (i = 0; i < lowerChar.length; i++) {
      newPass.push(lowerChar[i]);
    }
    console.log(newPass);
    window.alert("Lowercase letters have been added!");
  } else {
    window.alert("You have chosen to NOT use lowercase letters.");
  }

  // The user is asked if they want uppercase characters.
  answer = window.confirm("Would you like to use uppercase letters in your password?");

  // Adds characters to the pool if selected.
  if (answer) {
    for (i = 0; i < upperChar.length; i++) {
      newPass.push(upperChar[i]);
    }
    console.log(newPass);
    window.alert("Uppercase letters have been added!");
  } else {
    window.alert("You have chosen to NOT use uppercase letters.");
  }

  // The user is asked if they want number characters.
  answer = window.confirm("Would you like to use numbers in your password?");

  // Adds the characters to the pool if selected.
  if (answer) {
    for (i = 0; i < numChar.length; i++) {
      newPass.push(numChar[i]);
    }
    console.log(newPass);
    window.alert("Numbers have been added!");
  } else {
    window.alert("You have chosen to NOT use numbers.");
  }

  // The user is asked if they want special characters.
  answer = window.confirm("Would you like to use special characters in your password?");

  // Adds the characters to the pool if selected.
  // If none have been selected, user is told to try again.
  if (answer) {
    for (i = 0; i < specChar.length; i++) {
      newPass.push(specChar[i]);
    }
    console.log(newPass);
    window.alert("Special characters have been added!");
  } else if (newPass.length < 1) {
    window.alert("You must choose at least one character option. Please try again!");
    return "Please try again";
  } else {
    window.alert("You have chosen to NOT use special characters.");
  }

  // The generated password.
  var passString = "";

  // Generates the password one character at a time from the pool of selected characters.
  for (i = 0; i < passLength; i++) {
    var passIndex = Math.floor(Math.random() * newPass.length);
    passString = passString + newPass[passIndex];
    console.log(passString);
  }

  // Sends the completed password to the "password" variable in the writePassword() function.
  return passString.toString();

}

// Executes writePassword function when "Generate Password" is clicked
generateBtn.addEventListener("click", writePassword);
