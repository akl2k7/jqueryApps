// The javascript source code for my basic guess-a-number app
// Written by Andrew Laino on 1/9/2016
$(document).ready(function(){
	function getRandom(max, min){
		return Math.floor(Math.random() * (max - min) + min);
	}
	var number = getRandom(1, 100);

	// Event for clicking the check button
	$("#check").on("click", function(){
		var answer = Number($("#input").val());
		if(answer === number){
			$("#output").text("Good job! You guessed the number!");
			$("#newGame").show();
		}
		else if(answer >= number)
			$("#output").text("Too high!");
		else
			$("#output").text("Too low!");
	});

	// Makes sure the user doesn't constantly start new games
	$("#newGame").hide();

	// Starts up a new game. 
	$("#newGame").on("click", function(){
		number = getRandom(1, 100);
		$("#output").text("Input number");
		$("#input").val(0);
		$(this).hide();
	});
});