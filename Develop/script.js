// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

window.alert("Welcome to Password Generator! Please click the 'Generate Password' button to begin.");

function generatePassword() {
  var promptLength = window.prompt("Please choose a password length ranging from 8 to 128 characters.");

  if (promptLength === "" || promptLength === null) {
    window.alert("You must choose a number ranging from 8 to 128. Please try again.");

    return generatePassword();
  }

  if (promptLength < 8) {
    window.alert("You must choose a minimum length of 8. Please try again.");

    return generatePassword();
  }

  if (promptLength > 128) {
    window.alert("You must choose a maximum length of 128. Please try again.");

    return generatePassword();
  }

  if (isNaN(promptLength)) {
    window.alert("You must choose a NUMBER ranging from 8 to 128. Please try again.");

    return generatePassword();
  }

  if (promptLength >= 8 && promptLength <= 128) {
    window.alert("You have chosen a length of " + promptLength + " .");
  }
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
