function findFirstNonRepeatingChar() {
  const inputString = prompt("Enter a string:");
  
  // Create an empty object to store character frequencies
  const charFrequency = {};
  
  // Loop through the string to calculate the frequency of each character
  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    charFrequency[char] = charFrequency[char] ? charFrequency[char] + 1 : 1;
  }
  
  // Find the first non-repeating character
  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    if (charFrequency[char] === 1) {
      alert(`The first non-repeating character is: ${char}`);
      return;
    }
  }
  
  alert("No non-repeating character found in the input string.");
}

// Call the function
findFirstNonRepeatingChar();



