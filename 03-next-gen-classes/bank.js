"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class savingsAccount {
    constructor(owner, amount, interest) {
        this.owner = owner;
        this.amount = amount;
        this.interest = interest;
        this.owner = owner;
        this.amount = amount;
        this.interest = interest;
    }
    deposit(amount) {
        if (amount <= 0) {
            console.log("Deposit must be greater than zero.");
            return;
        }
        this.amount += amount;
        console.log(`Deposited $${amount}. New balance: $${this.amount}`);
    }
}
class checkingAccount {
    constructor(owner, amount) {
        this.owner = owner;
        this.amount = amount;
        this.owner = owner;
        this.amount = amount;
    }
    deposit(amount) {
        if (amount <= 0) {
            console.log("Deposit must be greater than zero.");
            return;
        }
        this.amount += amount;
        console.log(`Deposited $${amount}. New balance: $${this.amount}`);
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Withdrawal must be greater than zero.");
            return;
        }
        if (amount > this.amount) {
            console.log("Insufficient funds!");
            return;
        }
        this.amount -= amount;
        console.log(`Withdrew $${amount}. New balance: $${this.amount}`);
    }
}
const checking = new checkingAccount("Max", 100);
const savings = new savingsAccount("Max", 200, 5);
console.log(checking);
console.log(savings);
checking.deposit(50);
checking.withdraw(100);
savings.deposit(300);
console.log(checking);
console.log(savings);
//# sourceMappingURL=bank.js.map