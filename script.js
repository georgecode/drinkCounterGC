$(document).ready(function(){ 
	var numCigs = 0
	var numDrinks = 0
	var numWaters = 0	

	$('.cigs').click(function(){
		numCigs = numCigs+1
		$('.cigs').html("<p> You smoked </p>" + numCigs + "<p>cids</p>")
	});

	$('.drinks').click(function(){
		numDrinks = numDrinks+1
		$('.drinks').html("<p> You drank </p>" + numDrinks + "<p>drinks</p>")
	});

	$('.water').click(function(){
		numWaters = numWaters+1
		$('.water').html("<p> You drank </p>" + numWaters + "<p>waters</p>")
	});
	
});