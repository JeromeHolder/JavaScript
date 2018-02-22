//Simple if-else
/*function shouldIHaveABeer(dayOfTheWeek) {
	if (dayOfTheWeek == "Monday" || dayOfTheWeek == "Tuesday" ||
	dayOfTheWeek == "Wednesday" || dayOfTheWeek == "Thursday" || 
	dayOfTheWeek == "Friday") {
		console.log("No way!  You should be coding!");
	}
	else {
		console.log("Yeah...I guess if you need a break.");
	}
};
shouldIHaveABeer('Thursday')*/

//Else if
function goOut(day) {
	if (day == "Monday" || day == "Tuesday" || day == "Wednesday") {
		console.log("Not tonight");
	}
	else if (day == "Thursday") {
		console.log("Maybe");
	}
	else if (day == "Friday") {
		console.log("Definitely!");
	}
	else if (day == "Saturday") {
		console.log("Only if you're not hungover from last night!");
	}
	else if (day == "Sunday") {
		console.log("You need to get ready for Monday");
	}
	else {
		console.log("That is not a valid day of the week.");
	}
};
goOut('Thursday');