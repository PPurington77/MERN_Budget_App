//Loops

var num = 5
if(num > 1){
    console.log("Num is greater than 1")
}

// ++ is the same as x = x + 1
var x = 1
for(var i = 0; i < 5; i++) {
    //this will increment the variable x by 1 each time the loop runs

    x++;
    console.log(x);
    console.log("the variable x is " + x);
    console.log("Say something");
}

// console.log the string "Hello World" 5 times

var phrase = "Hello World"
for(i = 0; i < 5; i++){
    console.log(phrase)
}

//using functions
function printPhrase(phrase, times){
    for(i = 0; i < times; i++){
        console.log(phrase)
        for(j = 0; j < 5; j++){   // Nested
            console.log("Nested for loops")
        }
    }
}

printPhrase("This is a phrase", 2)

// +=
var b = 0
for(i = 0; i < 5; i++){
    b += 3                   // same as b = b + 3
    console.log(b)
}



//Difference between while loop and a for loop

var num = 0;    // start a variable at 0
while (num <= 5) {    
    console.log(num);    // print the current value of num    
    num++;       // increment num by 1
}
