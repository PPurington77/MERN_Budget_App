num1 = 42  #Int Numbers
num2 = 2.3 #Float Numbers
boolean = True #Boolean
string = 'Hello World' #Strings
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives'] #List 
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} #Dictionary
fruit = ('blueberry', 'strawberry', 'banana') #Tuples
print(type(fruit)) #type check
print(pizza_toppings[1]) #access value
pizza_toppings.append('Mushrooms') #add value
print(person['name']) #access value
person['name'] = 'George' #change value
person['eye_color'] = 'blue'#v
print(fruit[2]) #access value

if num1 > 45:
    print("It's greater") #conditional
else:
    print("It's lower") 

if len(string) < 5:
    print("It's a short word!") #conditional
elif len(string) > 15:
    print("It's a long word!")
else:
    print("Just right!")

for x in range(5): #for loop
    print(x)
for x in range(2,5):
    print(x)
for x in range(2,10,3):
    print(x)
x = 0
while(x < 5):
    print(x)
    x += 1

pizza_toppings.pop() #delete value
pizza_toppings.pop(1) #delete value

print(person) #log statement
person.pop('eye_color') #delete value
print(person) #log statement

for topping in pizza_toppings: #for loop, After 1st if statement
    if topping == 'Pepperoni':
        continue
    print('After 1st if statement')
    if topping == 'Olives':
        break

def print_hello_ten_times(): #function Hello*10
    for num in range(10):
        print('Hello')

print_hello_ten_times()

def print_hello_x_times(x): #function Hello*4
    for num in range(x):
        print('Hello')

print_hello_x_times(4)

def print_hello_x_or_ten_times(x = 10): #function Hello*14
    for num in range(x):
        print('Hello')

print_hello_x_or_ten_times()
print_hello_x_or_ten_times(4)


"""
Bonus section
"""

# print(num3)
# num3 = 72
# fruit[0] = 'cranberry'
# print(person['favorite_team'])
# print(pizza_toppings[7])
# print(boolean)
# fruit.append('raspberry')
# fruit.pop(1)