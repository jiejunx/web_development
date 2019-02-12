var question = prompt("Are we there yet");

while (question.indexof("yes") == -1 && question != "yeah"){
	question = prompt("Are we there yet");
}

alert("Yay, we finally made it!")