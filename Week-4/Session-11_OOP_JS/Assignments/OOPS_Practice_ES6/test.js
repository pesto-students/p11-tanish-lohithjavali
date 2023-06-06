class BankAccount {
  #accountNumber;
  #balance;
  #accountHolderName;

  constructor(accountNumber, balance, accountHolderName) {
    this.#accountNumber = accountNumber;
    this.#balance = balance;
    this.#accountHolderName = accountHolderName;
  }

  getBalance() {
    return this.#balance;
  }
}

class CheckingAccount extends BankAccount {
  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    this.#balance -= amount;
  }
}

class SavingsAccount extends BankAccount {
  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (this.#balance - amount >= 0) {
      this.#balance -= amount;
    } else {
      console.log("Insufficient funds. Withdrawal failed.");
    }
  }
}

// Example usage:

const checkingAccount = new CheckingAccount("123456789", 1000, "John Doe");
checkingAccount.deposit(500);
console.log(checkingAccount.getBalance()); // Output: 1500
checkingAccount.withdraw(200);
console.log(checkingAccount.getBalance()); // Output: 1300

const savingsAccount = new SavingsAccount("987654321", 2000, "Jane Smith");
savingsAccount.deposit(800);
console.log(savingsAccount.getBalance()); // Output: 2800
savingsAccount.withdraw(3000); // Output: Insufficient funds. Withdrawal failed.
console.log(savingsAccount.getBalance()); // Output: 2800
