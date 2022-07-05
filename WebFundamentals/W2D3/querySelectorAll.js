var colors = document.querySelectorAll(".color");
    
function applyColors(){
    for(var i=0; i<colors.length; i++) {
        colors[i].style.color = colors[i].innerText;
    }
}

var hTag = document.querySelectorAll("h4")

function changecolor(element){
    console.log(element.value)
    console.log(hTag)
    for(var i=0; i<hTag.length; i++){
        hTag[i].style.color = element.value;
    }

}
