var taco1 = {
    "tortilla": "soft corn tortilla",
    "protein":  "tinga chicken",
    "cheese":   "cotija cheese",
    "toppings": ["lettuce", "pico de gallo", "guacamole"],
    "tacoInfo": function() {
        console.log("Tortilla: " + this.tortilla);
        console.log("Protein:  " + this.protein);
        console.log("Cheese:   " + this.cheese);
        console.log("Toppings: " + this.toppings);
    }
} 
// we can now still get all the delicious taco facts by
taco1.tacoInfo(); // note tacoInfo still gets called like a function


function sandwichFactory(bread, protein, cheese, toppings) {
    var sandwich = {};
    sandwich.bread = bread;
    sandwich.protein = protein;
    sandwich.cheese = cheese;
    sandwich.toppings = toppings;
    return sandwich;
}
    
var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
console.log(s1);


function pizzaOven(crustType,sauceType,cheeses,toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
var p1 = pizzaOven("deep dish","traditional","mozzarella",["pepperoni", "sausage"])
var p2 = pizzaOven("hand tossed","marinara",["mozzarella","feta"],["mushrooms","olives","onions"])
var p3 = pizzaOven("hand tossed","traditional","mozzarella",["mushrooms","olives","onions","sausage"])
var p4 = pizzaOven("hand tossed","marinara","feta",["mushrooms","tomato"])
console.log(p1)
console.log(p2)
console.log(p3)
console.log(p4)

//bonus

var crust = ["deep dish","hand tossed","wheat"]
var sauce = ["tomato","pasto","BBQ","traditional","marinara"]
var cheeses = ["mozzarella","feta","cheddar","no cheese"]
var toppings = ["mushrooms","olives","onions","sausage","pepperoni","chicken"]

function randomPizza(crustType,sauceType,cheeses,toppings){
    var pizza = {}
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza
}
var randompiz= randomPizza(crust[Math.floor(Math.random()*crust.length)],sauce[Math.floor(Math.random()*sauce.length)],cheeses[Math.floor(Math.random()*cheeses.length)],toppings[Math.floor(Math.random()*toppings.length)])
console.log(randompiz)
