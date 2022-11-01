/* HOMEWORK #3 Title: Looping structures

Description: Write a JavaScript function that will return:
The sum of the MAX and MIN numbers from an array with numbers
Ex: arr = [3, 5, 6, 8, 11]
Output: Max: 11, Min: 3, Sum: 14

Bonus: Try making the function work if there are other types of items in it. */

function sumOfMinAndMax(array) {
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== "number") {
      console.log(`Other type: ${array[i]} , position: ${i}`);
      continue;
    }
    if (array[i] > max) {
      max = array[i];
    }
    if (array[i] < min) {
      min = array[i];
    }
  }
  let sum = min + max;
  return `Max: ${max}, Min: ${min} Sum:${sum}`;
}

let array = [
  11,
  "fsd",
  50,
  "Mario",
  1,
  6,
  3,
  7891,
  true,
  -513,
  null,
  1111,
  false,
  undefined,
  4210,
  32,
  "Stojkovski",
];

let result = sumOfMinAndMax(array);
alert(
  result +
    `\nThe other not number types in the array are displayed in the console.`
);
console.log(result);
