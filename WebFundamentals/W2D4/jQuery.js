var btns = document.querySelectorAll("button");
    
for(var i=0; i<btns.length; i++) {
    btns[i].addEventListener("click", function(){
        alert("Button clicked!");
    });
}

$("button").click(function() {
    alert("Button clicked");
});
