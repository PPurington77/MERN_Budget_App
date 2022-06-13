//Countdown

// for (let count=5; count>0; count--){
//     console.log(count)
// }

function countDown(startNum, endNum){
    for(let count=startNum; count>= endNum; count--){
        if(count == 45){
            console.log("it's 45")
        }
        else{
            console.log(count)
        }
    }
}
countDown(50,40)