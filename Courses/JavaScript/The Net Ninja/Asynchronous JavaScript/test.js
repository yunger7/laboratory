fetch('data/blades.json')
.then(response => response.json())
.then(data => console.log(data))