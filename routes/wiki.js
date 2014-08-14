var express = require('express');
var router = express.Router();
var models = require('../models/');
var urlify = require('./urlify');



/* GET home page. */
router.get('/', function(req, res) {
	res.redirect('/');
});

router.get('/:url_name', function(req, res) {
	var url_name = req.params.url_name;
	console.log("url is " + url_name);

  var urlified = urlify(url_name);

	models.Page.findOne( { url_name: urlified }, /*'title body',*/ function (err, docs) {
		if (err) console.log(err);
		console.log("This is docs " + docs);
  	res.render("wiki", { title: docs.title, body: docs.body, url_name: urlified });
	});
});

module.exports = router;