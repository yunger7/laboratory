// Fetch API

// const getData = async () => {
//   var response = await fetch('data/blades.json');
//   const blades = await response.json();
//   var response = await fetch('data/drivers.json');
//   const drivers = await response.json();
//   return {blades, drivers};
// };

// getData().then(data => {
//   console.log(data.blades);
//   console.log(data.drivers);
// });

// fetch('data/blades.json').then(response => {
//   console.log('resolved', response);
//   return response.json();
// }).then(data => {
//   console.log(data);
// }).catch(err => {
//   console.log(err);
// })

const getBlades = async () => {
	const response = await fetch('data/blades.json');

	if (response.status !== 200) {
		throw new Error('cannot fetch the data');
	}

	const data = await response.json();
	return data;
};

getBlades()
	.then(data => console.log('resolved', data))
	.catch(err => console.log('rejected', err.message));