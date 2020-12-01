var buttons = document.querySelectorAll('#book-list .delete');

buttons.forEach(function(btn) {
  btn.addEventListener('click', function(event){
    const li = event.target.parentElement;
    li.parentNode.removeChild(li);
  })
});