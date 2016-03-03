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

// Event function for the roll button
$(document).ready(function(){
	$("#roll").on("click", function(){
		var boosts = Number($("#boost").val());
		var setbacks = Number($("#setback").val());
		var pool = [];
		
		// Roll the dice
		// Boost die
		for(var i = 0; i < boosts; i++){
			var dice = rollBoost();
			if(typeof dice == "string")
				pool.push(dice);
			else
				pool = pool.concat(dice);
		}
		
		// Setback die
		for(var j = 0; j < setbacks; j++){
			var dice = rollSetback();
			if(typeof dice == "string")
				pool.push(dice);
			else
				pool = pool.concat(dice);
		}
		
		// Output to html file
		var output = "";
		for(var z=0; z < pool.length; z++){
			output += pool[z] + "\n";
		}
	});
});
