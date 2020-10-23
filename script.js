// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(){
  //create variables
  var numberic = "0123456789";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specicalCharacter = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  
  // Prompt the user for a `passwordLength`
  var passwordLength = parseInt(prompt("How many characters for your password? Enter a number between 8 to 128"));

  // Comfirming variables
  var lowercaseConfirm;
  var uppercaseConfirm;
  var numberConfirm;
  var specicalCharConfirm;

  var passwordPicking;

    // Condition for length input. If input is not valid, give ALERTs!
    if (!passwordLength) {
      alert ("Please enter a number of Character for your Password!")
    }
    else if(passwordLength < 8 || passwordLength > 128) {
    alert("Please enter number between 8 to 128!")
    passwordLength = parseInt(prompt("How many characters for your password? Enter a number between 8 to 128"));
    }
    else {
      lowercaseConfirm = confirm("Click OK if Password include lower case!");
      uppercaseConfirm = confirm("Click OK if Password include UPPER case!");
      numberConfirm = confirm("Click OK if Password include numbers!");
      specicalCharConfirm = confirm("Click OK if Password include special characters!");
    }
  }
  // NO option picked
  if (!lowercaseConfirm && !uppercaseConfirm && !numberConfirm && !specicalCharConfirm) {
    passwordPicking = alert("Password need at least ONE criteria!");
  }
  // 4 option picked
  else if (lowercaseConfirm && uppercaseConfirm && numberConfirm && specicalCharConfirm){
    passwordPicking = lowercase.concat(numberic, uppercase, specicalCharacter);
  }

  // 3 option picked
  else if (lowercaseConfirm && uppercaseConfirm && numberConfirm) {
    passwordPicking = lowercase.concat(numberic, uppercase);
  }
  else if (lowercaseConfirm && uppercaseConfirm && specicalCharConfirm) {
    passwordPicking = lowercase.concat(uppercase, specicalCharacter);
  }
  else if (lowercaseConfirm && specicalCharConfirm && numberConfirm) {
    passwordPicking = lowercase.concat(specicalCharacter, numberic);
  }
  else if (uppercaseConfirm && specicalCharConfirm && numberConfirm) {
    passwordPicking = numberic.concat(uppercase, specicalCharacter);
  }

  // 2 options picked
  else if (lowercaseConfirm && uppercaseConfirm) {
    passwordPicking = lowercase.concat(uppercase);
  }
  else if (lowercaseConfirm && numberConfirm) {
    passwordPicking = lowercase.concat(numberic);
  }
  else if (lowercaseConfirm && specicalCharConfirm) {
    passwordPicking = lowercase.concat(specicalCharacter);
  }
  else if (uppercaseConfirm && numberConfirm) {
    passwordPicking = uppercase.concat(numberic);
  }
  else if (uppercaseConfirm && specicalCharConfirm) {
    passwordPicking = uppercase.concat(specicalCharacter);
  }
  else if (numberConfirm && specicalCharConfirm) {
    passwordPicking = numberic.concat(specicalCharacter);
  }

  // 1 option picked
  else if (lowercaseConfirm) {
    passwordPicking = lowercase;
  }
  else if (uppercaseConfirm) {
    passwordPicking = uppercase;
  }
  else if (numberConfirm) {
    passwordPicking = numberic;
  }
  else if (specicalCharConfirm) {
    passwordPicking = specicalCharacter;
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