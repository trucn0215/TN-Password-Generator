// Assignment Code
var generateBtn = document.querySelector("#generate");

//array list of numbers
var nums = [0,1,2,3,4,5,6,7,8,9];

//array list of lowercase letters
var lower = "abcdefghijklmnopqrstuvwxyz"

//array list of UPPERCASE
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

//array list of special characters
// var special = " !'()*+,-./":;<=>?@[\]^_`{|}#$%&~"
charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

//Password length


function generatePassword() {
  //confirm use number

  //confirm use lowercase letters

  //confirm use UPPERCASE letters

  //confirm use special letter
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //when click the button 

//show series of promts for user to type in for password criterias
//promt: which criteria to include in the password