// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

window.confirm("Welcome to Password Generator!");
if (confirm) {
  passwordLength();
}

function passwordLength() {

  // Set parameters for password length //
    var promptLength = window.prompt("Please choose a password length ranging from 8 to 128 characters.");

    if (promptLength === "" || promptLength === null) {
      window.alert("You must choose a number ranging from 8 to 128. Please try again.");

      return passwordLength();
    }

    if (promptLength < 8) {
      window.alert("You can choose a minimum length of 8. Please try again.");

      return passwordLength();
    }

    if (promptLength > 128) {
      window.alert("You can choose a maximum length of 128. Please try again.");

      return passwordLength();
    }

    if (isNaN(promptLength)) {
      window.alert("You must choose a NUMBER ranging from 8 to 128. Please try again.");

      return passwordLength();
    }

    if (promptLength >= 8 && promptLength <= 128) {
      window.alert("You have chosen a length of " + promptLength + " .");
    }
    console.log(promptLength);
  
  

  // set parameters for character types //
  var optionLowercase = function() { 
    window.prompt("Would you like to use lowercase letters in your password?");
  
    if (optionLowercase === "" || optionLowercase === null) {
      window.alert("You must choose a valid answer. Please try again.");
      return optionLowercase()
    }
  }

};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//function generatePassword()

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
