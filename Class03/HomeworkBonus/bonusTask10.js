/*Task 10: Truthy or Falsy?
A value is said to be "truthy" if it evaluates to true in a Boolean context.
 All values are truthy in JavaScript unless they're one of the following:

false
null
undefined
0
NaN
""
In JavaScript, an empty object and an empty array are both considered truthy, but an empty string is considered false when evaluated as a Boolean (this behavior is what we call falsey). Create a function that takes an argument of any data type and returns 1 if it's truthy and 0 if it's falsey. */

function truthyOrFalsy(dataType) {
  return dataType ? 1 : 0;
}

let result = truthyOrFalsy("");
console.log(result);
alert(result);
