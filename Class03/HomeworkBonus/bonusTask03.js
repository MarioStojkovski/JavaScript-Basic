/*Task 3: Convert Hours into Seconds
Write a function that converts hours into seconds.
Maybe you can use some function from previous tasks.*/

function hoursToSeconds(hours) {
  if (Number.isNaN(hours) || hours <= 0) {
    return "Please enter a valid value.";
  }
  let seconds = hours * 3600;
  return `${hours} hours is equal to ${seconds} seconds.`;
}

let hours = parseInt(
  prompt("Enter how many hours you want to convert to seconds: ")
);

let result = hoursToSeconds(hours);
console.log(result);
alert(result);

console.log("------Using previous function. -----");

function minutesToSeconds(minutes) {
  let seconds = minutes * 60;
  return seconds;
}

function hoursToSeconds2(hours) {
  if (Number.isNaN(hours) || hours <= 0) {
    return "Please enter a valid value.";
  }
  let minutes = hours * 60;
  let seconds = minutesToSeconds(minutes);

  return `${hours} hours equals to ${minutes} minutes or ${seconds} seconds.`;
}

let result2 = hoursToSeconds2(hours);
console.log(result2);
alert(result2);
