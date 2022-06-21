//1.Print 1-255
for(var i = 1; i <= 255; i++){
    console.log(i)
}

//2.Print Odds 1-255
for(var i=0; i<=255; i++){
    if(i % 2 == 1){
        console.log(i)
    }
}

//3.Print Ints and Sum 0-255
var sum = 0
for(var i=0; i<=255; i++){
    console.log(i)
    sum = sum += i
    console.log(sum)
    //console.log(i, sum) can print two valus together
}

//4.Iterate and Print Array
var arr4 = [1,3,5,7,9]
function PrintArrayVals(arr){
    for(var i=0; i<arr.length; i++){
        console.log(arr[i])
    }
}
PrintArrayVals(arr4)

//5.Find and Print Max
var arr5 = [2,8,10,3,17]
var max = arr5[0]
for(var i=0; i<arr5.length;i++){
    if(arr5[i]>max){
        max = arr5[i]
    }
}
console.log(max)
//**************************************//
var arr5 = [2,8,10,3,17]
function findMax(arr){
    var max = arr[0]
    for(var i=0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    console.log(max)
}
findMax(arr5)

//6. Get and Print Average
var arr6 = [5,10,15,20]
var total = 0
for(i=0; i<arr6.length; i++){
    total += arr6[i]
}
var PrintAverageOfArray = total/arr6.length
console.log(PrintAverageOfArray)

//**************************************//
var arr6 = [5,10,15,20]
function ava(arr){
    var size = arr.length
    var total = 0
    for(i=0; i<arr.length; i++){
        total += arr[i]
    }
    console.log(total/size)
}
ava(arr6)

//7.Array with Odds
var arr7 = []
for(var i=0; i<=255; i++){
    if(i % 2 == 1){
        arr7.push(i)
    }
}
console.log(arr7)

//**************************************//
function arraywithOdds(){
    var arr7 = []
    for(var i=0; i<=255; i++){
        if(i%2 == 1){
            arr7.push(i)
        }
    }
    // console.log(arr7);
    return arr7;
}
arraywithOdds()

//8.Square the Values
var arr8 = [1,3,4,5]
var arr8rt = []
function square(){
    for(var i=0; i<arr8.length; i++){
        arr8rt.push(arr8[i]*arr8[i])
    }
    return arr8rt;
}
var ans = square()
console.log(ans)
//**************************************//
var arr8 = [1,3,4,5]
function sqValue(arr){
    for(var i=0; i<arr.length; i++){
        // console.log(arr[i]**2);
        // console.log(arr[i]*arr[i]);
        // console.log(math.pow(arr[i],2));
        var ans8= arr[i]**2;
        arr[i] = ans8;
    }
    // console.log(arr);
    return arr;
}
sqValue(arr8)

//9.Greater than Y
var arr9 = [5,8,10,6,4]
function GreaterThanY (arr9,y){
    for(i=0; i<arr9.length; i++){
        if(arr9[i] > y){
            console.log(arr9[i])
        }
    }
}
GreaterThanY (arr9,7)

//10.Zero Out Negative Numbers
var arr10 = [8,6,-5,9,-4,-7]
var arrReturn = []
for(i=0; i<arr10.length; i++){
    if(arr10[i]>0){
        arrReturn.push(arr10[i])
    }else{
        arrReturn.push(0)
    }
}
console.log(arrReturn)

//11.Max, Min, Average
var arr11 = [1,2,3,4,5,6]
var max = arr11[0]
var min = arr11[0]
var total = 0
for(var i=0; i<arr11.length;i++){
    if(arr11[i]>max){
        max = arr11[i]
    }else if(arr11[i]<min){
        min = arr11[i]
    }
    total += arr11[i]
}
console.log(max)
console.log(min)
var average = total/arr11.length
console.log(average)

//12.Shift Array Values
var arr12 = [1,2,3,4,5,6]
arr12.shift()
arr12.push(0)
console.log(arr12)
//**************************************//
var arr12 = [1,2,3,4,5,6]
function shift(arr){
    for(var i=0; i<arr.length; i++){
        var right = arr[i+1]
        if(right == undefined){
            arr[i]=0;
        }else{
            arr[i]=right
        }  
    }
    console.log(arr)
}
shift(arr12)

//13.Swap String For Array Negative Values
var arr13 = [4,-2,9,8,-3]
for(i=0; i<arr13.length; i++){
    if(arr13[i]>0){
        console.log(arr13[i])
    }else{
        console.log("Dojo")
    }
}