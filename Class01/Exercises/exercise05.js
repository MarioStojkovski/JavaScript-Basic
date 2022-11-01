/* Student constructor function
Create a constructor function for Student objects with:
Properties:
firstName
lastName
birthYear
academy
grades - array of numbers
Methods:
getAge() - returns age of student
getInfo() - returns "This is student firstName* lastName* from the academy academy*!"
getGradesAverage() - returns the average of the student grades
Create an array with 3 students */

function Student(firstName, lastName, birthYear, academy, grades) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.academy = academy;
  this.grades = grades;

  this.getAge = function () {
    let studentAge = new Date().getFullYear() - birthYear;
    return studentAge;
  };

  this.getInfo = function () {
    return `This student is ${firstName} ${lastName} from the academy ${academy}`;
  };

  this.getAverageGrades = function () {
    let sum = 0;
    for (grate of grades) {
      sum += grades;
    }
    let average = sum / grades.length;
    return average;
  };
}

let studentOne = new Student("Mario", "Stojkovski", 1999, "SEDC", [10, 10, 10]);
let studentTwo = new Student("Marija", "Martinoska", 1989, "Semos", [6, 10, 8]);
let studentThree = new Student("Zoran", "Zoreski", 2001, "SEDC", [9, 10, 5]);

let studentArray = [studentOne, studentTwo, studentThree];
console.log(studentArray);
