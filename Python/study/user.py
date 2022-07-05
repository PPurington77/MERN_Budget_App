class User:
    def __init__(self, first_name, last_name, email, age):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = False
        self.gold_card_points = 0
        
    def display_info(self):
        print(self.first_name)
        print(self.last_name)
        print(self.email)
        print(self.age)
        print(self.is_rewards_member)
        print(self.gold_card_points)
    
    def enroll(self):
        self.is_rewards_member = True
        print("if it's rewards member = " + str(self.is_rewards_member))
        self.gold_card_points = 200
        print("gold card points = " + str(self.gold_card_points))
        if self.is_rewards_member == True:  
            print("User already a member")
            return False
        else: return True

    def spend_points(self, amount):
        if amount > self.gold_card_points:
            print("points not enough")
        else:
            self.gold_card_points-= amount
            print(self.gold_card_points)

user1 = User("Yuzu", "Guan", "yuzu@dojo.com", 1)
user2 = User("Lulu", "Yang", "lulu@dojo.com", 9)
user3 = User("Samuel", "Guan", "samuel@doj.com", 28)

user1.display_info()
user1.enroll()
user1.spend_points(50)

user2.display_info()
user2.enroll()
user2.spend_points (80)

user3.spend_points(240)