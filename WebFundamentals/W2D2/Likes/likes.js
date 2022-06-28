
// function addlike(element){
//     let count = Number(element.nextElementSibling.innerText)+1;
//     element.nextElementSibling.innerText = count;
// }

let arr = [5,2,8]
let arr2 = [document.querySelector("#count"),document.querySelector("#count2"),document.querySelector("#count3")]

function addlike(i){
    arr[i]++
    arr2[i].innerText = arr[i]
}

// function addlike(){
//     var num = document.querySelector("#count");
//     num = num.innerHTML ++
//     num.innerHTML = num;
// }

// function addlike2(){
//     var num = document.querySelector("#count2");
//     num = num.innerHTML ++
//     num.innerHTML = num;
// }

// function addlike3(){
//     var num = document.querySelector("#count3");
//     num = num.innerHTML ++
//     num.innerHTML = num;
// }