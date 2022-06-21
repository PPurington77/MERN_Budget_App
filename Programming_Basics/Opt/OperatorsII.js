//As a user, I need to know what the remainder is if I divide out my cake that has 12 pieces to 5 people, because I want to know how much left over I will have.

var cake = 12
var people = 5
console.log(cake % people)

//Feature1: As the designated cake slicer and distributor at our office birthday parties, I want a function called howMuchLeftOverCake that passes two variables numberOfPieces and numberOfPeople into it and figures out the remainder pieces of cake.

function howMuchLeftOverCake(numberOfPieces, numberOfPeople){
    console.log(numberOfPieces % numberOfPeople)
}
howMuchLeftOverCake(12,5)

//Feature2: Building off Feature 1 , I want to the console.log() to display
//"No leftovers for you!" if there aren't any left overs
//"You have some left overs" if there are 2 pieces of cake or less
//"You have left overs to share" if there are 3 - 5 pieces of cake left over
//"Hold another party!" if there are more than 5 pieces of cake left over.

function LeftOverCake(numOfPieces, numOfPeople){
    if(numOfPieces % numOfPeople == 0){
        console.log("No leftovers for you!");
    }else if(numOfPieces % numOfPeople <= 2){
        console.log("You have some left overs");
    }else if(numOfPieces % numOfPeople > 2 && numOfPieces % numOfPeople < 5){
        console.log("You have left overs to share");
    }else if(numOfPieces % numOfPeople > 5){
        console.log("Hold another party!")
    }
}
LeftOverCake(20,7)

