// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1.  Ryan stack 
//  2.  Yariv 


// 1. "YOU SIGNED... WHO?!"

var client1 = {"name": "Matt Damon", "age": 40, "quote": "I'm great"};
var client2 = {"name": "Johny Depp", "age": 45, "quote": "I'm weird"};


// 2. "Here they Come!"

var client3 = {"name": "Adam Sandler", "age": 56, "quote": "Last person to tell"};
var client4 = {"name": "Kristen Bell", "age": 33, "quote": "Do you wanna build a snowman?"};
var client5 = {"name": "Jim Carrey", "age": 52, "quote": "You're telling me there is a chance"};

var clientele = [client1, client2, client3, client4, client5];


// 3. "TIME IS MONEY!"

function Client(name, age, quote) {
    this.name = name;
    this.age = age; 
    this.quote = quote;
};



//YOUR CODE HERE!

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";





// 4. "SHOW 'EM OFF!"




clientele

// ** BONUS **


//  Your Reflection:

I thought this was a great GPS.  It certainly reinforced how to make objects in JS.  I liked how we constructed objects 
with literal and constructor notation.  Emily was very helpful, and Yariv was rgeat to work with.  
