let textarea = document.getElementsByClassName("newTodo form-control")[0]; 
let submit = document.getElementsByClassName("submitButton")[0];
let listofTodos = document.getElementsByClassName("panel-body")[1];
let counter = 0; 
let string = "";

submit.addEventListener("click", function(event){
	// disable loading of all the page 
	event.preventDefault();
	counter++; 
	// Place logic to insert checkbox
	string += '<input type="checkbox" name="todo'+ counter +  
		'" value="todo'+ counter + '">' + textarea.value + '<br>';
	listofTodos.innerHTML = string; 
});

let markAllButton = document.getElementsByClassName("markAllButton")[0];
let allCheckboxes = document.getElementsByTagName("input");
let clearAllButton = document.getElementsByClassName("clearButton")[0];
let deleteAllButton = document.getElementsByClassName("deleteButton")[0];

markAllButton.addEventListener("click", function(event){
	// disable loading of all the page 
	event.preventDefault();
	// mark Checboxes in cycle 
	//for(let i in counter){ doesn't work
	for(let i = 0; i < counter;i++){
		allCheckboxes[i].checked = true;
	}
});

clearAllButton.addEventListener("click", function(event){
	// disable loading of all the page 
	event.preventDefault();
	// unmark Checboxes in cycle 
	for(let i = 0; i < counter;i++){
		allCheckboxes[i].checked = false;
	}
});

deleteAllButton.addEventListener("click", function(event){
	// disable loading of all the page 
	event.preventDefault();
	// restablish counter and delete checboxes
	counter = 0;
	string = ""; 
	listofTodos.innerHTML = "";

});







