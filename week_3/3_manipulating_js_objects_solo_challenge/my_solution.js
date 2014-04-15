// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}
/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.
   pseudocode-- define a variable adam and set it equal to an empty object. 
   
   var adam = {};

2. Give adam a name property with the value "Adam".
pseud-- insert a property and a value into the empty object bracket.
var Adam = {name: 'Adam'}
3. Add a spouse property to terah and assign it the value of adam.
First write the object terah and then brackets "spouse" equal to a new value adam.


4. Change the value of the terah weight property to 125.
start with object terah and then access the property weight by brackets and then an assignments statement. 
terah["weight"] = 125;
5. Remove the eyeColor property from terah.
I am not sure if there exists a method to completly remove something so I will try setting eyeColor to undefined.
terah["eyeColor"] = undefined;

6. Add a spouse property to adam and assign it the value of terah.
Same bracket notation that I have been using.  
adam["spouse"] = terah;

7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties
   Here, I will want to again use the bracket notation and then set it equal to an empty object.  
   terah["children"] = {};

8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".
Alrighty, this is a mouthful.  Here I will want to access the value of terah;s children by using dot notation,
and then setting an assignment statement by setting it equal to a object.  
terah.children["carson"] = {name: "Carson"};
9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".
  Same deal here.  Just different info.
  terah.children["carter"] = {name: "Carter"};
10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".
Again, same deal here.
terah.children["colton"] = {name: "Colton"};
11. Add a children property to adam and assign it the value of terah children.
Ok, so here we will want to create a new property through bracket notation and then use an assignment statement.
We will access terah's children by using dot notation.  
adam["children"] = terah.children

*/

// __________________________________________
// Write your code below.
var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}
var adam = {};
var Adam = {name: 'Adam'};
terah["spouse"] = adam;
terah["weight"] = 125;
terah["eyeColor"] = undefined;
adam["spouse"] = terah;
terah["children"] = {};
terah.children["carson"] = {name: "Carson"};
terah.children["carter"] = {name: "Carter"};
terah.children["colton"] = {name: "Colton"};
adam["children"] = terah.children;







// __________________________________________
// Reflection: Use the reflection guidelines
// I definitely liked this challenge a little bit more.  Slightly mor echallenging.  It really forced me to understand  
// object jargon.  For example, property, value.  And im not sure if this is what it is called, but it forced me to underderstand 
// how nesting works within javascript object and how to access them.  This is something I struggled with at first, but after reviewing 
// some of the notes I was able to get passed the section.  
// 
// 
// 
// 
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)
