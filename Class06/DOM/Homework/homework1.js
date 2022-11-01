/* Change the text of all paragraphs and headers with javascript
Note:The html must not be changed */

let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

let headers1 = document.getElementsByTagName("h1");
console.log(headers1);

let headers3 = document.getElementsByTagName("h3");
console.log(headers3);

paragraphs[0].innerText = "Text change 1.";
paragraphs[1].innerText = "Text Change 2.";

headers1[0].innerText = "New header 1.";
headers1[1].innerText = "New header 1.";

headers3[0].innerText = "New header 3.";
