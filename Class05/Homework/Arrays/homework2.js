/*Write a function that will take an array of 5 numbers as an argument and return the sum.
Print it in the console or in alert
BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number.
 If one of the numbers of the array is invalid show an error message instead of a result. */
function sumArray(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
let numbers = [1, 2, 3, 4, 5];
let result = sumArray(numbers);

console.log(result);
alert(result);

console.log("-----Bonus-----");

let validateArray = [1, "Mario", 3, NaN, 5];

function validateNumber(validateArray) {
  for (let isNum of validateArray) {
    if (Number(isNum)) {
      console.log(isNum);
      continue;
    } else {
      console.log("Error this is not a number!!");
      continue;
    }
  }
}
let result2 = validateNumber(validateArray);
