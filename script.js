//your JS code here. If required.
function findFirstNonRepeatingChar() {
  const inputString = prompt("Enter a string:");

  // Loop through the string
  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    
    // Check if the character is non-repeating
    if (inputString.indexOf(char) === inputString.lastIndexOf(char)) {
      alert(`The first non-repeating character is: ${char}`);
      return;
    }
  }
  
  alert("No non-repeating character found in the input string.");
}

// Call the function
findFirstNonRepeatingChar();

