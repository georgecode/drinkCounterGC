$(document).ready(function(){ 
	var numCigs = 0
	var numDrinks = 0
	var numWaters = 0	

	$('#cigs').click(function(){
		numCigs = numCigs+1
		$('#cigsUsed').html("<p> You smoked </p>" + numCigs + "<p>cids</p>")
	});

	$('#drinks').click(function(){
		numDrinks = numDrinks+1
		$('#drinksUsed').html("<p> You drank </p>" + numDrinks + "<p>drinks</p>")
	});

	$('#waters').click(function(){
		numWaters = numWaters+1
		$('#watersUsed').html("<p> You drank </p>" + numWaters + "<p>waters</p>")
	});
	
});