# sleep() - increases the pets energy by 25
# eat() - increases the pet's energy by 5 & health by 10
# play() - increases the pet's health by 5
# noise() - prints out the pet's sound
class Pet:
    def __init__(self, name , type, tricks, health, energy):
        self.name = name
        self.type = type
        self.tricks = tricks
        self.health = health
        self.energy = energy
    
    def sleep(self):
        self.energy += 25
        return self
    def eat(self):
        self.energy += 5
        self.health += 10
        return self
    def play(self):
        self.health += 5
        return self
    def noise(self):
        print("bark bark!!")
        return self
    def show_info(self):
        print(f"{self.name} has health:{self.health}, energy:{self.energy}")
        return self

class Secondpet(Pet):
    def __init__(self, name, type, tricks,health, energy, breed):
        super().__init__(name, type, tricks, health, energy)
        self.breed = breed
    def jump(self):
        self.energy -= 10
        self.health += 5