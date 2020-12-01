const list = document.querySelector('#book-list ul');

// Delete books
list.addEventListener('click', function(event){
	// Check if delete button is pressed
	if (event.target.className == 'delete') {
		const li = event.target.parentElement;
		list.removeChild(li);
	}
});

// Add books
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(event){
	event.preventDefault();
	const value = addForm.querySelector('input[type="text"]').value;
	console.log(value);
});