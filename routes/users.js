var express = require('express');
var router = express.Router();

/* GET users listing. */
// TODO
// ADD ROUTING FOR ADD/:thing

router.get('/page', function (req, res) {
	res.render('add_page', {title: 'Add Page'});
})

module.exports = router;
