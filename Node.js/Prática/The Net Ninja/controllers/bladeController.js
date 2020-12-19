const Blade = require('../models/blade');

const blade_index = (req, res) => {
  Blade.find().sort({ name: 1 })
  .then(result => {
    res.render('blades/index', { title: 'All blades', blades: result });
  })
  .catch((err) => {
    console.log(err);
  });
}

const blade_add_post = (req, res) => {
  const blade = new Blade(req.body);

  blade.save()
  .then(result => {
    res.redirect('/blades');
  })
  .catch(err => {
    console.log(err);
  })
}

const blade_add_get = (req, res) => {
  res.render('blades/add', { title: 'Add a blade' });
}

const blade_details = (req, res) => {
  const id = req.params.id;

  Blade.findById(id)
  .then(result => {
    res.render('blades/details', { title: 'Blade details', blade: result });
  })
  .catch(err => {
    console.log(err);
  });
}

const blade_delete = (req, res) => {
  const id = req.params.id;

  Blade.findByIdAndDelete(id)
  .then(result => {
    res.json({ redirect: '/blades' });
  })
  .catch(err => console.log(err));
}

module.exports = {
  blade_index,
  blade_add_post,
  blade_add_get,
  blade_details,
  blade_delete
}