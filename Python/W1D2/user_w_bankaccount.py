class BankAccount:
    all_accounts = []
    # bank_name = "Dojo bank"

    def __init__(self, int_rate, balance): 
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
    
    # @classmethod
    # def change_name(cls,name):
    #     cls.bank_name = name
    
    @classmethod
    def all_balances(cls):
        sum = 0
        for account in cls.all_accounts:
            sum += account.balance
        return sum

# account1 = BankAccount(0.01, 20)
# account2 = BankAccount(0.01, 30)

##**************************************************************************

class User:
    def __init__(self, first_name, last_name, email, age):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        # self.is_rewards_member = False
        # self.gold_card_points = 0
        self.account = BankAccount(int_rate=0.02, balance=50)
        # {"boa":BankAccount(int_rate=0.02, balance=0),"citi": BankAccount(int_rate=0.05,balance=50)}
        
    # def display_info(self):
    #     print(f"first name:{self.first_name}")
    #     print(f"last name: {self.last_name}")
    #     print(f"email: {self.email}")
    #     print(f"age: {self.age}")
    #     print(f"is reward member: {self.is_rewards_member}")
    #     print(f"gold card points: {self.gold_card_points}")
    
    # def enroll(self):
    #     self.is_rewards_member = True
    #     print("if it's rewards member = " + str(self.is_rewards_member))
    #     self.gold_card_points = 200
    #     print("gold card points = " + str(self.gold_card_points))
    #     if self.is_rewards_member:  
    #         print("User already a member")
    #         return False

    # def spend_points(self, amount):
    #     if amount > self.gold_card_points:
    #         print("points not enough")
    #     else:
    #         self.gold_card_points-= amount
    #         print(f"balance amount:{self.gold_card_points}")
    #     return self

    # def deposit_points(self,num):
    #     self.gold_card_points += num
    #     print(f"balance amount:{self.gold_card_points}")
    #     return self
    
    # def show_bal(self):
    #     print(f"balance amount:{self.gold_card_points}")
    #     return self

    # def make_deposit(self,bank_name,amount):
    #     self.account[bank_name].deposit(amount)
    #     return self

    # def make_withdraw(self,bank_name, amount):
    #     self.account[bank_name].withdraw(amount)
    #     return self

    # def display_user_balance(self,bank_name):
    #     print(self.account[bank_name].display_account_info())
    #     return self


    def make_deposit(self,amount):
        self.account.deposit(amount)
        return self

    def make_withdraw(self, amount):
        self.account.withdraw(amount)
        return self

    def display_user_balance(self):
        print(self.account.display_account_info())
        return self

    def transfer(self,amount,other_user):
        self.account.withdraw(amount)
        other_user.account.deposit(amount)


user1 = User("Yuzu", "Guan", "yuzu@dojo.com", 1)
user2 = User("Lulu", "Yang", "lulu@dojo.com", 9)



# user1.make_deposit("boa",80).make_withdraw("boa",30).display_user_balance("boa")
# user2.make_deposit("citi",50).display_user_balance("citi")

user1.transfer(20,user2)

user1.display_user_balance()
user2.display_user_balance()
