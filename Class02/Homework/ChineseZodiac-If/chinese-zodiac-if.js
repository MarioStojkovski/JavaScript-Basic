/* Write javascript code that will get an input from the user and calculate
which Chinese Zodiac a given year is in Formula for Chinese Zodiac caluclation: (year - 4) % 12.
Possible values:
0 - Rat
1 - Ox
2 - Tiger
3 - Rabbit
4 - Dragon
5 - Snake
6 - Horse
7 - Goat
8 - Monkey
9 - Rooster
10 - Dog
11 - Pig */

let yearOfBirth = prompt(
  "Enter a year of birth to scalculate your Chinese Zodiac(from 1900 to present): "
);
console.log("Year of birth: ", yearOfBirth);

let parsedYearOfBirth = parseInt(yearOfBirth);

let ChineseZodiac = (parsedYearOfBirth - 4) % 12;

if (
  !Number.isNaN(parsedYearOfBirth) &&
  parsedYearOfBirth >= 1900 &&
  parsedYearOfBirth <= 2022
) {
  if (ChineseZodiac === 0) {
    alert("Your Chinese Zodiac is Rat");
  } else if (ChineseZodiac === 1) {
    alert("your Chinese Zodiac is Ox");
  } else if (ChineseZodiac === 2) {
    alert("your Chinese Zodiac is Tiger");
  } else if (ChineseZodiac === 3) {
    alert("your Chinese Zodiac is Rabbit");
  } else if (ChineseZodiac === 4) {
    alert("your Chinese Zodiac is Dragon");
  } else if (ChineseZodiac === 5) {
    alert("your Chinese Zodiac is Snake");
  } else if (ChineseZodiac === 6) {
    alert("your Chinese Zodiac is Horse");
  } else if (ChineseZodiac === 7) {
    alert("your Chinese Zodiac is Goat");
  } else if (ChineseZodiac === 8) {
    alert("Your Chinese Zodiac is Monkey");
  } else if (ChineseZodiac === 9) {
    alert("Your Chinese Zodiac is Rooster");
  } else if (ChineseZodiac === 10) {
    alert("Your Chinese Zodiac is Dog");
  } else if (ChineseZodiac == 11) {
    alert("Your Chinese Zodiac is Pig");
  }
} else {
  alert("Please imput a valid year, from 1900 to present!");
}
