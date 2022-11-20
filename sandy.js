// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

    //IF the password length is less than 8 OR more than 128 OR isNaN (means is not a number is true), THEN alert.
    var userPwLength = prompt("How long do you want your password?\n It needs to be at least 8 characters and no more than 128 characters.");


    // Acceptance criteria requirement: "my input should be validated". IF the end user hits "Cancel", THEN an alert will prompt them to try again.
    if (userPwLength == '' || userPwLength == null){
      alert("You canceled the password generator.\n Please try again by clicking the red 'Generate Password' button.");
      return;
    } else {
      confirm("You picked: " + userPwLength + ". \n You password will be " + userPwLength + " characters long.");
    } 

    // Acceptance criteria requirement: "choose a length of at least 8 characters and no more than 128 characters"
    if (parseInt(userPwLength) < 8 || parseInt(userPwLength) > 128 || (isNaN(userPwLength))) { 
        alert("Please enter a number that is at least 8 and at most 128.");
      return;
    }
      
    // Acceptance criteria requirement: "my input should be validated". The end user chooses which characters to include in password.  
    var specialChar = confirm("Do you want to include special characters in your password?\n YES = Press OK\n NO = Press Cancel");
    if (specialChar == true){
      alert("You picked YES.\n Special characters WILL be included.");
    } else {
      alert("You picked NO.\n Special characters WILL NOT be included.");
    }

    var numeric = confirm("Do you want to include numeric characters in your password?\n YES = Press OK\n NO = Press Cancel");
    if (numeric == true){
      alert("You picked YES.\n Numeric characters WILL be included.");
    } else {
      alert("You picked NO.\n Numeric characters WILL NOT be included.");
    }

    var upperCase = confirm("Do you want to include upper case characters in your password?\n YES = Press OK\n NO = Press Cancel");
    if (upperCase == true){
      alert("You picked YES.\n Uppercase characters WILL be included.");
    } else {
      alert("You picked NO.\n Uppercase characters WILL NOT be included.");
    }

    var lowerCase = confirm("Do you want to include lower case characters in your password?\n YES = Press OK\n NO = Press Cancel");
    if (lowerCase == true){
      alert("You picked YES.\n Lowercase characters WILL be included.");
    } else {
      alert("You picked NO.\n Lowercase characters WILL NOT be included.");
    }

    // Acceptance criteria requirement: "at least one character type should be selected"
    //IF the end user does not pick at lease one character type, then an ERROR will prompt them to pick at least one character type.
    if(specialChar == false && numeric == false && upperCase == false && lowerCase == false){
        alert("ERROR: The generator requires that AT LEAST ONE character type is selected.\n Please click OK for AT LEAST ONE of the characters types (special, numeric, upper case, and/or lower case characters.");
        return;
    }

    var specialChar = [";", "$", "%", "&", "*",")", "~"];
    var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var upperCase = ["Q", "W", "E", "R", "T", "Y"];
    var lowerCase = ["z", "x", "c", "v", "b", "n", "m"];
    var generatePassword = [];

    //if(variable) is the same as if(variable == true)
    if(specialChar){
      var generatePassword = generatePassword.concat(specialChar);
    }

    if(numeric){
      var generatePassword = generatePassword.concat(numeric);
    }

    if(upperCase){
      var generatePassword = generatePassword.concat(upperCase);
    }

    if(lowerCase){
      var generatePassword = generatePassword.concat(lowerCase);
    }

    // method join with seperator indicated as nothing instead of the default ,
    console.log(generatePassword.join(''));
    alert("Your password is: " + generatePassword.join(''));

  // declared a new variable called password and used the generatePassword output for this variable   
  var randomPassword = generatePassword.join('')

  

  var password = generatePassword.join('');
  // document.querySelector researched on W3 schools and applied .innerHTML to replace the placeholder text in the html
  var passwordText = document.querySelector("#password").innerHTML = password;
  passwordText.valueOf = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




/*
```
GIVEN I need a new, secure password

WHEN I click the button to generate a password
DONE ---- THEN I am presented with a series of prompts for password criteria

WHEN prompted for password criteria
DONE ---- THEN I select which criteria to include in the password

WHEN prompted for the length of the password
DONE ---- THEN I choose a length of at least 8 characters and no more than 128 characters

WHEN asked for character types to include in the password
DONE ---- THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

WHEN I answer each prompt
DONE ---- THEN my input should be validated and at least one character type should be selected

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
*/