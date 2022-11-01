/*Task 6: Compare Strings by Count of Characters
Create a function that takes two strings as arguments and return either true or false 
depending on whether the total number of characters in the first string 
is equal to the total number of characters in the second string. */

function stringCompare(text1, text2) {
  return text1.length === text2.length;
}

let text1 = prompt(
  "Compare if the two text have the same number of characters. \nEnter the first text:"
);
let text2 = prompt("Enter the second text:");

let result = stringCompare(text1, text2);
console.log(result);
alert(result);
