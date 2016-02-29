// Functions for rolling Star Wars RPG dice
// Written by Andrew Laino

// A basic function for rolling random numbers
// Stolen from MDN
function getRandom(min, max){
	return Math.random() * (max - min) + min;
}

function rollBoost(){
	// It's a d6
	// Generate random number between 1 and 6
	var number = getRandom(1, 6);
	switch(number){
		case 1:
		case 2:
		return "blank";
		break;
		case 3:
		return "success";
		break;
		case 4:
		return "advantage";
		break;
		case 5:
		return ["advantage", "advantage"];
		break;
		case 6:
		return ["advantage", "success"];
		break;
	}
}

function rollSetback(){
	// Another d6
	var number = getRandom(1, 6);
	switch(number){
		case 1:
		case 2:
			return "blank";
			break;
		case 3:
		case 4:
			return "failure";
			break;
		case 5:
		case 6:
			return "threat";
			break;
	}
}