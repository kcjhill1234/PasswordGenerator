// Assignment Code
var character = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+=";


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(character) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  for(var i = 0; 1<1; i++){
   passwordText = character.charAt(Math.floor(Math.random() * character.lenght));
  }
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(passwordText)