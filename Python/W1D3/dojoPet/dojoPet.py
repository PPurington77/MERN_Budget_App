from dojoPet_pet import Pet
from dojoPet_pet import Secondpet

# sleep() - increases the pets energy by 25
# eat() - increases the pet's energy by 5 & health by 10
# play() - increases the pet's health by 5
# noise() - prints out the pet's sound
# class Pet:
#     def __init__(self, name , type, tricks, health = 50, energy = 50):
#         self.name = name
#         self.type = type
#         self.tricks = tricks
#         self.health = health
#         self.energy = energy
    
#     def sleep(self):
#         self.energy += 25
#         return self
#     def eat(self):
#         self.energy += 5
#         self.health += 10
#         return self
#     def play(self):
#         self.health += 5
#         return self
#     def noise(self):
#         print("bark bark!!")
#         return self
#     def show_info(self):
#         print(f"health:{self.health}, energy:{self.energy}")
#         return self

# walk() - walks the ninja's pet invoking the pet play() method
# feed() - feeds the ninja's pet invoking the pet eat() method
# bathe() - cleans the ninja's pet invoking the pet noise() method

class Ninja:
    def __init__(self, first_name, last_name, treats, pet_food, pet):
        self.first_name = first_name
        self.last_name = last_name
        self.treats = treats
        self.pet_food = pet_food
        self.pet = pet
    def walk(self):
        self.pet.play()
        return self
    def feed(self):
        self.pet.eat()
        return self
    def bathe(self):
        self.pet.noise()
        return self
    def make_jump(self):
        self.pet.jump()
        return self

Yuzu = Pet("Yuzu","dog","sit",30,50)
Lulu = Secondpet("Lulu","dog","catch",30,30,"shiba")
ninja1 = Ninja("Sam","Guan","cookies", "loyal",Yuzu)
ninja2 = Ninja("Lily","Yang","milkbone","cook",Lulu)

ninja1.walk().feed().bathe().feed()
Yuzu.show_info()

ninja2.make_jump().feed().feed()
Lulu.show_info()
