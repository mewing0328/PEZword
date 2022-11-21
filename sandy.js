// Button - see html for id="generate"
var generateBtn = document.querySelector("#generate");

// Write password to the #password input - see html for id="password"
function writePassword() {

    // Acceptance criteria requirement: "THEN I am presented with a series of prompts for password criteria" && "THEN I choose a length of at least 8 characters and no more than 128 characters"
    var PwLength = prompt("Hello! Welcome to the Secure Password tool.\n \n How long do you want your password?\n It needs to be at least 8 characters and no more than 128 characters.");
   
    // IF the password length (var PwLength) is less than 8 OR more than 128 OR isNaN (means "is not a number" is true), THEN alert.
    if (parseInt(PwLength) < 8 || parseInt(PwLength) > 128 || (isNaN(PwLength))) { 
      alert("Please enter a number that is at least 8 and at most 128.");
      return;
    }

    // IF the end-user hits "Cancel", THEN an alert will prompt them to try again.
    if (PwLength == '' || PwLength == null){
      alert("You canceled the password generator.\n \n Please try again by clicking the red 'Generate Password' button.");
      return;
    } else {
      confirm("You picked: " + PwLength + ". \n You password will be " + PwLength + " characters long.");
    } 

    // Acceptance criteria requirement: "THEN I select which criteria to include in the password" && "THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters" 
    alert("In the next prompts, you will be asked if you want special, numeric, uppercase, and lowercase characters. \n \n You must say YES to AT LEAST one of the character types.");

    // Acceptance criteria requirement: "THEN my input should be validated [...]"
    var specialCharBoo = confirm("Do you want to include special characters in your password?\n YES = Press OK\n NO = Press Cancel");
    if (specialCharBoo == true){
      alert("You picked YES.\n Special characters WILL be included.");
    } else {
      alert("You picked NO.\n Special characters WILL NOT be included.");
    }

    var numericBoo = confirm("Do you want to include numeric characters in your password?\n YES = Press OK\n NO = Press Cancel");
    if (numericBoo == true){
      alert("You picked YES.\n Numeric characters WILL be included.");
    } else {
      alert("You picked NO.\n Numeric characters WILL NOT be included.");
    }

    var upperCaseBoo = confirm("Do you want to include upper case characters in your password?\n YES = Press OK\n NO = Press Cancel");
    if (upperCaseBoo == true){
      alert("You picked YES.\n Uppercase characters WILL be included.");
    } else {
      alert("You picked NO.\n Uppercase characters WILL NOT be included.");
    }

    var lowerCaseBoo = confirm("Do you want to include lower case characters in your password?\n YES = Press OK\n NO = Press Cancel");
    if (lowerCaseBoo == true){
      alert("You picked YES.\n Lowercase characters WILL be included.");
    } else {
      alert("You picked NO.\n Lowercase characters WILL NOT be included.");
    }

    // Acceptance criteria requirement: "THEN [...] at least one character type should be selected"
    //IF the end-user does not pick at least one character type, then an ERROR will prompt them to pick at least one character type.
    if(specialCharBoo == false && numericBoo == false && upperCaseBoo == false && lowerCaseBoo == false){
        alert("ERROR:\n \n The generator requires that AT LEAST ONE character type is selected.\n Please click the red 'Generate Password' button to START OVER.");
        return;
    }

    // Variables with characters for each character type
    var specialChar = [";", "$", "%", "&", "*",")", "~"];
    var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var upperCase = ["Q", "W", "E", "R", "T", "Y"];
    var lowerCase = ["z", "x", "c", "v", "b", "n", "m"];
    // Placeholder variable for the generated password
    var generatePassword = [];

    // Utilizing the boolean true & false user choices to concatenate the variable generatePassword
    if(specialCharBoo == true){
      var generatePassword = generatePassword.concat(specialChar);
    }

    if(numericBoo == true){
      var generatePassword = generatePassword.concat(numeric);
    }

    if(upperCaseBoo == true){
      var generatePassword = generatePassword.concat(upperCase);
    }

    if(lowerCaseBoo == true){
      var generatePassword = generatePassword.concat(lowerCase);
    }

    // Summary of the characters the user chose
    alert("The characters you chose for your password are: " + generatePassword + " \n \n Click OK to see the password that PEZword created for you.");
  
    // REPEAT the array --- need 8-128 characters inclusive of 8 & 128 so chosen array(s) needs to repeat. MAX characters are 128 characters so repeat the array at least 22 times (the array with the smallest number of characters is 6 so 128/6 = 21.3 round up to 22)!
    var arrayToRepeat = generatePassword;
    var numberOfRepeats = 22;   
    var repeatedArray = [].concat(...Array(numberOfRepeats).fill(arrayToRepeat));

    // RANDOMIZE the new longer array --- the characters chosen need to be in a random order
    function randomize(values) {
      let index = values.length,  randomIndex;

      // While there remain elements to shuffle.
      while (index != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * index);
        index--;
        // And swap it with the current element.
        [values[index], values[randomIndex]] = [
        values[randomIndex], values[index]];
      }
      return values;
    }
        // Called the function with my renamed array
        var randomPassword = repeatedArray;
        randomize(randomPassword);

    // SLICE & rename the random long array --- I sliced all the elements except for the last characters (the number of characters remaining depends on the user input of preferred length variable PwLength) 
    var thePassword = randomPassword.slice(randomPassword.length - PwLength);

    // CONSOLE LOG thePassword --- to show/check array length matches the PwLength chosen from the prompt
    console.log(thePassword);

    // JOIN method --- remove the commas separators in the array output text 
    var password = thePassword.join('');

    // .innerHTML --- researched document.querySelector in W3 schools and applied .innerHTML to replace the placeholder text within the HTML
    var passwordText = document.querySelector("#password").innerHTML = password;

    // Acceptance Criteria Requirement: "THEN a password is generated that matches the selected criteria"
    // Acceptance Criteria Requirement: "THEN the password is either displayed in an alert or written to the page" -- the alert summarizes the characters used && the page displays the password
    passwordText.valueOf = password;
}
// CALL the writePassword function
generateBtn.addEventListener("click", writePassword);
