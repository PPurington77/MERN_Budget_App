var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];

function count(arr){
    for(i=0;i<arr.length;i++){
        if(arr[i]>0){
            countPositives += 1
        }
    }
}
count(numbers)
console.log("there are " + countPositives + " positive values");
