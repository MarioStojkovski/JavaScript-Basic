/* Write a JavaScript program that will calculate the price of 30 Phones,  
where the price of one phone is $119.95 and the tax rate is 5%.*/

let phones = 30;
let phonePrice = 119.95;
let taxRateProcentage = 5;
let taxRate = 1 + taxRateProcentage / 100;
let totalPrice = phones * phonePrice * taxRate;

console.log("Number of phones: ", phones);
console.log("The price of one phone: ", phonePrice);
console.log("Tax rate: ", taxRateProcentage, "%");
console.log("The total price is: ", totalPrice);
