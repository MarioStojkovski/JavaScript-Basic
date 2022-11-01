/* HOMEWORK #4 Title: Looping structures

Write a javascript function that:
When given 2 arrays of students firstNames and lastNames will return a new array with students full names;
Every name should have a numeric value before it.
Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
Result: full = ["1. Bob Gregory", "2. Jill Wurtz"] */

function fullName(firstNames, lastNames) {
  let fullNames = [];
  let order = 1;

  for (i = 0; i < firstNames.length && i < lastNames.length; i++) {
    fullNames.push(`${order}. ${firstNames[i]} ${lastNames[i]}`);
    order++;
  }
  return fullNames;
}

let firstNames = ["John", "Ed", "Lewis"];
let lastNames = ["Mayer", "Sheeran", "Capaldi"];

let result = fullName(firstNames, lastNames);
console.log(result);
alert(result);
