//I want to ask a person how many numbers they want to enter, and once they tell me how many, I would like ot ask
// them which numbers.  I will then store these numbers.  If a person tells me something other than a number, 
//I would like to remind them to tell me a number.  

var array = [];

var counter = prompt("How many numbers do you want to enter?");

var counter = parseInt(counter);

while (typeof counter != "number") 
{
  var counter = prompt("Please enter a number:");
}

for (x = 0; x < counter; x++){
	var userInput = prompt("Enter a number:");

	userInput = Number(userInput);

	if (typeof userInput === "number"){
		array.push(userInput);
	}
}

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
