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
  switch (ChineseZodiac) {
    case 0:
      alert("Your Chinese Zodiac is Rat");
      break;
    case 1:
      alert("your Chinese Zodiac is Ox");
      break;
    case 2:
      alert("your Chinese Zodiac is Tiger");
      break;
    case 3:
      alert("your Chinese Zodiac is Rabbit");
      break;
    case 4:
      alert("your Chinese Zodiac is Dragon");
      break;
    case 5:
      alert("your Chinese Zodiac is Snake");
      break;
    case 6:
      alert("your Chinese Zodiac is Horse");
      break;
    case 7:
      alert("your Chinese Zodiac is Goat");
      break;
    case 8:
      alert("Your Chinese Zodiac is Monkey");
      break;
    case 9:
      alert("Your Chinese Zodiac is Rooster");
      break;
    case 10:
      alert("Your Chinese Zodiac is Dog");
      break;
    case 11:
      alert("Your Chinese Zodiac is Pig");
      break;
  }
} else {
  alert("Please imput a valid year, from 1900 to present!");
}
