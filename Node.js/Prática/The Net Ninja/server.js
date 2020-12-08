// Requiring the HTTP core module
const http = require('http');

const server = http.createServer((req, res) => {
  // Runs every time we get a request
  console.log('request made');
});

// Make the server listen for requests on port 3000
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000')
})