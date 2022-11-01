let express = require('express');
let router = express();
let photosJson = require('../photos.json');
router.set("view engine" , "ejs");

router.get('/', function(req, res) {
 res.render("index");

});

module.exports = router;
