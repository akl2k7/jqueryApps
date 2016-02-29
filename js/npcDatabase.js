// NPC Database
// By Andrew Laino

function NonPlayer(name, brawn, agility, intellect, cunning, willpower, presence, soak, threshold, skills, equipment, note){
	this.name = name;
	this.brawn = brawn;
	this.agility = agility;
	this.intellect = intellect;
	this.cunning = cunning;
	this.willpower = willpower;
	this.presence = presence;
	this.soak = soak;
	this.threshold = threshold;
	this.skills = skills;
	this.equipment = equipment;
	this.note = note;
	var that = this;

	this.getStats = function(){
		var output = "";
		output += "<div class=\"text-center container\"><span class='well well-sm'>" + this.brawn + "</span><span class='well well-sm'>" + this.agility + "</span><span class='well well-sm'>" + this.intellect + "</span>";
		output += "<span class='well well-sm'>" + this.cunning + "</span><span class='well well-sm'>" + this.willpower + "</span><span class='well well-sm'>" + this.presence + "</span></div>";
		output += "<br/>";
		output += "<div class=\"text-center container\"><span class='well well-sm'>" + this.soak + "</span><span class='well well-sm'>" + this.threshold + "</span></div>";
		return output;
	}

	this.getSkills = function(){};

	this.getEquipment = function(){};
	this.getNote = function(){};
}

// The npc container
var npcs = {
	characters: [],
	add: function(name, brawn, agility, intellect, cunning, willpower, presence, soak, threshold, skills, equipment, note){
		this.characters.push(new NonPlayer(name, brawn, agility, intellect, cunning, willpower, presence, soak, threshold, skills, equipment, note));
	},
	getElement: function(loc){
		return this.characters[loc];
	}
};

npcs.add("Whisper Base Sentry", 2, 3, 2, 2, 3, 1, 3, 5, 
	"Ranged (Light) 0 (G, G, G)", 
	"Light blaster pistol (Skill: Ranged [Light] [G G G]; Damage 5; Range [Medium]; AAAA: inflict Crtical Injury), army uniform and helmet (+1 soak), canteen, code cylinder.",
	"Note that sine the sentries have no strain threshold, whenver they would suffer strain, the sentries instead suffer wounds.");
npcs.add("BX-2R \"Toor\" Refitted Battle Droid", 3, 3, 2, 1, 2, 1, 4, 12,
	"Discipline 1 (G Y), Melee 2 (G Y Y), Negotiation 1 (Y)",
	"Mop (Skill: Melee [G Y Y]; Damage 4; Range [Engaged]; AAAAA: inflict 1 Critical injury), bucket, cleaning supplies, restraining bolt.",
	"Since Toor has no strain threshold, whenever it would suffer strain, it suffers wounds instead.");


// Event Syntax
$(document).ready(function(){
	var options = "<select>";
	for(var i = 0; i < npcs.characters.length; i++){
		options += "<option value='" + i + "''>" + npcs.getElement(i).name + "</option>";
	}
	options += "</select>";
	$("#npcs").append(options);

	$("#npcs").change(function(){
		var selected = $(this).find(":selected").val();
		
		$("#name").text(npcs.getElement(selected).name);
		$("#stats").html(npcs.getElement(selected).getStats());

	});
});
/*	<option>Launch Pad Guard</option>
	<option>Stormtrooper</option>
	<option>Scout Trooper Speeder Bike Pilot</option>
	<option>Lieutenant Sarev</option>
				*/