
var count = document.querySelector("#CRnum")
var count2 = document.querySelector("#connectnum")

function hide(){
    var pic = document.querySelector("#people")
    // var count = document.querySelector("#CRnum")
    pic.remove();
    count.innerText --
}
function hide2(){
    var pic2 = document.querySelector("#people2")
    // var count = document.querySelector("#CRnum")
    pic2.remove();
    count.innerText --
}
function accept(){
    var pic = document.querySelector("#people")
    // var count = document.querySelector("#CRnum")
    // var count2 = document.querySelector("#connectnum")
    pic.remove();
    count.innerText --
    count2.innerText ++
}
function accept2(){
    var pic2 = document.querySelector("#people2")
    // var count = document.querySelector("#CRnum")
    // var count2 = document.querySelector("#connectnum")
    pic2.remove();
    count.innerText --
    count2.innerText ++
}

function changename(){
    var name = document.querySelector("#title")
    name.innerText = "Yuzu"
}