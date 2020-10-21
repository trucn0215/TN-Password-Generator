// Assignment Code
let generateBtn = document.querySelector("#generate");

//array list of numbers
let nums = [0,1,2,3,4,5,6,7,8,9];

//array list of lowercase letters
let lower = "abcdefghijklmnopqrstuvwxyz"

//array list of UPPERCASE
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

//array list of special characters
// var special = " !'()*+,-./":;<=>?@[\]^_`{|}#$%&~"
charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

//Password length

var numCon = prompt ("How many characters for your password? Enter a number 8 < x > 128")
var conLower = confirm ("Does it have lower case?")
var upperLet = confirm ("Does it have UPPER case?")
var numb = confirm ("do it have lower case?")
var specicalChar = confirm ("Does it have special case?")



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