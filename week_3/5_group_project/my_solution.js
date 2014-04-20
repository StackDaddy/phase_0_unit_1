//Here I want to get a list of numbers from somebody.  While doing so, I want to make sure that the input is actually a number.

var array = [];

var counter = prompt("How many numbers do you want to enter?");

while (isNaN(counter)) {
    counter = prompt("Please enter a number:");
}



for (x = 0; x < counter; x++){
	var userInput = prompt("Enter a number:");
	while (isNaN(userInput)) {
        userInput = prompt("Please enter a number:");
    }
	array.push(Number(userInput));
	
}
console.log(array);

// Here I would like to calculate the sum of all the numbers tht were inputed. 

var sum = function(array){
	var total = 0;
	for (i = 0; i <= array.length-1; i++){
		total += array[i];
	}
	return total;
};

//Here I would like to calculate the median of all the numbers that were inputed.  

var median = function (array){
	var temp = (array.length)/2;
	if (array.length % 2 === 1){
		return array[Math.floor(temp)];
		}
	else{
		return ((array[temp] + array[temp-1])/2);
	}
};

//Here, I would like to calculate the mean of all the numbers that were inputed.

var mean = function (array){
	var avg = sum(array)/array.length;
	return avg;
};

// Here, I would like to print out all the results of my calculations.  

console.log(sum(array));
console.log(median(array));
console.log(mean(array));



Reflection:

1) What was this experience like?

	I enjoyed this experience very much.  It was really the first time that I had to work together with a group of people 
	on a very technical problem.  When I first received my part, which was refactoring the code, I was lile, wow, what is going on here.
	I definitely needed to reach out to the person before me and just casually speak about what was going on.  Definitely made me appreciate
	the use of non-technical comments.  
2) Was your group successful in passing the tests?
	Yes, our group did pass all of the tests.  
3) What did you learn about writing user stories, pseudocoding, writing code, refactoring, etc.?
	I did.  And working with other people I think each of these parts are even more necessary.  When building programs it is very important 
	to understand someones casual thought process from the very beginning to the very last technical detail.  Without knowong this
	you are kinda just a clueless bystander on the sidelines.  I learned that usr stories should be very simple.  They should simply state what
	the user should get out of the experience.  Pseudocode shouldbe more details and try to encompass each facet of the code.  
	Writing the code should try to be as clean and as dry as possible.  Refactoring, which was my part of the project, I tried to think, ok, 
	what input could possibly cause this code to go worng. 


