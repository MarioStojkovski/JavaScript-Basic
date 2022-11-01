/* EXERCISE #1
MANIPULATE THE DOM
Select the first div -
Select all paragraphs -
Select the last div -
Select the header 3 in the last div -
Select the header 1 in the last div -
Get the text from the first paragraph in the second div -
Add the word "text" to the text element in the second div -
Change the text of the header 1 in the last div
Change the text of the header 3 in the last div
Note:You can't change the HTML */

let firstDiv = document.getElementById("first");
console.log(firstDiv);

let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

let lastDiv = firstDiv.nextElementSibling.nextElementSibling;
console.log(lastDiv);

let lastDivHeader3 = lastDiv.lastElementChild;
console.log(lastDivHeader3);

let lastDivHeader1 = lastDiv.firstElementChild;
console.log(lastDivHeader1);

let p1div2text = paragraphs[1].innerText;
console.log(p1div2text);

let div2text =
  document.getElementsByClassName("anotherDiv")[0].lastElementChild;
console.log(div2text);

div2text.innerText += " text";

lastDivHeader1.innerText = "Text Change";
lastDivHeader3.innerText = "Also text Change";
