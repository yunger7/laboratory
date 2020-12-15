const express = require('express');

// Express app
const app = express();

// Register view engine
app.set('view engine', 'ejs');
// app.set('views', 'foldername');

// Listen for requests
app.listen(3000);

// Handle responses
app.get('/', (req, res) => {
  // res.send('<h1>Home page</h1>');
  // res.sendFile('./views/index.html', { root: __dirname });
  const blades = [
    { name: 'Pyra', driver: 'Rex', element: 'Fire' },
    { name: 'Mythra', driver: 'Rex', element: 'Light' },
    { name: 'Dromarch', driver: 'Nia', element: 'Water' },
    { name: 'Pandoria', driver: 'Zeke', element: 'Electric' }
  ];
  res.render('index', { title: 'Home', blades });
});

app.get('/about', (req, res) => {
  // res.send('<h1>About page</h1>');
  // res.sendFile('./views/about.html', { root: __dirname});
  res.render('about', { title: 'About' })
});

app.get('/blades/add', (req, res) => {
  res.render('add', { title: 'Add a blade' });
});

// Redirects
app.get('/about-us', (req, res) => {
  res.redirect('/about');
});

// 404 page
app.use((req, res) => {
  // res.status(404).sendFile('./views/404.html', { root: __dirname});
  res.status(404).render('404', { title: '404' });
});