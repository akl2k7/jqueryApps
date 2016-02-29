// Sentence Generator
// By Andrew Laino
// All the variables necessary for random sentence building
var sAdj, sNoun, verb, oAdj, oNoun, preposition, pAdj, pNoun;
var nouns = ["cat", "dog", "man", "woman", "child", "shoe", "lamp", "book", "phone", "computer", "game", "fan", "city"];
var verbs = ["eats", "drinks", "is", "was", "sees", "hears", "smells", "tastes", "touches"];
var adjectives = ["fat", "skinny", "big", "small", "old", "young", "pretty", "beautiful", "ugly", "red", "blue", "yellow", "purple", "pink", "green", "orange"];
var prepositions = ["in", "on", "at", "above", "below", "of", "under", "over", "inside", "outside", "out of"];
var articles = ["The", "A"];

// Random number function
function getRandom(max, min){
	return Math.floor(Math.random() * (max - min) + min);
}

// Function for randomly generating an article
function generateArticle(){
	return articles[getRandom(0, 2)];
}

// The event code for the sentence generator
$(document).ready(function(){
	$("#generate").on("click", function(){
		// Declare string for sentence
		var sentence = "";

		// Randomly generate the intial article
		sentence += (generateArticle());

		// Put together the sentence piece by piece
		sentence += ' ';
		sentence += adjectives[getRandom(0, (adjectives.length - 1))];
		sentence += " ";
		sentence += nouns[getRandom(0, (nouns.length - 1))];
		sentence += " ";
		sentence += verbs[getRandom(0, (verbs.length - 1))];
		sentence += " ";
		sentence += generateArticle().toLowerCase();
		sentence += " ";
		sentence += adjectives[getRandom(0, (adjectives.length - 1))];
		sentence += " ";
		sentence += nouns[getRandom(0, (nouns.length - 1))];
		sentence += " ";
		sentence += prepositions[getRandom(0, (prepositions.length - 1))];
		sentence += " ";
		sentence += generateArticle().toLowerCase();
		sentence += " ";
		sentence += adjectives[getRandom(0, (adjectives.length - 1))];
		sentence += " ";
		sentence += nouns[getRandom(0, (nouns.length - 1))];
		sentence += '.';

		// Put the new, random sentence into the div
		$("#sentence").text(sentence);
	});
});