// I worked on this challenge [by myself, with:]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
 
 2)  Grab the Mushroom
 
     pseudocode:  Move up; Move Right, Grab the Mushroom, Move left, Move up, Attack!
     
this.moveUp();

this.moveRight();
 
this.moveLeft();

this.moveUp();

this.attackNearbyEnemy();

3) Drink Me Complete 
pseudocode:  Bob and Weave,headfake, slay left, double tap, retrace steps, go downtown and grab health portion, go uptown, turn right and slay again.
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveDown();
this.moveUp();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

4)Taunt the Gaurds
pseudoCode:  Move right, say something, turn around, kill gaurd, move right, up, say something, down, right, up, right, right.
this.moveRight();
this.bustDownDoor();

// Delete the "//" in front of each line below.
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");

// Now get Phoebe to follow through the dungeon.
this.moveRight();
this.say("Follow me.");

this.moveRight();
this.moveRight();
this.moveUp();
this.say("follow me.");
this.moveRight(); 
this.say("Run");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();
this.moveRight();

5)  It's a trap
   pseudocode:  Move down twice, taunt, move up fourtimes 
   
   this.moveDown();
this.moveDown();
this.moveDown();
this.say("Come get Me!");
this.moveUp();
this.moveUp();
this.moveUp();
6) Taunt
pseudocode:  Talk mad shit 

this.say("what");
this.say("wack");
this.say("bring it");
this.say("biaatch");

7) Cowardly Taunt 

 Move the guy somwhat close to enemies, taunt, hover back.
 
 this.moveXY(50, 16);
this.moveXY(63, 20);
this.moveXY(70, 10);  // This is a safe spot.

this.say("I can lure them in here.");

this.moveXY(51, 34);
this.say("y'all suck");
this.moveXY(69,13);

 8) Commanding followers
 pseudocode:  Give an inspiring speech, lol.  Say follow.  March forward.  Attack.  
 
 this.say("My dearest comrads, today is the day that we fight for our freedom.  See those trolls over their, they fight for money and riches.  But we! Free Men! We fight for us.  Follow Me!");
this.moveXY(55,37);
this.say("attack");

Mobile Artilery Complete

pseudocode

Move into firing position, kill all little guys with first shot, then reposition fire for big guy movement.  

this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Shoot once in the middle of the ogres

// If they survive a hit, ogres retaliate!
// Larger ogres take more than one hit...
// So, position and aim carefully.
this.moveXY(47,43);
this.attackXY(69, 56);
this.attackXY(57, 48);
this.attackXY(49,67);
this.attackXY(47,53);


What is this referring to? Think programming-wise rather than in the terms of the game.

This is refering to an object.  We use the object to call methods with the dot notation.  
What does the () do in JavaScript?

The () in JS is the syntax for a method.  Even if there are no parameters for the method, we must still stupe out the () in order for proper syntax and to call the method on the object. 

What is the point of the semicolons?

The point of the semicolons is to separate lines of code.  It is puntuation.  





 
 
 
 
 
 
// Reflection:
// Write your reflection here.

This was not one of my favorite excersises.  On one hand I can see how it may have been like a wax on wax off sort of excersize, but I just feel like their was so much toying around for very little differentiating concepts.  However, it did certainly reinforce dot notation, calling methods on objects.  
