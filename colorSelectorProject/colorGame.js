alert("connected");

color1 = randColor()

var colors = randArr(6);
var targetIndex = randIndex(6);
var targetColor = colors[targetIndex];

var target = document.querySelector("#targetColor");
target.textContent = targetColor;

var squareAll = document.querySelectorAll(".square");

for(var i = 0; i<squareAll.length; i++){
	squareAll[i].style.background = colors[i];
	squareAll[i].addEventListener("click", function(){
		console.log(this.style.background);

		if(this.style.background == targetColor){
			for(var i = 0; i<squareAll.length; i++){
				squareAll[i].style.background = targetColor;
			}

		}else{
			this.style.background = "#232323";
		}
	})
}


var resetButton = document.querySelector("#button");

resetButton.addEventListener("click", function(){
	colorArrToSquare(6);
})

var easyButton = document.querySelector(".mode");

easyButton.addEventListener("click", function(){
	colorArrToSquare(3);
})

function colorArrToSquare(num){
	colors = randArr(num);
	targetIndex = randIndex(num);
	console.log(targetIndex);
	targetColor = colors[targetIndex];
	console.log(targetColor);
	printRand(colors);


	var target = document.querySelector("#targetColor");
	target.textContent = targetColor;

	if(num == 3){
		resetColor(num);
	}
	for(var i = 0; i<colors.length; i++){

		squareAll[i].style.background = colors[i];
		squareAll[i].addEventListener("click", function(){
		if(this.style.background == targetColor){
			for(var i = 0; i < squareAll.length; i++){
				if(colors[i]){
					squareAll[i].style.display = "block";
					squareAll[i].style.background = targetColor;
				}
				else{
					squareAll[i].style.display = "none";
					}
				}

		}else{
			this.style.background = "#232323";
		}
	})
}
}



function randColor(){
	var r = Math.floor(256 * Math.random());
	var g = Math.floor(256 * Math.random());
	var b = Math.floor(256 * Math.random());

	var color = "rgb(" + r.toString() + ", " + g.toString() + ", " + b.toString() + ")"
	return color
}

function randArr(num){
	var colorArr = [];
	for(var i = 0; i < num; i++){
		colorArr[i] = randColor();
	}

	return colorArr;
}

function randIndex(num){
	var target = Math.floor(Math.random() * (num));
	return target;
}

function printRand(arr){
	
	for(var i = 0; i < arr.length; i++){
		console.log(arr[i]);
	}
}

function resetColor(){

	for(var i = 0; i<squareAll.length; i++){

		squareAll[i].style.background = "#232323";

	}
}




