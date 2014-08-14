var express = require('express');
var router = express.Router();
var models = require('../models/');
var urlify = require('./urlify');

/* GET users listing. */
// TODO
// ADD ROUTING FOR ADD/:thing

router.get('/:url_name', function(req, res) {
  var url_name = req.params.url_name;

  var urlified = urlify(url_name);

  console.log("Edit " + urlified);
  // models.Page.findOne( { url_name: urlified }, function (err, docs) {
  //   if (err) console.log(err);
  //   console.log("This is docs " + docs);
  //   res.render('edit_page', { title: docs.title, body: docs.body, url_name: urlified });
  // });
// });

// router.post('/submit/:url_name', function(req, res) {
//   var url_name = req.params.url_name;

//   var urlified = urlify(url_name);

//   var newTitle = req.body.title;
//   var newBody = req.body.body;


  console.log("this is an edit");

  models.Page.findOneAndRemove({ url_name: urlified }, function (err, docs) {
    if (!docs) return; 
    if (err) console.log(err);
    res.redirect("/");
  });
});

module.exports = router;
