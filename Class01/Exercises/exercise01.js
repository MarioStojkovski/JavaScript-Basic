/* Generating arrays
Generate an array that has all the numbers that are divisible by 3 from 1 to 1000
Generate an array that has all the even numbers that are divisible by 4 from 1 to 1000
Generate an array that has all the numbers that end with the digit 1 from 1 to 1000 */

function devisibleByThree() {
  let firstArray = [];
  for (let i = 1; i < 1001; i++) {
    if (i % 3 == 0) {
      firstArray.push(i);
    }
  }
  return firstArray;
}

console.log(devisibleByThree);

function evenNumDivisableByFour() {
  let secondArray = [];
  for (let i = 1; i < 1001; i++) {
    if (i % 2 == 0 && i % 4 == 0) {
      secondArray.push(i);
    }
  }
  return secondArray;
}

console.log(evenNumDivisableByFour);

function endsWithOne() {
  let thirdArray = [];
  for (let i = 1; i < 1001; i++) {
    if (i % 10 == 1) {
      thirdArray.push(i);
    }
  }
  return thirdArray;
}

console.log(endsWithOne);
