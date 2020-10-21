// Assignment Code
//let generateBtn = document.querySelector("#generate");

//array list of numbers
var nums = [0,1,2,3,4,5,6,7,8,9];

//array list of lowercase letters
var lower = "abcdefghijklmnopqrstuvwxyz";

//array list of UPPERCASE
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//array list of special characters
// var special = " !'()*+,-./":;<=>?@[\]^_`{|}#$%&~"
charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

  var numCon = prompt("How many characters for your password? Enter a number 8 < x > 128");
  var conLower = confirm("Does it have lower case?");
  var upperLet = confirm("Does it have UPPER case?");
  var numb = confirm("do it have lower case?");
  var specicalChar = confirm("Does it have special case?");

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}