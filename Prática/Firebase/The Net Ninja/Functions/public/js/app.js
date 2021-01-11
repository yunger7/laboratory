const requestModal = document.querySelector('.new-request');
const requestLink = document.querySelector('.add-request');

// open request modal
requestLink.addEventListener('click', () => {
  requestModal.classList.add('open');
});

// close request modal
requestModal.addEventListener('click', (e) => {
  if (e.target.classList.contains('new-request')) {
    requestModal.classList.remove('open');
  }
});

// sayHello function call
// const button = document.querySelector('.call');
// button.addEventListener('click', () => {
//   // get function reference
//   const sayHello = firebase.functions().httpsCallable('sayHello');
//   sayHello({ name: 'Luis' }).then(result => {
//     console.log(result.data)
//   })
// });