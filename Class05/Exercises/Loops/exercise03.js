/*Exercise #3
Task: Write a JavaScript program that will read in a number and write out its digits*/

let number = prompt("Enter a number:");
let digits = [];

for (let i = 0; i < number.length; i++) {
  digits.push(+number.charAt(i));
}
console.log(digits);
alert(`The digits of the number ${number} are: \n${digits}`);
