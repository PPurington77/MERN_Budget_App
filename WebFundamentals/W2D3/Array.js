//1.Always Hungry
function alwaysHungry(arr) {
    for(var i=0; i<arr.length; i++){
        var x = 0
        if(arr[i] == "food"){
            console.log("yummy")
            x ++
        }
    }
    if(x==0){
        console.log("Iam hungry")
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

//2.High Pass Filter
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i=0; i<arr.length; i++){
        if(arr[i]>cutoff){
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}

var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

//3.Better than average
function betterThanAverage(arr) {
    var sum = 0;
    for(var i=0; i<arr.length; i++){
        sum = sum + arr[i]
    }
    var ave = sum/arr.length
    var count = 0
    for(var i=0; i<arr.length; i++){
        if(arr[i]>ave){
            count++
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

//4.Array Reverse
function reverse(arr) {
    arr2 = []
    for(var i=arr.length-1; i>=0; i--){
        arr2.push(arr[i])
    }
    return arr2;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

// -----------------------------------------------------------------------
arr = ["a", "b", "c", "d", "e"]
let reversed = arr.reverse()
console.log(reversed)

//5.Fibonacci Array
function fibonacciArray(n) {
    var fibArr = [0, 1];  // the [0, 1] are the starting values of the array to calculate the rest from
    for(var i=0; i<n-2; i++){
        var total = fibArr[i] + fibArr[i+1]
        fibArr.push(total)
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
