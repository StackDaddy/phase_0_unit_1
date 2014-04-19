var array = [];

var counter = prompt("How many numbers do you want to enter?");

var counter = parseInt(counter);

while  (typeof counter != "number") 
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



var sum = function(array){
	var total = 0;
	for (i = 0; i <= array.length-1; i++){
		total += array[i];
	}
	return total;
};

var median = function (array){
	var temp = (array.length)/2;
	if (array.length % 2 === 1){
		return array[Math.floor(temp)];
		}
	else{
		return ((array[temp] + array[temp-1])/2);
	}
};
var mean = function (array){
	var avg = sum(array)/array.length;
	return avg;
};
console.log(sum(array));
console.log(median(array));
console.log(mean(array));
