# Secure-Password
A password generator that will output a random secure password dependent on end user inputs.
--- This week's Challenge requires you to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.
---AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security


Tasks Completed
HTML: Updated the browser tab and h1 to reflect my unique application name. Also, added instructions to click on the red button.

FOR THE DEMO gif:
1. Show error alert if number is not 8-128 characters
2. Show error alert if input is not a number for # of characters
3. Show error alert if "Cancel" is chosen for all special characters
4. 

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
DONE ---- THEN a password is generated that matches the selected criteria

WHEN the password is generated
DONE ---- THEN the password is either displayed in an alert or written to the page
```
*/ 