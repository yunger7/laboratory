const getBlades = (callback) => {
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
  
  request.open('GET', 'blades.json');
  request.send();
};

console.log(1);
console.log(2);

getBlades((err, data) => {
  console.log('callback fired');
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

console.log(3);
console.log(4);
