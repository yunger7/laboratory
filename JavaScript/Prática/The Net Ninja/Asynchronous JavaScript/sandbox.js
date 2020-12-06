const getBlades = (resource, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback('could not fetch data', undefined);
    }
  })
  
  request.open('GET', resource);
  request.send();
};

getBlades('data/blades.json', (err, data) => {
  console.log(data);
  getBlades('data/drivers.json', (err, data) => {
    console.log(data);
  });
});
