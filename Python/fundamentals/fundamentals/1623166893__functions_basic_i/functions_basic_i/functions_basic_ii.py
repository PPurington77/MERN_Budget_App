# Countdown - Create a function that accepts a number as an input. Return a new list that counts down by one, from the number (as the 0th element) down to 0 (as the last element).
# Example: countdown(5) should return [5,4,3,2,1,0]

def countdown(start):
    newlist = []
    for i in range(start, -1, -1):
        newlist.append(i)
    return newlist
print(countdown(10))


# Print and Return - Create a function that will receive a list with two numbers. Print the first value and return the second.
# Example: print_and_return([1,2]) should print 1 and return 2

def print_and_return(arr):
    print(arr[0])
    return arr[1]
print(print_and_return([3,5]))

# First Plus Length - Create a function that accepts a list and returns the sum of the first value in the list plus the list's length.
# Example: first_plus_length([1,2,3,4,5]) should return 6 (first value: 1 + length: 5)

def first_plus_length(arr):
    value = arr[0] + len(arr)
    return value
print(first_plus_length([3,5,7]))

# Values Greater than Second - Write a function that accepts a list and creates a new list containing only the values from the original list that are greater than its 2nd value. Print how many values this is and then return the new list. If the list has less than 2 elements, have the function return False
# Example: values_greater_than_second([5,2,3,2,1,4]) should print 3 and return [5,3,4]
# Example: values_greater_than_second([3]) should return False

def values_greater_than_second(arr):
    newarr = []
    count = 0
    if len(arr) > 2:
        for i in range(0,len(arr)):
            if arr[i] > arr[1]:
                newarr.append(arr[i])
                count += 1
        print(count)        #also can do print(len(newarr))
        return newarr
    else:
        return False
print(values_greater_than_second([7,5,8,2,1,6]))
print(values_greater_than_second([5]))


# This Length, That Value - Write a function that accepts two integers as parameters: size and value. The function should create and return a list whose length is equal to the given size, and whose values are all the given value.
# Example: length_and_value(4,7) should return [7,7,7,7]
# Example: length_and_value(6,2) should return [2,2,2,2,2,2]
    
def length_and_value(num1, num2):  #can name as size, value
    newlist = []
    for i in range(0, num1):
        newlist.append(num2)
    return newlist

print(length_and_value(4,7))
print(length_and_value(2,4))