// notetaker.js
// Written by Andrew Laino

$(document).ready(function(){

	//Event for the save button. Saves data to local storage
	$("#save").on("click", function(){
		var fileName = $("#fileName").val();
		alert(fileName);
		var data = $("#textBody").val();
		alert(data);

		localStorage.setItem(fileName, data);
	});

	// Event for load button. Brings up dialog box to indicate what file to open
	$("#load").on("click", function(){
		var fileName = prompt("Please enter a file name");
		$("#fileName").text(fileName);
		alert(fileName);

		// get data from file in local storage
		var data = localStorage.getItem(fileName);
		alert(data);
		$("#textBody").text(data);
	});

});