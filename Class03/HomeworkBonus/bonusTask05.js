/*In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. 
The farmer breeds three species:
chickens = 2 legs
cows = 4 legs
pigs = 4 legs
The farmer has counted his animals and he gives you a subtotal for each species.
You have to implement a function that returns the total number of legs of all the animals. */

function animalLegs(chickens, cows, pigs) {
  if (
    Number.isNaN(chickens) ||
    chickens < 0 ||
    Number.isNaN(cows) ||
    cows < 0 ||
    Number.isNaN(pigs) ||
    pigs < 0
  ) {
    return "Please enter valid values.";
  }
  let chickenLegs = chickens * 2;
  let cowLegs = cows * 4;
  let pigLegs = pigs * 4;
  return `The total number legs of the animals on the farm is: ${
    chickenLegs + cowLegs + pigLegs
  }.`;
}

let chickens = parseInt(prompt("Enter the number of chickens:"));
let cows = parseInt(prompt("Enter the number of cows:"));
let pigs = parseInt(prompt("Enter the number of pigs:"));

let result = animalLegs(chickens, cows, pigs);
console.log(result);
alert(result);
