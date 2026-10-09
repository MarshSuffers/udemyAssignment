interface iAccount {
  owner: string;
  amount: number;
  interest?: number;

  deposit(amount: number): void;
}

interface iCheckingAccount extends iAccount {
  withdraw(amount: number): void;
}

class savingsAccount implements iAccount {
  constructor(
    public owner: string,
    public amount: number,
    public interest: number,
  ) {
    this.owner = owner;
    this.amount = amount;
    this.interest = interest;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      console.log("Deposit must be greater than zero.");
      return;
    }

    this.amount += amount;
    console.log(`Deposited $${amount}. New balance: $${this.amount}`);
  }
}

class checkingAccount implements iCheckingAccount {
  constructor(
    public owner: string,
    public amount: number,
  ) {
    this.owner = owner;
    this.amount = amount;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      console.log("Deposit must be greater than zero.");
      return;
    }

    this.amount += amount;
    console.log(`Deposited $${amount}. New balance: $${this.amount}`);
  }
  withdraw(amount: number): void {
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
