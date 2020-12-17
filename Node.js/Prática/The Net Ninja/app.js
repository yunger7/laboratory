require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blade = require('./models/blade');

// Express app
const app = express();

// Connect to MongoDB
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(result => {console.log('Connected'); app.listen(3000);})
.catch(err => console.log(err));

// Register view engine
app.set('view engine', 'ejs');
// app.set('views', 'foldername');

// Middleware & Static files
app.use(express.static('public'));
app.use(morgan('dev'));

// Handle responses
app.get('/', (req, res) => {
  // res.send('<h1>Home page</h1>');
  // res.sendFile('./views/index.html', { root: __dirname });
  res.redirect('/blades');
});

app.get('/about', (req, res) => {
  // res.send('<h1>About page</h1>');
  // res.sendFile('./views/about.html', { root: __dirname});
  res.render('about', { title: 'About' })
});

// Blade routes
app.get('/blades', (req, res) => {
  Blade.find().sort({ name: 1 })
  .then(result => {
    res.render('index', { title: 'All blades', blades: result });
  })
  .catch((err) => {
    console.log(err);
  });
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