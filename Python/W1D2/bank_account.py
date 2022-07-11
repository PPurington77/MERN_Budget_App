class BankAccount:
    all_accounts = []
    bank_name = "Dojo bank"

    def __init__(self, int_rate, balance = 0): 
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.all_accounts.append(self)   #every time it runs, add into all accounts array
    def deposit(self, amount):
        self.balance += amount
        return self
    def withdraw(self, amount):
        self.balance -= amount
        return self
    def display_account_info(self):
        print(f"Balance: ${self.balance}")
        return self
    def yield_interest(self):
        if self.balance < 0:
            return
        else:
            self.balance += self.balance*self.int_rate
            return self

    @classmethod
    def account_info(cls):
        for i in cls.all_accounts:
            print(i.balance, i.int_rate)
    
    @classmethod
    def change_name(cls,name):
        cls.bank_name = name
    
    @classmethod
    def all_balances(cls):
        sum = 0
        for account in cls.all_accounts:
            sum += account.balance
        return sum

account1 = BankAccount(0.01, 20)
account2 = BankAccount(0.01, 30)

account1.deposit(10).deposit(10).deposit(10).withdraw(20).yield_interest().display_account_info()

account2.deposit(100).deposit(80).withdraw(10).withdraw(10).withdraw(10).withdraw(10).yield_interest().display_account_info()

BankAccount.account_info()    #call the function

print(BankAccount.all_balances())

