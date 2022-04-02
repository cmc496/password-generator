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
    localStorage.setItem("length", promptLength);
};
  // set parameters for character types //

  // lowercase option //
  passwordLowercase();

  function passwordLowercase() {
    var optionLowercase = window.prompt("Would you like to use lowercase letters in your password? Please respond with 'Yes' or No.'");
    optionLowercase = optionLowercase.toLowerCase();

    if (optionLowercase === "" || optionLowercase === null) {
      window.alert("You need to provide a valid answer. Please try again.");
      return passwordLowercase();
    }
    
      if (optionLowercase === "yes") {
        var optionLowercase = true;
      }
      if (optionLowercase === "no") {
        var optionLowercase = false;
      } 

      console.log(optionLowercase);
  };

  // uppercase option //

  passwordUppercase();

  function passwordUppercase() {
    var optionUppercase = window.prompt("Would you like to use uppercase letters in your password? Please respond with 'Yes' or No.'");
    optionUppercase = optionUppercase.toLowerCase();

    if (optionUppercase === "" || optionUppercase === null) {
      window.alert("You need to provide a valid ansewr. Please try again.")
      return passwordUppercase();
    }

    if (optionUppercase == "yes") {
      var optionUppercase = true;
      localStorage.setItem(uppercase, optionUppercase);
    }
    if (optionUppercase == "no") {
      var optionUppercase = false;
    }
    console.log(optionUppercase);
  };

  // numbers option //

  passwordNumbers();

  function passwordNumbers() {
    var optionNumbers = window.prompt("Would you like to use numbers in your password? Please respond with 'Yes' or No.'");
    optionNumbers = optionNumbers.toLowerCase();
    
    if (optionNumbers === "" || optionNumbers === null) {
      window.alert("You need to provide a valid answer. Please try again.");
      return passwordNumbers();
    }

    if (optionNumbers == "yes") {
      var optionNumbers = true;
    }

    if (optionNumbers == "no") {
      var optionNumbers = false;
    }
    console.log(optionNumbers);

  }

  // special characters option //

  passwordSpecial();

  function passwordSpecial() {
    var optionSpecial = window.prompt("Would you like to use special characters in your password? Please respond with 'Yes' or No.'");
    optionSpecial = optionSpecial.toLowerCase();

    if (optionSpecial === "" || optionSpecial === null) {
      window.alert("You need to provide a valid answer. Please try again.");
      return passwordSpecial();
    }

    if (optionSpecial == "yes") {
      var optionSpecial = true;
    }

    if (optionSpecial == "no") {
      var optionSpecial = false;
    }
    console.log(optionSpecial);
  }

  // Make sure the user cannot continue without picking a minimum of one character type //
debugger;
  passwordParameters();

  function passwordParameters() {
    var parameters = [passwordLowercase, passwordUppercase, passwordNumbers, passwordSpecial]; 
    var parameters = {
      reset: function() {
        this.optionLowercase = null;
        this.optionUppercase = null;
        this.optionNumbers = null;
        this.optionSpecial = null;
      }
    };

    if (parameters === [false, false, false, false]) {
      window.alert("You must choose at least one character type. Go back and choose at least ONE.");
      return passwordLowercase();
    }
  
  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//function generatePassword()

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
