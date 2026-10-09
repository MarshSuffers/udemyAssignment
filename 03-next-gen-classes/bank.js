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
    deposit() { }
}
class checkingAccount {
    constructor(owner, amount) {
        this.owner = owner;
        this.amount = amount;
        this.owner = owner;
        this.amount = amount;
    }
    deposit() { }
    withdraw() { }
}
new checkingAccount("Max", 100);
new savingsAccount("Max", 200, 5);
//# sourceMappingURL=bank.js.map