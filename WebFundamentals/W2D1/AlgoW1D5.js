// var fruit1 = "apples";
// var fruit2 = "oranges";
    
// fruit2 = fruit1;
    
// console.log(fruit2 + " and " + fruit1);

var fruit1 = "apples";
var fruit2 = "oranges";
    
var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;
    
console.log(fruit2 + " and " + fruit1);

var start = 0;
var end = 12;
    
while(start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}

//reverse(arr) ----------------------------------- 1

function reverse(arr){
    var result = []
    for(i=arr.length-1; i>=0; i-=1){
        result.push(arr[i]);
    }
    console.log(result)
}

reverse(["a", "b", "c", "d", "e"])


//reverse(arr) ----------------------------------- 2

function reverse(arr){
    var result = []
    for(i=arr.length-1; i>=0; i-=1){
        result.push(arr[i]);
    }
    return result;
}

answer = reverse(["a", "b", "c", "d", "e"])
console.log(answer)

//reverse(arr) ----------------------------------- 3

function reverse(arr){
    let start = 0
    let end = arr.length-1
    while(start<end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;
    }
    return arr
}

answer = reverse(["a", "b", "c", "d", "e"])
console.log(answer)

//reverse(arr) ----------------------------------- 4

let arr = ["a", "b", "c", "d", "e"]
let answer = arr.reverse()
console.log(answer)
