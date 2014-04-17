
// Your mission description:
// The BACONATOR is hungry for his favorite snack. Bacon!
// His roommate has conveniently just made some. Help the
// BACONATOR sneak past his roommate's room for some
// delicious bacon!

// Pseudocode
// (The BACONATOR moves only on an x axis between points 0 and 100. He starts at 0, his roommate's room is at
// 50, and the Bacon is in the kitchen at point 100)
// 
// new object: BACONATOR
//  var position = 0
//
//  move: add arguments to position
//
//  checkForRoommate: call roommate awareness function. if roommate is aware, give a warning
//  
//  eatBacon: print endgame message:  "That was delicious!" and end game
//
// new object: roommate
//  
//  var aware = setAware
//
//  setAware: aware = random true/false
//  
//  isAware: var temp = aware, setAware, return temp
//
//  catch: if aware and baconator is past 50, print "back off BACONATOR" and end game

// print game start messages
// move 50
// check
// move 50
// eat bacon



// Initial Code

var baconator = {
    position: 0,
    move: function(num){
    this.position += num;
    },
    checkForRoommate: function(){roommate.isAware();},
    eatBacon: function(){
        if(this.position === 100){
            console.log("BACONATOR: That Bacon was delicious!");
        };
    }
};

var roommate = {
    aware: this.setAware();,
    setAware: function() {
        if (Math.random() >= .5) {
            return false;
            }
        else {
            return true;
            }
    };,
    isAware: function(){
        var temp = aware;
        aware = this.setAware();
        return temp;
    };,
    catch: function() {
        if (baconator.position > 50 && this.aware) {
            console.log("Roommate: Back Away, BACONATOR!");
        };
    };
};

console.log("BACONATOR: I'm hungry. I need bacon.");

baconator.move(50);
baconator.checkForRoommate();
baconator.move(50);
baconator.eatBacon();

// Refactored Code

var baconator = {
    position: 0,
    move: function(num){
    this.position += num;
    if (position > 100) {
        position = 100;
    };
    roommate.catch();
    };,
    checkForRoommate: function(){
    if(this.position === 50){
        roommate.isAware();
    }
    else{
        console.log("You can't see your roommate from here.");
    };
    };,
    eatBacon: function(){
        if(this.position === 100){
            console.log("BACONATOR: That Bacon was delicious!");
        };
    };
};

var roommate = {
    aware: this.setAware();,
    setAware: function() {
        if (Math.random() >= .5) {
            return false;
            }
        else {
            return true;
            };
    };,
    isAware: function(){
        var temp = aware;
        aware = this.setAware();
        return temp;
    };,
    catch: function() {
        if (baconator.position > 50 && this.aware) {
            console.log("Roommate: Back Away, BACONATOR!");
        };
    };
};

console.log("BACONATOR: I'm hungry. I need bacon.");

baconator.move(50);
baconator.checkForRoommate();
baconator.move(50);
baconator.eatBacon();


// Reflection
// 
// 
// 
// 
// 
// 
// 
// 
