// Code Challenge: Loop-d-loop

// Question:
// Giving candy is repeating every 2 miles
// Starting point is 2
// The loop should stop when the mile reach 6
// The iteration is 2
// mile and candy

var mile = 2;
var candy = 1;
console.log("No candy for 0 mile!")

while( mile<= 6){
    console.log("reach " + mile + " miles"+ ", can get " + candy + " candy");
    mile += 2
    candy++
}

// trying different solution // 

var mile = 2
var candy = 0
console.log("No candy for 0 mile!");

for(var mile = 2; mile <= 6; mile += 2) {
    candy ++;
    
    console.log("reach " + mile + " miles to get " + candy + " candy");
}

//Stretch Feature 1

function getCandy(speed){
    for(var mile = 2; mile <= 6; mile += 2) {
    if(mile <= 6 && speed > 5.5)
    console.log("You run" + mile + " miles on " + speed + " mph, can get candy");
    else{
    console.log("No candy")
    }
    }
}

getCandy(8)