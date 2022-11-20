// me: prompt that asks how long is the password DONE
// me: 8 needs to be converted to a string
// me: alert saying that it needs to be over 8 characters

// me: wrote out the variables for user options: confirm whether or not to 
// me: include lowercase, uppercase, numeric, and/or special characters
// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialChar = [";", "$", "%", "&", "*",")", "~"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var upperCase = ["Q", "W", "E", "R", "T", "Y"];
var lowerCase = ["z", "x", "c", "v", "b", "n", "m"];

// Write password to the #password input
function writePassword() {

    //userPwLength prompt box asks end user to input # of characters 8-128 works
    //conditional statement if the password length is less than 8 OR more than 128 OR isNaN (means is not a number is true) then alert.
    var userPwLength = window.prompt("How long do you want your password? It needs to be at least 8 characters and no more than 128 characters.");
    if (parseInt(userPwLength) < 8 || parseInt(userPwLength) > 128 || (isNaN(userPwLength)) || (userPwLenth == false)) { 
        alert("Please enter a number that is at least 8 and at most 128.");
      return;
    } 
    
    //confirm method will output true or false 
    var specialChar = confirm("Do you want to include special characters in your password?\n OK = YES and Cancel = NO");
    var numeric = confirm("Do you want to include numeric characters in your password?\n OK = YES and Cancel = NO");
    var upperCase = confirm("Do you want to include upper case characters in your password?\n OK = YES and Cancel = NO");
    var lowerCase = confirm("Do you wan to include lower case characters in your password?\n OK = YES and Cancel = NO");

    // Acceptance criteria requirement: at least one character type should be selected. Below is an error that needs to be resolved.
    if(specialChar == false && numeric == false && upperCase == false && lowerCase == false){
        alert("ERROR: The generator requires that at least one character type is selected.\n Please click OK for at least one of the characters types (special, numeric, upper case, and/or lower case characters.");
        return;
    }

    /* ! At least one character type should be selected - Make an if then statement that if 
    specialChar, numeric, upperCase, and lowerCase are false then alert message and return. */


  /*var password = generatePassword();

  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;*/

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
THEN my input should be validated and at least one character type should be selected

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
*/