//Abstraction and encapsulation

class BankAccount {
    #accountNumber;
    // #balance;
    #accountHolderName;
    constructor(accountNumber, balance, accountHolderName) {
        this.#accountNumber = accountNumber;
        this.balance = balance;         
        this.#accountHolderName = accountHolderName;
    }
}
class CheckingAccount extends BankAccount {
    constructor(accountNumber, balance, accountHolderName, amount){
        super(accountNumber, balance, accountHolderName);
        this.amount = amount;
    }
    deposit(){
        this.balance += this.amount;
        return `Balance after deposit: Rs.${this.balance}`
    }
    withdraw(){
        this.balance -= this.amount;
        return `Balance after withdraw: Rs.${this.balance}`
    }
    getBalance(){
        // console.log(`${this.balance}`);
        return `Balance: Rs.${this.balance}`
    }
}

class SavingsAccount extends BankAccount {
    constructor(accountNumber, balance, accountHolderName, amount){
        super(accountNumber, balance, accountHolderName);
        this.amount = amount;
    }
    deposit(){
        this.balance += this.amount;
        return `Balance after deposit: Rs.${this.balance}`
    }
    withdraw(){
        if((this.balance - this.amount) <= 0){
            return `Withdraw Denied! Since balance drops below zero if withdrawn Rs.${this.amount}`;
        }else{
            this.balance -= this.amount;
            return `Balance after withdraw: Rs.${this.balance}`
        }
    }
    getBalance(){
        // console.log(`${this.balance}`);
        return `Balance: Rs.${this.balance}`
    }
}

const checkingAccount = new CheckingAccount(1234, 5000, "Lohith");
console.log( checkingAccount.deposit(2000));
console.log( checkingAccount.withdraw(3000));
console.log( checkingAccount.getBalance());

const savingsAccount = new SavingsAccount(5678, 1000, "Kunal");
console.log(savingsAccount.deposit());
console.log(savingsAccount.withdraw());
console.log(savingsAccount.getBalance());
