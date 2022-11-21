# PEZword

## Description
A password generator that will output a random secure password dependent on end user inputs.
--- This week's Challenge requires you to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.
---AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

### Usage


### Tasks Completed
HTML: Updated the browser tab and h1 to reflect my unique application name. Also, added instructions to click on the red button.


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

## Links

[My Deployed Website](placeholder)

[My Code Repository](placeholder)

## Credit: References and Tutorials Utilized
1. [Stack Overflow](https://stackoverflow.com/questions/50672126/repeat-an-array-with-multiple-elements-multiple-times-in-javascript): Repeat the array step (lines 92-94) - I copied and edited these lines. 

2. [W3docs](https://www.w3docs.com/snippets/javascript/how-to-randomize-shuffle-a-javascript-array.html): Randomize the new longer array step (lines 97-113) - I copied and edited these lines of code.

3. [Image Repository Website](https://pixabay.com/): I downloaded an image for the background image for the header

## Demonstration 

### GIF 
The following GIF demonstrates the web application's appearance and functionality:

[PLACEHOLDER FOR THE GIF]

```
* Demo 1: From start to finish to generate a password. 
    Chosen number of characters is 20 characters long for the demo. 
    Chosen character types are special and upper case characters.
    - Prompts end-user through different character type choices for password
    - Prompt buttons are defined and inputs are confirmed with alerts
    - Password is shown on page replacing placeholder text
* Demo 2: Show error alerts for: 
    - if end-user chooses Cancel after welcome prompt
    - if length of characters: is not a number, less than 8, or more than 128 characters
    - if input is not a number for the number of characters
    - if "Cancel" is chosen for all special characters: At least one character type is required
```

### Screenshots
[PLACEHOLDER FOR THE SCREENSHOTS]

## Contributed
Myles Smith for sharing his logic approach during class for the homework. 

## Future Constributions
Pull request are welcome for recommendations for optimizing my JavaScript file. 
Do you have recommendations for functions that will reduce number of steps I used?

## License
MIT License

Copyright (c) 2022 M. Ewing

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

