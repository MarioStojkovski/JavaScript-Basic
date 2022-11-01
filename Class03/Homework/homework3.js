/*Write a javascript function for an ATM:
The ATM should give cash
Should return "Not enough money" if you request more money
Should return the ammount withdrawn and money left on the account if you have enough
Note: Hardcode your account money in the program
Bonus: Make it work with prompt()!*/

function atm(requestMoney, accountMoney) {
  if (Number.isNaN(requestMoney) || requestMoney <= 0) {
    return "Please enter a valid ammount!";
  } else if (requestMoney > accountMoney) {
    return `Not enugh money.You have ${accountMoney}$ on the account.`;
  } else {
    let ammountLeft = accountMoney - requestMoney;
    return `Ammount withdrawn: ${requestMoney}$ \nAmmount left: ${ammountLeft}$`;
  }
}

let accountMoney = 10000;
let requestMoney = parseInt(prompt("Enter the ammount you want to withdraw:"));

let result = atm(requestMoney, accountMoney);
console.log(result);
alert(result);
