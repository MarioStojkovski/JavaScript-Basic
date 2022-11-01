/* Task 1: Convert Minutes into Seconds
Write a function that takes an integer minutes and converts it to seconds.*/

function minutesToSeconds(minutes) {
  if (Number.isNaN(minutes) || minutes <= 0) {
    return "Please enter a valid value.";
  }
  let seconds = minutes * 60;
  return `${minutes} minutes is equal to ${seconds} seconds.`;
}

let minutes = parseInt(
  prompt("Enter how many minutes you want to convert to seconds: ")
);

let result = minutesToSeconds(minutes);
console.log(result);
alert(result);
