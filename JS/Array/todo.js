console.log("new app")
var question = prompt("What do you want to do?")
var toDoList = [];

while(question !== "quit"){
	if(question === "new"){
		var item = prompt("Enter new todo?")
		toDoList.push(item);
	}

	else if(question === "list"){
		toDoList.forEach(function(toDoItem,i,arr){
		 console.log(i+" "+ toDoItem)
		});
	}

	else if(question === "delete"){
		var j = prompt("Which item do you want to delete?")
		toDoList.splice(j,1);
		console.log(toDoList[j] + " removed")

	}
	var question = prompt("What do you want to do?")


}

console.log("OK, you quit the app")