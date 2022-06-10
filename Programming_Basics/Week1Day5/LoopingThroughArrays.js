// Code Challenge: Looping Through Arrays

// #1
var arr1 = [8, 6, 7, 5, 3, 0, 9];
for(i = 0; i < arr1.length; i++){
    console.log(arr1[i])
}

// #2
var arr2 = [4, 7, 13, 13, 19, 37, -2];
var sum = (arr2[0]+arr2[1]+arr2[2]+arr2[3]+arr2[4]+arr2[5]+arr2[6])
console.log("arr2 sum = " + sum)
for(i = 0; i < arr2.length; i++){
    console.log("The var i is " + arr2[i])
    console.log("The value of index of i in arr2 is " + i)
}

// #3
var arr3 = [6, 2, 12, 14, -24, 5, 0];
for(var i = 0; i < arr3.length; i++){
    if(arr3[i]>5){
        console.log(arr3[i])
    }
}

// Bonus
var arr3 = [6, 2, 12, 14, -24, 5, 0];
for(var i = 0; i < arr3.length; i++){
    if(arr3[i]>5){
        console.log(arr3[i])
    }
    else{
        
    }
}
