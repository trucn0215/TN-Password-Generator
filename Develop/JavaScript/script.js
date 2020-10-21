// Assignment Code
//let generateBtn = document.querySelector("#generate");

var criteria = {
  //array list of numbers
  "nums": "0123456789",
//array list of lowercase letters
  "lowerChar": "abcdefghijklmnopqrstuvwxyz",
//array list of UPPERCASE
  "upperChar": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//array list of special characters
  "specicalChar": "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
}

var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

  // series of prompt and confirming question for the password
  var numCon = prompt("How many characters for your password? Enter a number between 8 to 128");
  var conLower = confirm("Click OK if Password include lower case!");
  var upperLet = confirm("Click OK if Password include UPPER case!");
  var numb = confirm("Click OK if Password include numbers!");
  var specicalChar = confirm("Click OK if Password include special characters!");

  if(numCon <=8 || numCon >= 128) {
    alert("Please enter number between 8 to 128!")
  }


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}