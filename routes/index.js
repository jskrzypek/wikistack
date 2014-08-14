var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	var models = require('../models/');
	models.Page.find( {}, 'title url_name', function (err, docs) {
	  res.render('index', { title: 'BROWSE MY WIKISTACK', docs: docs });
	});
});

module.exports = router;
