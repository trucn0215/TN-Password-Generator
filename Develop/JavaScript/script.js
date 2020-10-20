// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//if button click:
//show series of promts for user to type in for password criterias
//promt: which criteria to include in the password
//question 1: lenght of password (8 to 128 length)
//question 2: password include lowercase
//question 3: password include updatercase
//question 4: password include numeric
//question 5: password include special characters

//after all promt answered and validated, generate a random password that have all criterias.

//Password either display in a alert or written to the page.