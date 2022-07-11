class User:
    def __init__(self, first_name, last_name, email, age):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = False
        self.gold_card_points = 0
        
    def display_info(self):
        print(f"first name:{self.first_name}")
        print(f"last name: {self.last_name}")
        print(f"email: {self.email}")
        print(f"age: {self.age}")
        print(f"is reward member: {self.is_rewards_member}")
        print(f"gold card points: {self.gold_card_points}")
    
    def enroll(self):
        self.is_rewards_member = True
        print("if it's rewards member = " + str(self.is_rewards_member))
        self.gold_card_points = 200
        print("gold card points = " + str(self.gold_card_points))
        if self.is_rewards_member:  
            print("User already a member")
            return False

    def spend_points(self, amount):
        if amount > self.gold_card_points:
            print("points not enough")
        else:
            self.gold_card_points-= amount
            # print(f"balance amount:{self.gold_card_points}")
        return self

    def make_deposit(self,num):
        self.gold_card_points += num
        # print(f"balance amount:{self.gold_card_points}")
        return self
    
    def show_bal(self):
        print(f"balance amount:{self.gold_card_points}")
        return self


user1 = User("Yuzu", "Guan", "yuzu@dojo.com", 1)
user2 = User("Lulu", "Yang", "lulu@dojo.com", 9)
user3 = User("Samuel", "Guan", "samuel@doj.com", 28)

# user1.display_info()
user1.enroll()
user1.spend_points(50).make_deposit(80).show_bal()
# user1.make_deposit(80)
# user1.show_bal()

# user2.display_info()
# user2.enroll()
# user2.spend_points(80)

# user3.spend_points(240)