var express = require('express');
var router = express.Router();
var urlify = require('./urlify');


/* GET users listing. */
// TODO
// ADD ROUTING FOR ADD/:thing

router.get('/wiki', function (req, res) {
	res.render('add_page', {title: 'Add Page'});
});

router.post('/submit', function(req, res) {
  var models = require('../models/');
  var title = req.body.title;
  var body = req.body.body;
  
  var urlified = urlify(title);


 
  var p = new models.Page({ "title": title, "body":body, "url_name": urlified });
  p.save();
  res.redirect("/wiki/"+urlified);
});

module.exports = router;
