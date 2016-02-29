var firstNum = "";
var secondNum = ""
var sign;
var calculated = false;

// Calculate function
function calculate(){
	var answer;
	switch(sign){
		case "+":
			answer = parseFloat(firstNum) + parseFloat(secondNum);
			break;
		case "-":
			answer = parseFloat(firstNum) - parseFloat(secondNum);
			break;
		case "*":
			answer = parseFloat(firstNum) * parseFloat(secondNum);
			break;
		case "/":
			answer = parseFloat(firstNum) / parseFloat(secondNum);
			break;
	}
	return answer;
}

// jquery events
$(document).ready(function(){
	// For clicking on any number button
	$(".number").on("click", function(){
		if(calculated){
			$("#currentNum").text("");
			firstNum = "";
			secondNum = "";
			sign = undefined;
			calculated = false;
		}
		var num = $(this).text();
		$("#currentNum").append(num);
		if(!sign)
			firstNum += num;
		else
			secondNum += num;
	});

	// for clicking on a +, -, * or / button
	$(".sign").on("click", function(){
		sign = $(this).text();
		$("#currentNum").text("");
	});

	// For clicking on the equal button
	$("#equal").on("click", function(){
		var answer = calculate();
		$("#currentNum").text(answer);
		calculated = true;
	});

	// For clearing the entire problem
	$("#clearAll").on("click", function(){
		firstNum = "";
		secondNum = "";
		sign = undefined;
		$("#currentNum").text("");
	});

	// For clearing the current number
	$("#clear").on("click", function(){
		$("#currentNum").text("");
		if(!sign)
			firstNum = "";
		else
			secondNum = "";
	});

	// Backspace
	$("#backspace").on("click", function(){
		// Removing the last digit from whatever number variable is being used
		if(!sign)
			firstNum = firstNum.slice(0, -1);
		else
			secondNum = secondNum.slice(0, -1);

		// Removing the last digit from the current number being displayed
		var text = $("#currentNum").text();
		text = text.slice(0, -1);
		$("#currentNum").text(text);
	});

	// Adds a decimal point to number
	$("#decimal").on("click", function(){
		var text = $("#currentNum").text();
		if(text.indexOf(".") == -1){
			$("#currentNum").append(".");
		}
	});

	// Change the number from positive to negative and vice versa
	$("#plusMinus").on("click", function(){
		var text = $("#currentNum").text();
		if(text.indexOf("-") == -1)
			$("#currentNum").text("-" + text);
		else
			$("#currentNum").text(text.slice(1, text.length));
	});
});
