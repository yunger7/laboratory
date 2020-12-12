const express = require('express');

// Express app
const app = express();

// Listen for requests
app.listen(3000);

// Handle responses
app.get('/', (req, res) => {
  // res.send('<h1>Home page</h1>');
  res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  // res.send('<h1>About page</h1>');
  res.sendFile('./views/about.html', { root: __dirname});
});

// Redirects
app.get('/about-us', (req, res) => {
  res.redirect('/about');
});

// 404 page
app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname});
});