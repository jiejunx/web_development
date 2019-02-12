
alert("hello!")
//create secretNumber
var secretNumber = 4;
//ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

//check guess
if(guess === secretNumber){
	alert("You Got IT right");
}

else if(guess > secretNumber){
	alert("Too high, guess again!");
}
else{
	alert("Too low. Guess again!");
}



