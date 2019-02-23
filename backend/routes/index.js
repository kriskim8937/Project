var express = require('express');
var router = express.Router();
const User = require('../models/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'I love Express' });
  console.log('index!');
});
router.get('/about', (req, res) => {
  res.render('about');
});
router.get('/:name', (req, res) => {
  User.find({ name: req.params.name }, (err, user) => {
    res.render('main', { user: user } );
  });
});
module.exports = router;
