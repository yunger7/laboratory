// Mongoose and MongoDB sandbox routes
app.get('/add-blade', (req, res) => {
  const blade = new Blade({
    name: 'Mythra',
    driver: 'Rex',
    element: 'Light'
  });

  blade.save()
  .then((result) => {
    res.send(result);
  })
  .catch((err) => {
    console.log(err);
  });
});

app.get('/all-blades', (req, res) => {
  Blade.find()
  .then((result) => {
    res.send(result);
  })
  .catch((err) => {
    console.log(err);
  });
});

app.get('/single-blade', (req, res) => {
  Blade.findById('5fdbcbe2d5fd1c37c0ef7274')
  .then((result) => {
    res.send(result);
  })
  .catch((err) => {
    console.log(err);
  });
});