var displayDiv = document.querySelector("#display")

function press(element){
    if(element == "." && displayDiv.value.includes(".") ) return;
    displayDiv.value += element;
}

function clr(){
    displayDiv.value = " ";
}

function setOP(element){
    if(element == "/" && displayDiv.value.includes("/")) return;
    if(element == "*" && displayDiv.value.includes("*")) return;
    if(element == "+" && displayDiv.value.includes("+")) return;
    if(element == "-" && displayDiv.value.includes("-")) return;
    displayDiv.value += element;
}

function calculate(){
    displayDiv.value = eval(displayDiv.value)
}

