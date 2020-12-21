const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Set express app
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/ninjago', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

// Listen for requests
app.listen(process.env.PORT || 4000, () => {
  console.log('Listen for requests on port 4000');
});

app.use('/api', require('./routes/api'));