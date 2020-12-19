const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log('we got a request coming in (～￣▽￣)～');

  res.setHeader('Content-Type', 'text/html');

  // Routing
  let path = './views/';
  switch(req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      res.statusCode = 301;
      res.setHeader('Location', '/');
      res.end();
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.end(data);
    }
  });
});

server.listen('3000', 'localhost', () => {
  console.log('server is now running');
});