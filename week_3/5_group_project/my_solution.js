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
