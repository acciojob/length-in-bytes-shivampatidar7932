const byteSize = (str) => {
  // Create a Blob object with the string data
  const blob = new Blob([str]);

  // Get the size of the Blob (and, therefore, the size of the string in bytes)
  const sizeInBytes = blob.size;

  return sizeInBytes;
};

// Prompt the user to enter a string
const str = prompt("Enter some string.");

// Call the function and display the result using an alert
alert(byteSize(str));
