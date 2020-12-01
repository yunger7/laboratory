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

// Hide books
const hideBox = document.querySelector('#hide');

hideBox.addEventListener('change', function(event){
	if (hideBox.checked) {
		list.style.display = "none";
	} else {
		list.style.display = "initial";
	}
});

// Filter books
const searchBar = document.forms['search-books'].querySelector('input');

searchBar.addEventListener('keyup', function(event){
  const term = event.target.value.toLowerCase();
  const books = list.getElementsByTagName('li');
  Array.from(books).forEach(function(book){
    const title = book.firstElementChild.textContent;
    if (title.toLowerCase().indexOf(term) != -1) {
	    // is on string
			book.style.display = 'block';
    } else {
			book.style.display = 'none';
		}
  });
});
