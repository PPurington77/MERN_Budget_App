
//Get on that ride

function height(x){
    if(x > 52){
        console.log("Get on that ride, kiddo!")
    }
    else{
        console.log("Sorry kiddo. Maybe next year.")
    }
}
height(53)

//Stretch Feature 1

function ride(height, age) {

    if(height > 52 && age > 10){
        console.log("Get on that ride, kiddo!")
    }
    else{
        console.log("Sorry kiddo. Maybe next year.")
    }
}

ride(45,11)

//Stretch Feature 2

function ride(height, age) {

    if(height > 52 || age > 10){
        console.log("Get on that ride, kiddo!")
    }
    else{
        console.log("Sorry kiddo. Maybe next year.")
    }
}

ride(53,10)
