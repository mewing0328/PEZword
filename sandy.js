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
var userChoices = [];


// Write password to the #password input
function writePassword() {

    //IF the password length is less than 8 OR more than 128 OR isNaN (means is not a number is true), THEN alert.
    var userPwLength = prompt("How long do you want your password?\n It needs to be at least 8 characters and no more than 128 characters.");


    // Acceptance criteria requirement: "my input should be validated"
    // IF the end user hits "Cancel", THEN an alert will prompt them to try again.
    if (userPwLength == '' || userPwLength == null){
      alert("You canceled the password generator.\n Please try again by clicking the red 'Generate Password' button.");
      return;
    } else {
      confirm("You picked: " + userPwLength);
    } 

    if (parseInt(userPwLength) < 8 || parseInt(userPwLength) > 128 || (isNaN(userPwLength))) { 
        alert("Please enter a number that is at least 8 and at most 128.");
      return;
    }
      
       
    // Acceptance criteria requirement: "my input should be validated"
    //The end user chooses which characters to include in password.  
    var specProm = confirm("Do you want to include special characters in your password?\n YES = Press OK\n NO = Press Cancel");
    if (specProm == true){
      alert("You picked YES");
    } else {
      alert("You picked NO");
    }

    var numericProm = confirm("Do you want to include numeric characters in your password?\n OK = YES and Cancel = NO");
    if (numericProm == true){
      alert("You picked YES");
    } else {
      alert("You picked NO");
    }

    var upperCaseProm = confirm("Do you want to include upper case characters in your password?\n OK = YES and Cancel = NO");
    if (upperCaseProm == true){
      alert("You picked YES");
    } else {
      alert("You picked NO");
    }

    var lowerCaseProm = confirm("Do you wan to include lower case characters in your password?\n OK = YES and Cancel = NO");
    if (lowerCaseProm == true){
      alert("You picked YES");
    } else {
      alert("You picked NO");
    }

    // Acceptance criteria requirement: "at least one character type should be selected"
    //IF the end user does not pick at lease one character type, then an ERROR will prompt them to pick at least one character type.
    if(specProm == false && numericProm == false && upperCaseProm == false && lowerCaseProm == false){
        alert("ERROR: The generator requires that AT LEAST ONE character type is selected.\n Please click OK for AT LEAST ONE of the characters types (special, numeric, upper case, and/or lower case characters.");
        return;
    }



    if(specProm == true){
      var test = userChoices.concat(specialChar);
    }

    console.log(test);
    alert("Your password is: " + test);

    /*if(numericProm == true){
      userChoices.concat(numeric);
    }

    if(upperCaseProm == true){
      userChoices.concat(upperCase);
    }

    if(lowerCaseProm == true){
      userChoices.concat(lowerCase);
    }*/

  


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
DONE ---- THEN my input should be validated and at least one character type should be selected

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
*/