/*Task 8: Case Insensitive Comparison
Write a function that validates 
whether two strings are identical. Make it case insensitive. */

function isSameText(text1, text2) {
  return text1.toLowerCase() === text2.toLowerCase();
}

let text1 = prompt(
  "Check if the two text are the same. \nEnter the first text:"
);

let text2 = prompt("Enter the second text:");
let result = isSameText(text1, text2);

console.log(text1, text2);
alert(result);
