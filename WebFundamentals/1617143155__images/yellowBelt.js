var cookie = document.querySelector(".cookie")

function hide(){
    cookie.remove()
}

function changePic(element){
    element.src = "./images/assets/succulents-2.jpg";
}

function keepPic(element){
    element.src = "./images/assets/succulents-1.jpg";
}