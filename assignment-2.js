// Assignment 2: Problem Solving

// Challenge 1
// Version 1 - Array
var hash = [];
for (var i = 0; i <= 7; i++) {
	if (i === 0) {
		console.log(hash)
	}
	else {
		hash.push("#");
		console.log(hash);
	}
}

// Version 2 - No Array
var hash2 = "#######"
for (var i = 0; i <= 7; i++) {
	console.log(hash2.substr(0, i));
}

/*Challenge 1 Explanation
I wasn't sure if the blank line at the top of the example was necessary, but I included it nonetheless.
In the first version, I tried an array with a for loop and an if-else statement.
An empty array is created, then the for loop with a declaration for 'i' to function as the loop counter.
The if statement prints the blank line at the start, and the else statement pushes a new element '#' for successive loops.
The problem here is that it prints out with brackets and commas.
Version 2 looks better and is simpler code.  A variable is created with a string.
The for loop, variables and conditions follow, and I used the 'substr' method to print from range 0 to i for each loop.
This way it prints the blank line and prints one more character in the string each loop.
*/


// Challenge 2
function isEven(number) {
	if (isNaN(number)) {
		console.log("That is not a valid number.");
	}
	else {
		if (number % 2 === 0) {
			console.log("The number is even.");
		}
		if (number % 2 !== 0) {
			console.log("The number is odd.");
		}
	}
}
isEven(1);

/*Challenge 2 Explanation
I used a function with an if-else statement using the % operator to test for a remainder 
if divided by 2.
The 'if' condition tests whether the parameter is a number or not by using the isNaN function.
The 'else' includes two 'if' statements (this could have been written as else if and else).
The first one tests for even numbers by checking if there is no remainder and the second if there 
is a remainder.
The final line calls the function after closing it out.
*/