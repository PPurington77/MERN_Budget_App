var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];
function getAnswer() {
    var output = document.querySelector("#answer")
    console.log(output);
    output.innerText = lifesAnswers[Math.floor(Math.random()*lifesAnswers.length)];
    
    var image = document.querySelector("#ball")
    image.setAttribute("src", "ball.gif");
    replace();
}
// In this space is where we need to change 
// what is happening to the image on the page. 
// querySelector is used to grab an element from the dom based on it's id
// Maybe there is a way to set the amount of time something happens on a page?


// Notice the empty tag on line 26 on index.html?
// We can change some innerText to display an answer :-)  
// I also just saw a tweet #MathDotRandom is trending

function replace() {


    
}