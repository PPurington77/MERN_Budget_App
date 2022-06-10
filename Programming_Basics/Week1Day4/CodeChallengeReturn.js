// Code Challenge: Return

//Code Snippet 1 
function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');
//hello, Dojo

//Code Snippet 2
function hello() {
    console.log('hello');
    return 15;
}
var result = hello();
console.log('result is', result);
//hello, result is 15

//Code Snippet 3
function numPlus(num) {
    console.log('num is', num);
    return num+15;
}
var result = numPlus(3);
console.log('x is', result);
//num is 3, x is 18

//Code Snippet 4
var num = 15;
console.log(num);
function logAndReturn(num){
    console.log(num);   
    return num;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);
//15, 10, 10, 15

//Code Snippet 5
var num = 15;
console.log(num);
function timesTwo(num){
    console.log(num);   
    return num*2;
}
var result = timesTwo(10);
console.log(result);
console.log(num);
//15, 10, 20, 15

//Code Snippet 6
function timesTwoAgain(num) {
    console.log('num is', num);
    y = num*2;
    return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('result is', result);
//num is 8, result is 16 (Im wrong)
//Correct answer - num is 3, num is 5, result is 16

//Code Snippet 7
function sumNums(num1, num2) {  
    return num1+num2;
}
console.log(sumNums(2,3))
console.log(sumNums(3,5))
//5, 8

//Code Snippet 8
function printSumNums(num1, num2) {
    console.log(num1);   
    return num1+num2;
}
console.log(printSumNums(2,3))
console.log(printSumNums(3,5))
// 2, 5, 3, 8

//Code Snippet 9
function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,5);
console.log('result is', result);
// sum is 13, result is 13 (Im wrong)
// Correct answer - sun is 5, sum is 8, result is 13

//Code Snippet 10
function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));            
console.log('result is', result);
// sum is 5, sum is 6, sum is 8, result is 19 (Im wrong)
// Correct answer - sum is 5, sum is 3, sum is 6, sum is 3, sum is 5, sum is 8, result is 19
