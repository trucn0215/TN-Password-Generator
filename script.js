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

  //create variables
  var numberic = ["0","1","2","3","4","5","6","7","8","9"];
  var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var specicalCharacter = ["!","\\","#","$","%","&","'","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~","\""];

function generatePassword(){

  // Comfirming variables
  var lowercaseConfirm;
  var uppercaseConfirm;
  var numberConfirm;
  var specicalCharConfirm;

  // variable container where to store Characters what we will randomly pull from.
  var passwordLength = "";

  var passwordLength = parseInt(prompt("How many characters for your password? Enter a number between 8 to 128"));
  
  while (passwordLength < 8 || passwordLength > 128) {
    alert ("Please enter the correct number of Character for your Password!");
    passwordLength = parseInt(prompt("How many characters for your password? Enter a number between 8 to 128"));
  }

  // Confirmation
  lowercaseConfirm = confirm("Click OK if Password include lower case!");
  uppercaseConfirm = confirm("Click OK if Password include UPPER case!");
  numberConfirm = confirm("Click OK if Password include numbers!");
  specicalCharConfirm = confirm("Click OK if Password include special characters!");

  //Confirming user pick criterias that they want password should included
    // NO option picked
    if (!lowercaseConfirm && !uppercaseConfirm && !numberConfirm && !specicalCharConfirm) {
      passwordPicking = alert("Password needs at least ONE criteria!");

      lowercaseConfirm = confirm("Click OK if Password include lower case!");
      uppercaseConfirm = confirm("Click OK if Password include UPPER case!");
      numberConfirm = confirm("Click OK if Password include numbers!");
      specicalCharConfirm = confirm("Click OK if Password include special characters!");
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
    else {
      passwordPicking = specicalCharacter;
    }

    // DECLARE a new list of `characters`
    var randomPassword = "";

    // generate random selection
    for( var i = 0; i < passwordLength; i++) {
      randomPassword += passwordPicking[Math.floor(Math.random() * passwordPicking.length)];
      console.log(randomPassword);
    }

    //RETURN `password`
    return randomPassword;
  }