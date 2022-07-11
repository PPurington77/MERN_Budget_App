function reverse(str){
    let newstr = ""
    for(let i = str.length-1; i >= 0; i--){
        newstr += str[i]
    }
    return newstr
}

console.log(reverse("hello"))


function printinitial(str2){
    let initial = ""
    initial += str2[0]
    for(let i = 1; i<str2.length; i++){
        if(str2[i-1] == " " && str2[i] != " "){
            initial += str2[i]
        }
    }
    return initial.toUpperCase()
}

console.log(printinitial("hello      world"))

