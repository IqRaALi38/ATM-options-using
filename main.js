#! /usr/bin/env node 
import inquirer from "inquirer";
let myBalance = 10000;
;
let myPin = 1234;
let code = await inquirer.prompt([
    {
        name: "pin",
        message: "enter pin",
        type: "number",
    }
]);
if (code.pin == myPin) {
    console.log("Access Granted");
    let operations = await inquirer.prompt([
        {
            name: "operation",
            message: "set operation",
            type: "list",
            choices: ["withdraw", "checkbalance", "fastCash"],
        }
    ]);
    if (operations.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter amount",
                type: "number",
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("you have insufficient balance");
        }
        else if (myBalance -= amountAns.amount) {
            console.log(`your remaining amount is: ${myBalance}`);
        }
    }
    ;
    if (operations.operation === "checkbalance") {
        console.log("your balance is " + myBalance);
    }
    if (operations.operation === "fastCash") {
        let cash = await inquirer.prompt([
            {
                name: "options",
                message: "select any amount",
                type: "list",
                choices: ["1000", "3000", "6000", "8000"],
            }
        ]);
        if (myBalance -= cash.options) {
            console.log("your remaining amount is " + myBalance);
        }
    }
}
else {
    console.log("you entered wrong pin");
}
