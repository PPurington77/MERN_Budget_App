var cookie = document.querySelector("#cookie")

function hide(){
    cookie.remove()
}

var arr = [document.querySelector("#a1"),document.querySelector("#a2"),document.querySelector("#a3"),document.querySelector("#a4"),document.querySelector("#a5"),document.querySelector("#a6"),document.querySelector("#a7"),document.querySelector("#a8")]


function cToF(){
    var selectOption = document.querySelector("#CF").value
    if(selectOption == "°F"){
        for(var i=0; i<arr.length; i++){
            var changC = arr[i].innerText*9/5 + 32;
            arr[i].innerText = Math.ceil(changC);
        }
    } else if(selectOption == "°C"){
        for(var i=0; i<arr.length; i++){
            var changF = (arr[i].innerText-32)*5/9;
            arr[i].innerText = Math.ceil(changF);
        }
    }
}
