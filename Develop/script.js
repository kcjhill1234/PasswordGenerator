// Assignment Code
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  document.querySelector('#password').value = generatePassword();
}

function generatePassword() {
  // selectAtRandom is a function that takes an array and returns an element at a random index.
  function selectAtRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  // an array of lowercase letters.
  const LowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  // an array of uppercase letters.
  const UpperCaseCharacters = LowerCaseCharacters.map(letter =>
    letter.toUpperCase()
  );
  // an array of numbers.
  const Numbers = '0123456789'.split('');
  // an array of special characters
  const SpecialCharacters = `!"#$%&'()*+,-./:;<=>?@^_1`.split('');

  // an array to store all available characters to create a password. Starts with a copy of the lowercase characters array
  let passwordCharacters = [...LowerCaseCharacters];

  //prompt user for length of password.
  const userLength = prompt('Please enter length') || 8;

  if (userLength > 128) {
    return 'Length must not be greater than 128 characters';
  }

  if (userLength < 8) {
    return 'Length must not be less than 8 characters';
  }

  if (confirm('Add Uppercase characters?')) {
    // add uppercase characters to passwordCharacters
    passwordCharacters = [...passwordCharacters, ...UpperCaseCharacters];
  }

  if (confirm('Add Numbers?')) {
    // add numbers characters to passwordCharacters
    passwordCharacters = [...passwordCharacters, ...Numbers];
  }

  if (confirm('Add Special Characters?')) {
    // add special characters to passwordCharacters
    passwordCharacters = [...passwordCharacters, ...SpecialCharacters];
  }

  // password helper function that takes a length and returns a password string of that length.
  // This function creates a new array with the given length.
  // I them loop over the array and randomly select a character from the passwordCharacters and concatenate it to a string
  function passwordHelper(length){
   return Array.from({ length }).reduce(
      (passPhrase, _) => passPhrase.concat(selectAtRandom(passwordCharacters)),
      ''
    );
  }
  // return a password at the desired length
  return passwordHelper(userLength);
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
