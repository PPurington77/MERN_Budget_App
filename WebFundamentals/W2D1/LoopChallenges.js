//1.Print odds 1-20
for(i=1; i<=20; i+=2){
    console.log(i)
}

//2.Decreasing Multiples of 3
for(i=100; i>0; i--){
    if(i%3 == 0){
        console.log(i)
    }
}

//3.Print the sequence
function print(arr){
    for(i=0; i<arr.length; i++){
        console.log(arr[i])
    }
}
print([4, 2.5, 1, -0.5, -2, -3.5])

//4.Sigma
function total(){
    let sum = 0
    for(i=0; i<=100; i++){
        sum = sum +i
    }
    console.log(sum)
}
total()

//5.Factorial
function factorial(){
    let product = 1
    for(i=1; i<=12; i++){
        product = product*i
    }
    console.log(product)
}
factorial()