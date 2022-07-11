# 1. Update Values in Dictionaries and Lists
# Change the value 10 in x to 15. Once you're done, x should now be [ [5,2,3], [15,8,9] ].
# Change the last_name of the first student from 'Jordan' to 'Bryant'
# In the sports_directory, change 'Messi' to 'Andres'
# Change the value 20 in z to 30

x = [ [5,2,3], [10,8,9] ] 
students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

x[1][0] = 15
# print(x)

students[0]["last_name"] = "Bryant"
# print(students)

sports_directory["soccer"][0] = "Andres"
# print(sports_directory)

z[0]["y"] = 30
# print(z)

# 2. Iterate Through a List of Dictionaries
# should output: (it's okay if each key-value pair ends up on 2 separate lines;
# bonus to get them to appear exactly as below!)
# first_name - Michael, last_name - Jordan
# first_name - John, last_name - Rosales
# first_name - Mark, last_name - Guillen
# first_name - KB, last_name - Tonel
students = [
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]

def iterateDictionary(arr):
#     for i in range(0, len(arr)):
#         for key, val in arr[i].items():
#             print(key,"-", val)
    for i in range(0, len(arr)):
        print("first_name", "-", arr[i]["first_name"],",","last_name","-",arr[i]["last_name"])

iterateDictionary(students) 

# 3.Get Values From a List of Dictionaries
def iterateDictionary2(key_name, arr):
    for i in range(0, len(arr)):
        print(arr[i][key_name])

iterateDictionary2('first_name', students)
iterateDictionary2('last_name', students)

# 4.Iterate Through a Dictionary with List Values
dojo = {
        'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
        'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}

def printInfo(some_dict):
    for key, val in some_dict.items():
        print(len(some_dict.get(key)),key.upper())
        for i in val:
            print(i)
        
printInfo(dojo)

