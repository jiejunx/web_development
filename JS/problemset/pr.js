alert("connected")

function isEven(number){
	if(typeof number == "number"){
		if (number % 2 === 0){
			return true;
		}
	}
return false;
}

function factorial(num){

	if(num >= 0){
	var result = 1;
	while (num >= 1){
		var result = result*num;
		num--;
	}

	return result;
}
	else{
		alert("please insert a valid input for this function")
	}

}

// function kebabToSnake(str){

// 	var str2 = str.replace(/-/g, "_");
// 	return str2;
// }


function kebabToSnake(str){

	var str2 = "";
	var count = 0;
	while(count < str.length){

		if(str[count] == "-"){
			str2 = str2 + "_";
		}
		else{
			str2 = str2 + str[count];
		}
		count ++;
	}
	return str2;
}
