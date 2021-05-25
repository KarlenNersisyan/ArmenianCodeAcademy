class Account {
  constructor(id, name, balance) {
    this._id = id;
    this._name = name;
    this._balance = balance;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get balance() {
    return this._balance;
  }

  set name(value) {
    if (typeof value !== "string") {
      throw new Error("This horse does not exist!");
    }
    this._name = value;
  }

  set balance(value) {
    if (value < 0) {
      throw new Error("Top up your account!");
    }
    this._balance = value;
  }

  credit(amount) {
    return (this._balance += amount);
  }

  debit(amount) {
    if (this._balance > amount) {
      return this._balance - amount;
    } else {
      return `${amount - this._balance} -> "Amount exceeded balance.!"`;
    }
  }

  transferTo(anotherAccount, amount) {
    if (this.balance - amount < 0) {
      return "Amount exceeded balance";
    }
    anotherAccount.balance += amount;
    this.balance -= amount;
    return this.balance;
  }

  static identifyAccounts(accountFirst, accountSecond) {
    if (accountFirst === accountSecond) {
      return true;
    } else {
      return false;
    }
  }

  //   static identifyAccounts(accountFirst, accountSecond) {
  //     if (JSON.stringify(accountFirst) === JSON.stringify(accountSecond)) {
  //       return `true -> "Accounts are the same"`;
  //     }
  //     return `false -> "Accounts are different"`;
  //   }

  toString() {
    return `${this._name} account's account balance is $${this._balance}.`;
  }
}
let account1 = new Account(0, "Saving account", 2000);
let account2 = new Account(1, "Card account", 1000);

console.log(account1); // Account { id: 0, _name: 'Saving account',_balance: 2000 }
console.log(account2); // Account { id: 1, _name: 'Card account', _balance:1000 }
console.log(account1.balance); // 2000
console.log(account1.credit(400)); // 2400
console.log(account1.balance); // 2400
console.log(account1.debit(9000)); //6600 -> "Amount exceeded balance.!"
console.log(account1.transferTo(account2, 1000)); // 1400
console.log(account1.balance); // 1400
console.log(account2.balance); // 2000

let anotherAccount = account1;

console.log(Account.identifyAccounts(account1, anotherAccount)); // true
console.log(Account.identifyAccounts(account1, account2)); // false
console.log(account1.toString()); // Saving account's account balance is $1400.
