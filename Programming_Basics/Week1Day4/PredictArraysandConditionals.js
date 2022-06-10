// Code Challenge: Predict Arrays and Conditionals

// Code Snippet 1
function displayContactInfo() {
    var auntContactInfo = ["Paula", "Smith", "1234 Main Street", "St. Louis", "MO", 12345];
    console.log(auntContactInfo);
}
//nothing, need to call the function
//If call the function, will get "Paula", "Smith", "1234 Main Street", "St. Louis", "MO", 12345

// Code Snippet 2
function displayGrocerylist() {
    var produce = ["apples", "oranges"];
    var frozen = ["broccoli", "ice cream"];
    frozen.push("hashbrowns");
    console.log(frozen);
}
//nothing, need to call the function
//If call the function, will get "broccoli", "ice cream", "hashbrowns"

// Code Snippet 3
var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);

//"Bambi", "Beetlejuice", "Toy Story", "Zoro"