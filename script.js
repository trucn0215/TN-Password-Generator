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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){

  // Prompt the user for a `passwordLength`
  var passwordLength = prompt("Provide a length");

  // If NOT (passwordLength >=8 || passwordLength <= 128)
  // THEN ALERT to the user that they need to provide a correct length
  // AND EXIT FUNCTION
  if(numCon <=8 || numCon >= 128) {
    alert("Please enter number between 8 to 128!")
    return;
  }

  // DECLARE a new list of `characters`
  var charactersToUse = [];

  // CONFIRM if the password generator `isUsingNumbers`

  // IF `isUsingNumber`
  // THEN push `numbers` into `characterToUse` list
  // AND APPEND on random number from the `number` list

  // CONFIRM if the password generator `isUsingLowercaseLetter`

  // IF `isUsingLowercaseLetter`
  // THEN push `lowercaseLetter` into `isUsingLowercaseLetter`

  // CONFIRM if the password generator `isUsingUppercaseLetter`

  // IF `isUsingUppercaseLetter`
  // THEN push `uppercaseLetter` into `isUsingUppercaseLetter`

  // CONFIRM if the password generator `isUsingSpecialCharactersLetters`

  // IF `isUsingSpecialCharactersLetters`
  // THEN push `specialCharacters` into `characterToUse` list
  
  // IF NOT `characterToUse.length`
  // THEN ALERT to the user that they need to provide a correct length
  // AND EXIT FUNCTION

  // FOR i = 0; CONTINUE as long as i < passwordLength; i++;
  for( var i = 0; i < passwordLength; i++) {

  }

  // DECLARE a new `password` string
  var password = "";

  // WHILE password.Length < passwordLength
  while( password.length < passwordLength) {
    // SELECT `randomCharacter` a character from `charactersToUse`
    // APPEND `randomCharacter` to `password` string
  }

  //RETURN `password`
  return password;
}
// Write password to the #password input
function writePassword() {

  // series of prompt and confirming question for the password
  var numCon = prompt("How many characters for your password? Enter a number between 8 to 128");
  var conLower = confirm("Click OK if Password include lower case!");
  var upperLet = confirm("Click OK if Password include UPPER case!");
  var numb = confirm("Click OK if Password include numbers!");
  var specicalChar = confirm("Click OK if Password include special characters!");




  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}