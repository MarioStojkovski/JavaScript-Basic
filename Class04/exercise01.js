/*Exercise 1
Make 3 functions:

Function that takes a number through a parameter and returns how many digits that number has
Function that takes a number through a parameter and returns if its even or odd
Function that takes a number through a parameter and returns if its positive or negative
Create a function that takes a number through a parameter and calls all three functions for the number that was passed. It should show the results in the console.

Ex:
Code: getNumberStats(-25); Console: 2 Digits, Odd, Negative */

let numberOfDigits = (number) => {
  let digits = Math.floor(number).toString();
  if (number >= 0) {
    return digits.split("").length;
  } else {
    return digits.split("").length - 1;
  }
};

let evenOrOdd = (number) => {
  if (!Number.isInteger(number)) {
    return "Neither even or odd";
  } else if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

let positiveOrNegative = (number) => {
  if (number === 0) {
    return "Number is zero";
  } else if (number > 0) {
    return "Positive";
  } else {
    return "Negative";
  }
};

let getNumberStats = (number) => {
  console.log(
    `${number} -> ${numberOfDigits(number)} Digits, ${evenOrOdd(
      number
    )}, ${positiveOrNegative(number)}`
  );

  return `${number} -> 
            ${numberOfDigits(number)} Digits, 
            ${evenOrOdd(number)}, 
            ${positiveOrNegative(number)}`;
};

getNumberStats(-25);
getNumberStats(77);
getNumberStats(25.333);
getNumberStats(-30.1234332);
getNumberStats(8888888);
