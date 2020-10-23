// Assignment Code
var generateBtn = document.querySelector("#generate");

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

var passwordLength ="";
var lowercaseConfirm;
var uppercaseConfirm;
var numberConfirm;
var specicalCharConfirm;

function generatePassword(){

  // Prompt the user for a `passwordLength`
  var passwordLength = parseInt(prompt("How many characters for your password? Enter a number between 8 to 128"));

  // Check to making sure the number stay in range from 8 to 128. If not, ALERT user to put a number that in the range
  while(passwordLength <=7 || passwordLength >= 128) {
    alert("Please enter number between 8 to 128!")
    return passwordLength;
  }

    // series of prompt and confirming question for the password
    var lowercaseConfirm = confirm("Click OK if Password include lower case!");
    var uppercaseConfirm = confirm("Click OK if Password include UPPER case!");
    var numberConfirm = confirm("Click OK if Password include numbers!");
    var specicalCharConfirm = confirm("Click OK if Password include special characters!");

  while(lowercaseConfirm ==false && uppercaseConfirm == false && numberConfirm == false && specicalCharConfirm == false) {
    alert("Password need at least ONE criteria!");
    return lowercaseConfirm, uppercaseConfirm, numberConfirm, specicalCharConfirm;
  }

  // DECLARE a new list of `characters`
  var charactersToUse = [];

  // CONFIRM if the password generator `isUsingNumbers`

  // IF `isUsingNumber`
  // THEN push `numbers` into `characterToUse` list
  // AND APPEND on random number from the `number` list
  if (numberConfirm == true) {
    charactersToUse = charactersToUse.concat(nums);
  }

  // CONFIRM if the password generator `isUsingLowercaseLetter`

  // IF `isUsingLowercaseLetter`
  // THEN push `lowercaseLetter` into `isUsingLowercaseLetter`
  if (lowercaseConfirm == true) {
    charactersToUse = charactersToUse.concat(lowerChar);
  }
  // CONFIRM if the password generator `isUsingUppercaseLetter`

  // IF `isUsingUppercaseLetter`
  // THEN push `uppercaseLetter` into `isUsingUppercaseLetter`
  if (uppercaseConfirm == true) {
    charactersToUse = charactersToUse.concat(upperChar);
  }

  // CONFIRM if the password generator `isUsingSpecialCharactersLetters`

  // IF `isUsingSpecialCharactersLetters`
  // THEN push `specialCharacters` into `characterToUse` list
  if (specicalCharConfirm == true) {
    charactersToUse = charactersToUse.concat(specicalChar);
  }

  // DECLARE a new `password` string
  var password = "";

  // FOR i = 0; CONTINUE as long as i < passwordLength; i++;
  for( var i = 0; i < passwordLength; i++) {
    password = password + charactersToUse[Math.floor(Math.random() * charactersToUse.length)];
  }

  //RETURN `password`
  return password;
}
// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);