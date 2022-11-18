// me: prompt that asks how long is the password
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

    //userPwLength prompt box works
    var userPwLength = window.prompt("How long do you want your password? It needs to be at least 8 characters and no more than 128 characters.");
    if (parseInt(userPwLength) < 8 || parseInt(userPwLength) > 128) { /*add code for nothing inputted */
        alert("Please enter a number that is at least 8 and at most 128.")
    } 
    
  /*var password = generatePassword();

  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
*/
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

