// I paired by myself on this challenge.




// Pseudocode
// Declare a secret number and set it equal to a number object 
// Declare a string variable password and set it equal to a string of characters with quotations aroud it
// Declare a variable, allowedIn and set it equal to a boolean
// Declare an array, members.  The first name John and the fourth element Mary.  


// __________________________________________
// Write your code below.
var secretNumber = 7
var password = "just open the door"
var allowedIn = false;
members = ["John", 4, 5, "Mary"];







// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 
var secretNumber = 7;
var password = "just open the door";
var allowedIn = false;
members = ["John", 4, 5, "Mary"];

For the variable names, I sumply used what the test was asking for.  Additionally, I added in several semicolons, creating proper syntax.




// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 

// I never had done test driven development before. 
I had heard the name tossed around a couple of times, 
but this was the first time writing any code for it.  
Overall, assuming I did the challenge correctly, I found it to be pretty straight forward.  
I have had some practice declaring variables in Javascript using Coderbyte, so this seemed pretty straight forward.  
the only thing that I forgot was adding the semicolons at the end of the variable declaration, which is proper syntax.  
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
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

