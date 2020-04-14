// Assignment Code


const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordTextbox = document.querySelector("#password");

  passwordTextbox.value = password;
  
}
function generatePassword(){
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const special = "!@#$%^&*()_+=";

  function selectAtRandom(string) {
    const index = Math.floor(Math.random() * string.length);
    return string[index];
  }

  let passwordCharacters = lower;
  const length = prompt("How many characters do you want") || 8;

  if (length > 128) {
    return "Ooops to much";
  }

  if (length < 8) {
    return "Ooops not enough";
  }

  const answer = confirm("Is " + (length) + " characters correct?");

  if(answer){
    passwordCharacters += upper
  }


  function passwordHelper(length){
    // create new string 
    let passphrase = '';
    for(let i = 0; i < length; i++){
      // store random character in that string
      passphrase += selectAtRandom(passwordCharacters);
    }
    return passphrase
    // return the password
  }

  return passwordHelper(length);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


