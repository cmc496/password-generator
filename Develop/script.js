// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();

  //function generatePassword()

  function generatePassword() {
    //debugger;
    passwordLength();
    
    
  }
};

  // Set parameters for password length //
function passwordLength() {
  var optionLength = window.prompt("Please choose a password length ranging from 8 to 128 characters.");

  if (optionLength === "" || optionLength === null) {
    window.alert("You must choose a number ranging from 8 to 128. Please try again.");

    return passwordLength();
  }

  if (optionLength < 8) {
    window.alert("You can choose a minimum length of 8. Please try again.");

    return passwordLength();
  }

  if (optionLength > 128) {
    window.alert("You can choose a maximum length of 128. Please try again.");

    return passwordLength();
  }

  if (isNaN(optionLength)) {
    window.alert("You must choose a NUMBER ranging from 8 to 128. Please try again.");

    return passwordLength();
  }

  if (optionLength >= 8 && optionLength <= 128) {
    window.alert("You have chosen a length of " + optionLength + " .");
    //i = promptLength - 8;
  }
  console.log(optionLength);
  //console.log("i = " + i);


passwordLowercase();
// set parameters for character types //

// lowercase option //

function passwordLowercase() {
  var optionLowercase = window.prompt("Would you like to use lowercase letters in your password? Please respond with 'Yes' or No.'");
    optionLowercase = optionLowercase.toLowerCase();
    var lowercase = [
      "",
      1,
      2
    ];

  if (optionLowercase === "" || optionLowercase === null) {
    window.alert("You need to provide a valid answer. Please try again.");
    return passwordLowercase();
  }

  if (optionLowercase === "yes") {
    var optionLowercase = 1;
    lowercase[1] = "abcdefghijklmnopqrstuvwxyz";
  }

  if (optionLowercase === "no") {
    var optionLowercase = 2;
    lowercase[2] = "";
  }

  console.log(optionLowercase);

passwordUppercase();

// uppercase option //

function passwordUppercase() {
 var optionUppercase = window.prompt("Would you like to use uppercase letters in your password? Please respond with 'Yes' or No.'");
  optionUppercase = optionUppercase.toLowerCase();
  var uppercase = [
    "",
    1,
    2
  ];

  if (optionUppercase === "" || optionUppercase === null) {
    window.alert("You need to provide a valid ansewr. Please try again.")
    return passwordUppercase();
  }

  if (optionUppercase == "yes") {
    var optionUppercase = 1;
    uppercase[1] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (optionUppercase == "no") {
    var optionUppercase = 2;
    uppercase[2] = "";
  }

  console.log(optionUppercase);
passwordNumbers();

// numbers option //

function passwordNumbers() {
  var optionNumbers = window.prompt("Would you like to use numbers in your password? Please respond with 'Yes' or No.'");
  optionNumbers = optionNumbers.toLowerCase();
  var numbers = [
    "",
    1,
    2
  ];

  if (optionNumbers === "" || optionNumbers === null) {
    window.alert("You need to provide a valid answer. Please try again.");
    return passwordNumbers();
  }

  if (optionNumbers == "yes") {
    var optionNumbers = 1;
    numbers[1] = "1234567890";
  }

  if (optionNumbers == "no") {
    var optionNumbers = 2;
    numbers[2] = "";
  }

  console.log(optionNumbers);

passwordSpecial();

// special characters option //

function passwordSpecial() {
  var optionSpecial = window.prompt("Would you like to use special characters in your password? Please respond with 'Yes' or No.'");
  optionSpecial = optionSpecial.toLowerCase();
  var special = [
    "",
    1,
    2
  ];

  if (optionSpecial === "" || optionSpecial === null) {
    window.alert("You need to provide a valid answer. Please try again.");
    return passwordSpecial();
  }

  if (optionSpecial == "yes") {
    var optionSpecial = 1;
    special[1] = "!@#$%^&*()";
  }

  if (optionSpecial == "no") {
    var optionSpecial = 2;
    special[2] = "";
  }

  console.log(optionSpecial);

  // Make sure user must choose at least one character type //

  passwordParameters();

  function passwordParameters() {
    if (optionLowercase === 2 && optionUppercase === 2 && optionNumbers === 2 && optionSpecial === 2) {
      window.alert("You must choose at least one character type. Please try again.");
      return passwordLowercase();
    }

    passwordGenerated();

    function passwordGenerated() {
      //var generatedPassword = (optionLength) => []
      var length = optionLength;
      const charset = lowercase[optionLowercase] + uppercase[optionUppercase] + numbers[optionNumbers] + special[optionSpecial];
      var generatedPassword = "";
      const charsetLength = charset.length;
      console.log("charset.length is " + charset.length);
      //console.log("length is " + optionLength);
      console.log("character choices: " + charset);
    debugger;
      for ( var i = 0; i < length; i++ ) {
        generatedPassword += charset.charAt(Math.floor(Math.random() * charsetLength));
      //console.log(generatedPassword);
      }
      //return generatedPassword;
      console.log("generated password is " + generatedPassword);
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
