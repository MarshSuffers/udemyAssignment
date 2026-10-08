interface iAccount {
  owner: string;
  amount: number;
  interest?: number;

  deposit(): void;
}

interface iCheckingAccount extends iAccount {
  withdraw(): void;
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

  deposit(): void {}
}

class checkingAccount implements iCheckingAccount {
  constructor(
    public owner: string,
    public amount: number,
  ) {
    this.owner = owner;
    this.amount = amount;
  }

  deposit(): void {}
  withdraw(): void {}
}

new checkingAccount("Max", 100 );

new savingsAccount("Max", 200, 5);
