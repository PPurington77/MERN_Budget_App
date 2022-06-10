//Code Challenge: Parameters

function greetSomeone(name){
    if(name == "Yuzu"){
        console.log("Good day, Yuzu!")
    }
    else{
        console.log("Hi there.")
    }
}
greetSomeone("Yuzu")

// Level 2

function sayHi(name, date){
    if(name == "Yuzu"){
        console.log("Good day, " + name + ", it's " + date + " today!")
    }
    else{
        console.log("Hi there.")
    }
}
sayHi("Yuzu", "10/3")

// Level 3

function beef(){
    return "I'm coming for you, Dooku!"
}

var CountDooku = beef()
console.log(CountDooku)
