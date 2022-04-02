// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();

  //function generatePassword()

  function generatePassword() {
    debugger;
    passwordLength();
    
    
  }
};

  // Set parameters for password length //
function passwordLength() {
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


passwordLowercase();
// set parameters for character types //

// lowercase option //

function passwordLowercase() {
  var optionLowercase = window.prompt("Would you like to use lowercase letters in your password? Please respond with 'Yes' or No.'");
    optionLowercase = optionLowercase.toLowerCase();

  if (optionLowercase === "" || optionLowercase === null) {
    window.alert("You need to provide a valid answer. Please try again.");
    return passwordLowercase();
  }

  if (optionLowercase == "yes") {
    var optionLowercase = 1;
  }

  if (optionLowercase == "no") {
    var optionLowercase = 2;
  }

  console.log(optionLowercase);
passwordUppercase();

// uppercase option //

function passwordUppercase() {
 var optionUppercase = window.prompt("Would you like to use uppercase letters in your password? Please respond with 'Yes' or No.'");
  optionUppercase = optionUppercase.toLowerCase();

  if (optionUppercase === "" || optionUppercase === null) {
    window.alert("You need to provide a valid ansewr. Please try again.")
    return passwordUppercase();
  }

  if (optionUppercase == "yes") {
    var optionUppercase = 1;
  }

  if (optionUppercase == "no") {
    var optionUppercase = 2;
  }
  console.log(optionUppercase);
passwordNumbers();

// numbers option //

function passwordNumbers() {
  var optionNumbers = window.prompt("Would you like to use numbers in your password? Please respond with 'Yes' or No.'");
  optionNumbers = optionNumbers.toLowerCase();

  if (optionNumbers === "" || optionNumbers === null) {
    window.alert("You need to provide a valid answer. Please try again.");
    return passwordNumbers();
  }

  if (optionNumbers == "yes") {
    var optionNumbers = 1;
  }

  if (optionNumbers == "no") {
    var optionNumbers = 2;
  }
  console.log(optionNumbers);

passwordSpecial();

// special characters option //

function passwordSpecial() {
  var optionSpecial = window.prompt("Would you like to use special characters in your password? Please respond with 'Yes' or No.'");
  optionSpecial = optionSpecial.toLowerCase();

  if (optionSpecial === "" || optionSpecial === null) {
    window.alert("You need to provide a valid answer. Please try again.");
    return passwordSpecial();
  }

  if (optionSpecial == "yes") {
    var optionSpecial = 1;
  }

  if (optionSpecial == "no") {
    var optionSpecial = 2;
  }
  console.log(optionSpecial);

  // Make sure user must choose at least one character type //

  passwordParameters();

  function passwordParameters() {
    if (optionLowercase === 2 && optionUppercase === 2 && optionNumbers === 2 && optionSpecial === 2) {
      window.alert("You must choose at least one character type. Please try again.");
      return passwordLowercase();
    }
  };
};
};
};
};
};

  // Write password to the #password input

  var passwordText = document.querySelector("#password");

  passwordText.value = password;




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
