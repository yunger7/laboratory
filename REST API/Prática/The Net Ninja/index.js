const express = require('express');

// Set express app
const app = express();

// Listen for requests
app.listen(process.env.PORT || 4000, () => {
  console.log('Listen for requests on port 4000');
});

// Request handlers
app.get('/', (req, res) => {
  res.send({ name: 'Rin' });
});