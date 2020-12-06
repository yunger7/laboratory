// Fetch API

const getData = async () => {
  var response = await fetch('data/blades.json');
  const blades = await response.json();
  var response = await fetch('data/drivers.json');
  const drivers = await response.json();
  return {blades, drivers};
};

getData().then(data => {
  console.log(data.blades);
  console.log(data.drivers);
});

// fetch('data/blades.json').then(response => {
//   console.log('resolved', response);
//   return response.json();
// }).then(data => {
//   console.log(data);
// }).catch(err => {
//   console.log(err);
// })