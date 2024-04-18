#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, // Base Currency
    GBP: 346.96,
    PKR: 280,
    EUR: 295,
    SAR: 74
};
let userInput = await inquirer.prompt([
    {
        name: "fromCurrency",
        message: "Enter Your Local Currency",
        type: "list",
        choices: ["USD", "GBP", "PKR", "EUR", "SAR"]
    },
    {
        name: "amount",
        message: "Please Enter Your Amount",
        type: "number",
    },
    {
        name: "ToCurrency",
        type: "list",
        choices: ["USD", "GBP", "PKR", "EUR", "SAR"],
        message: "Enter The Currency You Want To Convert In ",
    },
]);
let fromAmount = currency[userInput.fromCurrency];
let ToAmount = currency[userInput.ToCurrency];
let amount = userInput.amount;
// let baseAmount : number = amount / fromAmount ;
let convertedAmount = (amount / fromAmount) * ToAmount;
// console.log(baseAmount);
console.log(convertedAmount);
