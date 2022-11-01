/*Create a function called tellStory()
The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )
The function should return one big string with a story made from the arguments
Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.
The value that is returned from the function should be printed in the console or in alert. */

function tellStory(name, mood, activity) {
  let i = 0;
  let story = "";

  while (i < name.length && i < mood.length && i < activity.length) {
    story += `This is ${name[i]}. ${name[i]} is a nice person. Today they are ${mood[i]}. They are ${activity[i]} all day The end. \n`;
    i += 1;
  }
  return story;
}

let name = ["Mario", "Marija", "Igor", "Angela"];
let mood = ["Optimistic", "Joyful", "Ammused", "Excited"];
let activity = ["Running", "Gaming", "Skydiving", "Cycling"];

let result = tellStory(name, mood, activity);
console.log(result);
alert(result);
