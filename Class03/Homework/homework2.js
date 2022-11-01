/* Write a JavaScript function that will return:
Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
Note: Call the function in console to see answer
Bonus: Make the same function work for converting dog to human years as well */

function AgeConverter(userChoice, userInput) {
  let dogAge = userInput * 7;
  let humanAge = userInput / 7;

  if (Number.isNaN(userInput) || userInput <= 0) {
    return "Please enter a valid number of years!";
  } else if (userChoice === "d") {
    return `${userInput} human years is equal to ${dogAge} dog years.`;
  } else if (userChoice === "h") {
    return `${userInput} dog years is qeual to ${humanAge.toFixed(
      1
    )} human years.`;
  } else {
    return `Invalid choice = ${userChoice}
    \n Enter 'D' to convert human years to Dog years.
    \n Enter 'H' to convert dog years to Human years.`;
  }
}

let userChoice = prompt(
  "Enter 'D' to convert human years to Dog years.\n Enter 'H' to convert dog years to Human years: "
).toLocaleLowerCase();

let userInput = parseInt(prompt("Enter years:"));
console.log(`User input: ${userInput} years.`);

let result = AgeConverter(userChoice, userInput);
console.log(result);
alert(result);
