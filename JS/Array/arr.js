
alert("connected")
var arr=[1,2,3,4];

// printReverse
function printReverse(arr){
	var arrLength = arr.length;
	for(var i = arrLength-1; i>=0; i--){
		console.log(arr[i]);
	}
}

// isUniform
function isUniform(arr){
	var firstItem = arr[0];
	var check = true;
	var i = 0;

	while(i < arr.length){
		i = i + 1;
		if(arr[i] != firstItem){
			check = false;
			break;
		}
	}

	return check;
}

//sumArray()
function sumArray(arr){
	var result = 0;
		
	arr.forEach(function(item){
		result = result + item;
	});
	return result;
}


function max(arr){
	var firstItem = arr[0];

	arr.forEach(function(item){
		if(item>firstItem){
			firstItem = item;
		}});
	return firstItem;

	}

