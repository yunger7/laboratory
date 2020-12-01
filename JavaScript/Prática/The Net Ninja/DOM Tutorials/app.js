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
	
	// Create elements
	const li = document.createElement('li');
	const bookName = document.createElement('span');
	const deleteBtn = document.createElement('span');

	// Add content
	deleteBtn.textContent = 'delete';
	bookName.textContent = value;

	// Add classes
	bookName.classList.add('name');
	deleteBtn.classList.add('delete');

	// Append to document
	li.appendChild(bookName);
	li.appendChild(deleteBtn);
	list.appendChild(li);
});